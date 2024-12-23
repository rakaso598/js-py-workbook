#!/usr/bin/env python
# coding: utf-8

# In[3]:


import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns


# In[4]:


df = pd.read_csv('./data/customer_data.csv',sep='\t')


# In[5]:


plt.rc('font', family='NanumGothic')


# In[18]:


df2=df['signup_ym'].str.split(pat='-')
print(df2)


# In[17]:


df3=df['marital_status']
print(df3)


# In[13]:


df.plot(kind='scatter',x='amount_alcohol',y='amount_fruit')


# In[14]:


df.plot(kind='hist',y='amount_fruit')


# In[10]:


df.plot(kind='box',y='amount_fruit')


# In[11]:


print(df3)


# In[ ]:





# In[ ]:




