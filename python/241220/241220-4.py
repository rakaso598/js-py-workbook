import pandas as pd

df = pd.read_csv('data/broadcast.csv', index_col=0)

# KBS 방송국의 시청률 찾기
df2=df.loc[:,'KBS']
df3=df2.loc[2016]
print(df3) # result

# JTBC의 시청률 확인하기
df2=df.loc[:,'JTBC']
print(df2) # result

# SBS와 JTBC의 시청률만 확인하기
df2=df.loc[:,['SBS','JTBC']]
print(df2) # result