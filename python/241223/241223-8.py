import pandas as pd

# 데이터 읽기
df = pd.read_csv('data/occupations.csv')

# 숫자 데이터만 선택하여 평균 계산
result = df.select_dtypes(include='number').groupby(df['occupation']).mean().sort_values(by='age')

# 결과 출력
print(result)
