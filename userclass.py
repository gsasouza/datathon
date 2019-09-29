import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn import preprocessing

import numpy as np
np.set_printoptions(threshold=np.inf)

import random

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
    for i in range(1341):
        if i not in price_mean_plane.index.tolist():
            price_mean_plane.at[i] = 0

    price_mean_hotel = hotels.groupby('userCode').mean()['total']
    for i in range(1341):
        if i not in price_mean_hotel.index.tolist():
            price_mean_hotel.at[i] = 0

    price_mean_plane.head()


    X['mean_cost_plane'] = price_mean_plane
    X['mean_cost_hotel'] = price_mean_hotel

    Y = flights.groupby('userCode')['flightType'].value_counts()
    X['firstClass'] = 0
    X['premium'] = 0
    X['economic'] = 0

    print(X)

    for labels, cont in Y.items():
        X.at[labels[0], labels[1]] = float(cont)

    user_profile_model = KMeans(n_clusters=2, random_state=0).fit(X)
    user_labels = user_profile_model.labels_

    print(user_labels)

    label1_characteristics = X[user_labels == 0]
    print(X[user_labels == 0])
    #print(label1_characteristics.describe())

    label1_characteristics = X[user_labels == 1]
    print(X[user_labels == 1])
    #print(label1_characteristics.describe())
    return user_labels

def classifyUser(labels):
    return labels[random.randint(1, labels.shape[0])]
