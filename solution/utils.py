import pandas
import datetime


file = r"dataset_argo\dataset\flights.csv"
flights = r"dataset_argo\dataset\flights.csv"
users = r"dataset_argo\dataset\users.csv"
namec = r"4You"


def load_csv(filename):
    data = pandas.read_csv((filename))
    #print(data[:3]["from"])
    return data


def getMeanByCompany(flights, users, name, year):
    flightData = flights
    userData = users
    flightData['date'] = pandas.to_datetime(flightData['date'])

    #date['2020-07-23':'2020-07-23']]

    company = userData[userData['company'] == name]
    #print(flightData)

    #print(company['code'].tolist())

    #print(flightData.loc[company['code'].tolist()])

    flightDataCompany = flightData.loc[company['code'].tolist()]
    #flightDataCompany = flightDataCompany.set_index(['date'])

    #print(flightDataCompany)

    #year = 2020

    valuesList = []

    for i in range(1, 13): #months 1 to 12
        daterange = pandas.date_range(start=datetime.date(year, month=i, day=1), periods=30, freq='D')
        print(daterange)
        travelByMonth = flightDataCompany[flightDataCompany['date'].isin(daterange)]

        print(travelByMonth) #prints by month
        print("month: {} company: {} mean: {}".format(i, name, travelByMonth['price'].mean()))
        #begin = datetime.date(year, month=i)
        #end = datetime.date(year, month=i)
        #print(pandas.date_range(begin, end))
        #print(flightDataCompany[:])
        valuesList.append((i, travelByMonth['price'].mean()))
    return valuesList
    '''
    for user in company['code'].tolist():
        for index, row in flightData.iterrows():
            if row['userCode'] == user:
                print(row)
    
    in_range_df = df[df["date"].isin(pd.date_range("2017-01-15", "2017-01-20"))]

    print(in_range_df)  # print result
    '''

#print("NE ISSO NE")
#print(getMeanByCompany(load_csv(flights), load_csv(users), namec, 2020))
