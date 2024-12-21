import pandas as pd

df = pd.read_csv('data/body_imperial2.csv', index_col=0)

#비만도 킬람 추가, 값 = 정상
df['비만도'] = '정상'

#0~10행까지는 Male, 11~20행까지는 Female
df.loc[:10,"Gender"] = 'Male'
df.loc[11:20,"Gender"] = 'Female'

#결과
print(df)