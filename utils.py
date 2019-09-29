import pandas
import datetime
import numpy

flights = r"dataset_argo\dataset\flights.csv"
users = r"dataset_argo\dataset\users.csv"
hotels = r"dataset_argo\dataset\hotels.csv"
nameC = "4You"

def load_csv(filename):
    data = pandas.read_csv((filename))
    # print(data[:3]["from"])
    return data


def parseNAN(val):
    if numpy.isnan(val):
        return 0
    else:
        return val


def getAverageByCompany(flights, users, hotels, name, **kwargs):
    flightData = load_csv(flights)
    userData = load_csv(users)
    hotelData = load_csv(hotels)

    flightData['date'] = pandas.to_datetime(flightData['date'])
    hotelData['date'] = pandas.to_datetime(hotelData['date'])

    years = set()

    for year in flightData['date'].dt.year:
        years.add(year)

    print(years)

    company = userData[userData['company'] == name]

    flightData = flightData.set_index(['userCode']).loc[company['code'].tolist()]
    hotelDataCompany = hotelData.set_index(['userCode']).loc[company['code'].tolist()]

    flightTypes = ["economic", "premium", "firstClass"]

    valuesListTypes = []

    for type in flightTypes:
        flightDataCompany = flightData.loc[flightData['flightType'] == type]
        if 'year' in kwargs:
            valuesList = []
            for i in range(1, 13):  # months 1 to 12
                daterange = pandas.date_range(start=datetime.date(kwargs['year'], month=i, day=1),
                                              periods=30, freq='D')  # 30 days of the month

                flightByMonth = flightDataCompany[flightDataCompany['date'].isin(daterange)]
                hotelByMonth = hotelDataCompany[hotelDataCompany['date'].isin(daterange)]

                travelByMonthMean = flightByMonth['price'].mean() + hotelByMonth['price'].mean()
                valuesList.append((i, travelByMonthMean))
            return valuesList
        else:
            for year in years:
                valuesList = []
                for i in range(1, 13):  # months 1 to 12
                    daterange = pandas.date_range(start=datetime.date(year, month=i, day=1),
                                                  periods=30, freq='D')  # 30 days of the month

                    flightByMonth = flightDataCompany[flightDataCompany['date'].isin(daterange)]
                    hotelByMonth = hotelDataCompany[hotelDataCompany['date'].isin(daterange)]
                    travelByMonthMean = parseNAN(flightByMonth['price'].mean()) + parseNAN(hotelByMonth['price'].mean())
                    valuesList.append((i, travelByMonthMean))

                valuesListTypes.append((year, valuesList))
        return valuesListTypes


def fillAvg(averageList, dim):
    #print("dimension is {}".format(dim))
    count = 0
    sum = 0
    for vals in averageList:
        if vals[dim] is not -1:
            sum += vals[dim]
            count = count + 1

    for vals in averageList:
        if vals[dim] is -1 and count is not 0:
            vals[dim] = sum / count

    return averageList


def computeTravelCosts(flights, users, hotels, name):
    flightData = load_csv(flights)
    userData = load_csv(users)
    hotelData = load_csv(hotels)

    company = userData[userData['company'] == name]
    userList = company['code'].tolist()

    flightData = flightData.set_index(['userCode'])
    flightDataCompany = flightData.loc[userList]
    hotelData = hotelData.set_index(['userCode'])
    hotelDataCompany = hotelData.loc[userList]

    userAverageList = []

    for user in userList:
        userFlightAverage = flightDataCompany.loc[user]['price'].mean()
        if numpy.isnan(userFlightAverage):
            userFlightAverage = -1
        userHotelAverage = hotelDataCompany.loc[user]['total'].mean()
        if numpy.isnan(userHotelAverage):
            userHotelAverage = -1

        userAverageList.append([user, userFlightAverage, userHotelAverage])

    #removing invalid values in each field
    fillAvg(userAverageList, 1)
    fillAvg(userAverageList, 2)

    return userAverageList


def getCostyUsers(costList, num): #retrieves N costy users by UID
    userData = load_csv(users)

    arr = numpy.array(costList)
    #print(arr[:, 1])

    costy = []
    costArr = arr[:, 1] + arr[:, 2]

    ind = numpy.argpartition(costArr, -num)[-num:]
    #print(ind)
    for i in ind:
        #print(costList[i])
        #print(userData.loc[i]['name'])
        costy.append((userData.loc[i]['name'], costList[i][1] + costList[i][2]))

    return costy
