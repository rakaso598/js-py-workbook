import pandas as pd

df = pd.read_csv('data/Puzzle_before.csv')

#조건0. 코드는 4줄만 사용
#조건1. 값 80이상은 1, 아니면 0
#조건2. F열 2번 행 값을 99로 변경
#조건3. A열 값을 2배

#A열 값을 2배
df['A'] = df['A'] * 2
#값 80이상은 1, 아니면 0
df.loc[:,['B','C','D','E']] = ((df.loc[:,['B','C','D','E']])>=80).astype(int)
#F열 2번 행 값을 99로 변경
df.loc[2,'F'] = 99
#코드는 4줄만 사용
print(df)