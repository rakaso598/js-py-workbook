import pandas as pd

samsong_df = pd.read_csv('data/samsong.csv')
hyundee_df = pd.read_csv('data/hyundee.csv')

# 고객분석 - 사람들의 요일별 문화생활비 (pd.merge)
dfs=samsong_df.loc[:,['요일','문화생활비']]
dfh=hyundee_df.loc[:,['요일','문화생활비']]

dfs.columns=['day','samsong']
dfh.columns=['day','hyundee']

result=pd.merge(dfs,dfh, on='day')

print(result)
