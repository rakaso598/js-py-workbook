import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
df = pd.read_csv('./data/customer_data.csv',sep='\t')
plt.rc('font', family='NanumGothic')


df2=df['signup_ym'].str.split(pat='-')

df3=df['marital_status']

# df.plot(kind='scatter',x='amount_alcohol',y='amount_fruit')
# df.plot(kind='hist',y='amount_fruit')
df.plot(kind='box',y='amount_fruit')


print(df3)

plt.show()