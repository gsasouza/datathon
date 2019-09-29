import sklearn
import pandas as pd
from sklearn import preprocessing
from sklearn.utils import shuffle
import numpy as np
import random

np.set_printoptions(threshold=np.inf)

def computeerror(realVals, predictedVals):
    #if realVals[realVals[] != 0]:
    #return 1 -  abs(realVals - predictedVals + 1)/(realVals+1)
    return predictedVals[realVals != 0]/realVals[realVals != 0]

def trainModels():
    # preset database

    flights = r"dataset_argo\dataset\flights.csv"
    users = r"dataset_argo\dataset\users.csv"
    hotels = r"dataset_argo\dataset\hotels.csv"

    flights = pd.read_csv(flights)
    hotels = pd.read_csv(hotels)
    users = pd.read_csv(users)

    X = pd.DataFrame(users, columns=['age', 'company']).copy()
    le = preprocessing.LabelEncoder()

    le.fit(X['company'])
    X['company']= le.transform(X['company'])

    price_mean_plane = flights.groupby('userCode').mean()['price']

    for i in range(1341):
        if i not in price_mean_plane.index.tolist():
            price_mean_plane.at[i] = 0

    price_mean_hotel = hotels.groupby('userCode').mean()['total']

    for i in range(1341):
        if i not in price_mean_hotel.index.tolist():
            price_mean_hotel.at[i] = 0

    price_mean_plane.head()

    '''
    location_hotel = hotels.groupby('place')
    print(location_hotel)
    '''

    X['mean_cost_plane'] = price_mean_plane
    X['mean_cost_hotel'] = price_mean_hotel

    Y = flights.groupby('userCode')['flightType'].value_counts()
    X['firstClass'] = 0
    X['premium'] = 0
    X['economic'] = 0

    #parses number of travels of each type
    for labels, cont in Y.items():
        X.at[labels[0], labels[1]] = float(cont)

    #so we can slice the dataset
    X = shuffle(X)

    nFirstRows = int(X.shape[0] * 0.3)
    nLastRows = X.shape[0] - nFirstRows


    dataset = X.drop(columns=['mean_cost_plane', 'mean_cost_hotel'])

    #area here mean company division (i.e. devops, mobile, financial)
    dataset["area_0"] = 0
    dataset["area_1"] = 0
    dataset["area_2"] = 0
    dataset["area_3"] = 0
    dataset["area_4"] = 0

    for index, series in dataset.iterrows():
        val = series['company']
        if val == 0:
            dataset.at[index, "area_0"] = 1
        elif val == 1:
            dataset.at[index, "area_1"] = 1
        elif val == 2:
            dataset.at[index, "area_2"] = 1
        elif val == 3:
            dataset.at[index, "area_3"] = 1
        elif val == 4:
            dataset.at[index, "area_4"] = 1

    dataset = dataset.drop(columns=["company"])

    test_set = dataset.tail(nLastRows)
    training_set = dataset.head(nFirstRows)

    training_labels_hotel = X.head(nFirstRows)['mean_cost_hotel']
    training_labels_flight = X.head(nFirstRows)['mean_cost_plane']


    #validation labels, if needed
    #validation_labels_hotel = X.tail(nLastRows)['mean_cost_hotel']
    #validation_labels_flight = X.tail(nLastRows)['mean_cost_plane']

    #training model with default parameters
    model_flight_cost = sklearn.svm.LinearSVR(C=1, max_iter=10000)
    model_hotel_cost = sklearn.svm.LinearSVR(C=1, max_iter=10000)

    model_flight_cost.fit(training_set, training_labels_flight)
    model_hotel_cost.fit(training_set, training_labels_hotel)

    #for prediction
    #hotel_predicted_labels = model_hotel_cost.predict(test_set)
    #flight_predicted_labels = model_flight_cost.predict(test_set)

    return (model_flight_cost, model_hotel_cost)


def predict(model_flight, model_hotel):
    #"Real" set example, set of users with data for prediction
    production_fake_set     = [[20, 172, 112, 114, 1, 0, 0, 0, 0]]
    production_fake_set.append([20,   5,  35,  12, 0, 1, 0, 0, 0])
    production_fake_set.append([20,  14,   1,  20, 0, 0, 1, 0, 0])
    production_fake_set.append([20,   1,  12,   4, 0, 0, 0, 1, 0])
    production_fake_set.append([20,   0,  50,  30, 0, 0, 0, 0, 1])

    #selected_user = random.randint(1, 5)

    #uses first "real" user
    selected_user = 0
    userlist = [production_fake_set[selected_user]]

    #predicts costs for flight and hotel
    return (model_flight.predict(userlist)[0],
            model_hotel.predict(userlist)[0]
            )
