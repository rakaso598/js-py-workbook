import pandas as pd

df = pd.read_csv('data/broadcast.csv', index_col=0)
# SBS가 TV CHOSUN보다 더 시청률이 낮았던 시기의 데이터를 확인하기

r1=df['SBS']
r1

r2=df[['SBS','TV CHOSUN']]
r2

r3=df['SBS'] < df['TV CHOSUN']
r3

r4=df.loc[r3,['SBS','TV CHOSUN']]
print(r4)
