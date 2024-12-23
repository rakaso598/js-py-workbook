import pandas as pd

df = pd.read_csv('data/occupations.csv')

occupation_group = df.groupby('occupation')

# 알고싶은 건 gender 에 대한 값 M, F를 숫자 0, 1 로
# 새로운 gender 열 생성, 0, 1로 표현
df.loc[df['gender'] == 'M', 'gender'] = 0
df.loc[df['gender'] == 'F', 'gender'] = 1

#gender에 대한 평균만 Series로
occupation_group.mean()['gender'].sort_values(ascending=False)