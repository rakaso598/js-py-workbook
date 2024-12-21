import pandas as pd

df = pd.read_csv('data/body_imperial1.csv', index_col=0)

# ID 1의 무게를 200으로 변경하세요.
df.iloc[:, 1].fillna(200, inplace=True)

# ID 21의 row를 삭제하세요.
df.drop(21,inplace=True)

# ID 20의 row를 추가하세요. ID 20의 키는 70, 무게는 200입니다.
df.loc[len(df)] = [70, 200]

# 출력
print(df)