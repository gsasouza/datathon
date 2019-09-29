
# coding: utf-8

# In[5]:


import numpy as np
import numpy as np
import pandas as pd
from sklearn.cluster import KMeans
from sklearn import preprocessing

flights = pd.read_csv('flights.csv')
hotels = pd.read_csv('hotels.csv')
users = pd.read_csv('users.csv')


# In[7]:


X = pd.DataFrame(users,columns=['age', 'company']).copy()
le = preprocessing.LabelEncoder()
le.fit(X['company'])
X['company']= le.transform(X['company']) 


# In[8]:


price_mean_plane = flights.groupby('userCode').mean()['price']
for i in range(1341):
    if i not in price_mean_plane.index.tolist():
        price_mean_plane.at[i] = 0

price_mean_hotel = hotels.groupby('userCode').mean()['total']
for i in range(1341):
    if i not in price_mean_hotel.index.tolist():
        price_mean_hotel.at[i] = 0


# In[18]:


price_mean_plane.head()
X


# In[10]:


X['mean_cost_plane'] = price_mean_plane
X['mean_cost_hotel'] = price_mean_hotel


# In[11]:


Y = flights.groupby('userCode')['flightType'].value_counts()
X['firstClass'] = 0
X['premium'] = 0
X['economic'] = 0
#X['totalClasses'] = 0
#X['firstClassPercentage'] = ""
#X['premiumPercentage'] = ""
#X['economicPercentage'] = ""
#print(Y)
#type(Y)
#print(X)


for labels, cont in Y.items():
    X.at[labels[0], labels[1]] = float(cont)
    #X.at[labels[0], 'totalClasses'] = X.at[labels[0], 'premium'] + X.at[labels[0], 'economic'] + X.at[labels[0], 'firstClass']
    #X.at[labels[0], 'firstClassPercentage'] = X.at[labels[0], 'firstClass'] / X.at[labels[0], 'totalClasses']
    #X.at[labels[0], 'premiumPercentage'] = X.at[labels[0], 'premium'] / X.at[labels[0], 'totalClasses']
    #X.at[labels[0], 'economicPercentage'] = X.at[labels[0], 'economic'] / X.at[labels[0], 'totalClasses']
print(Y)
#print(X)
    


# In[12]:


print(X)


# In[24]:


user_profile_model = KMeans(n_clusters=2, random_state=0).fit(X)
user_labels = user_profile_model.labels_


# In[14]:





# In[25]:


label1_characteristics = X[user_labels == 0]
label1_characteristics.describe()


# In[26]:


label1_characteristics = X[user_labels == 1]
label1_characteristics.describe()


# In[23]:




