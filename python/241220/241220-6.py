import pandas as pd

df = pd.read_csv('data/broadcast.csv', index_col=0)

# 행은 2012~2017까지, 열은 KBS부터 SBS까지만 추출

result=df.loc[2012:2017,'KBS':'SBS']

print(result)