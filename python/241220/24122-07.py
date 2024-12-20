import pandas as pd

df = pd.read_csv('data/broadcast.csv', index_col=0)
# 불린 인덱싱, 시청률이 30이 넘는 KBS만 추출

boolean=df['KBS']>30
result=df.loc[boolean,'KBS']
print(result)