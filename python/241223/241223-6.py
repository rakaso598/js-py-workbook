import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('data/museum_2.csv')

#'운영기관전화번호' column의 맨 앞 3자리를 추출하고, '지역번호' column에 넣기.
pn=df['운영기관전화번호'].str.split(pat='-',n=2,expand=True)
df['지역번호']=pn[0]

print(df)