import sklearn
import pandas as pd
from sklearn.cluster import KMeans
from sklearn import preprocessing
from sklearn.utils import shuffle
import numpy as np

np.set_printoptions(threshold=np.inf)

def computeerror(realVals, predictedVals):
    #if realVals[realVals[] != 0]:
    #return 1 -  abs(realVals - predictedVals + 1)/(realVals+1)
    return predictedVals[realVals != 0]/realVals[realVals != 0]

'''
    print("things: {} {}".format(
            np.count_nonzero(realVals),
            np.count_nonzero(predictedVals)
    ))
'''

def trainModels():


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
    #print("flight mean {}".format(price_mean_plane.mean()))
    #print("flight deviation {}".format(price_mean_plane.std()))

    for i in range(1341):
        if i not in price_mean_plane.index.tolist():
            price_mean_plane.at[i] = 0

    price_mean_hotel = hotels.groupby('userCode').mean()['total']

    #print("hotel mean {}".format(price_mean_hotel.mean()))
    #print("hotel std {}".format(price_mean_hotel.std()))
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

    for labels, cont in Y.items():
        X.at[labels[0], labels[1]] = float(cont)

    X = shuffle(X)

    #print("shape {}".format(X.shape))

    nFirstRows = int(X.shape[0] * 0.3)
    #print(nFirstRows)
    nLastRows = X.shape[0] - nFirstRows
    #print(nLastRows)

    #X.head(nFirstRows)


    '''
    print(X)
    print(X.drop(columns=['mean_cost_plane', 'mean_cost_hotel']))
    print(X)
    '''


    dataset = X.drop(columns=['mean_cost_plane', 'mean_cost_hotel'])

    dataset["empresa_0"] = 0
    dataset["empresa_1"] = 0
    dataset["empresa_2"] = 0
    dataset["empresa_3"] = 0
    dataset["empresa_4"] = 0

    #rint(dataset)

    for index, series in dataset.iterrows():
        val = series['company']
        if val == 0:
            dataset.at[index, "empresa_0"] = 1
        elif val == 1:
            dataset.at[index, "empresa_1"] = 1
        elif val == 2:
            dataset.at[index, "empresa_2"] = 1
        elif val == 3:
            dataset.at[index, "empresa_3"] = 1
        elif val == 4:
            dataset.at[index, "empresa_4"] = 1

    dataset = dataset.drop(columns=["company"])

    test_set = dataset.tail(nLastRows)
    training_set = dataset.head(nFirstRows)

    training_labels_hotel = X.head(nFirstRows)['mean_cost_hotel']
    training_labels_flight = X.head(nFirstRows)['mean_cost_plane']
    test_labels_hotel = X.tail(nLastRows)['mean_cost_hotel']
    test_labels_flight = X.tail(nLastRows)['mean_cost_plane']

    #training_set = training_set.drop(columns=["place"])

    model_flight_cost = sklearn.svm.LinearSVR(C=1, max_iter=10000)
    model_hotel_cost = sklearn.svm.LinearSVR(C=1, max_iter=10000)

    model_flight_cost.fit(training_set, training_labels_flight)
    model_hotel_cost.fit(training_set, training_labels_hotel)

    hotel_predicted_labels = model_hotel_cost.predict(test_set)
    flight_predicted_labels = model_flight_cost.predict(test_set)
    
    print(test_set)


print(computeerror( test_labels_hotel,  hotel_predicted_labels).mean())
print(computeerror( test_labels_flight, flight_predicted_labels).mean())

#"Real" set example

production_fake_set     = [[20, 172, 112, 114, 1, 0, 0, 0, 0]]
production_fake_set.append([20,   5,  35,  12, 0, 1, 0, 0, 0])
production_fake_set.append([20, 172, 112, 114, 0, 0, 1, 0, 0])
production_fake_set.append([20, 172, 112, 114, 0, 0, 0, 1, 0])
production_fake_set.append([20, 172, 112, 114, 0, 0, 0, 0, 1])