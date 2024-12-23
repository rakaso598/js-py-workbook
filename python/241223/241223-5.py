import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('data/museum_1.csv')

#시설명에 '대학'이 포함되어 있으면 '대학', 그렇지 않으면 '일반'으로 나누어 '분류' column에 입력한다.
is_university = df['시설명'].str.contains('대학')
df.loc[is_university == True, '분류'] = '대학'
df.loc[is_university == False, '분류'] = '일반'

print(df)