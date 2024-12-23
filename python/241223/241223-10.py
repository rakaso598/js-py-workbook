import pandas as pd

museum = pd.read_csv("data/museum_4.csv", dtype={'지역번호': str})
number = pd.read_csv("data/region_number.csv", dtype={'지역번호': str})

# .merge() 메소드를 활용해서 museum_3.csv에 '지역명' column을 추가
combined=pd.merge(museum, number, on='지역번호',how='left')
print(combined)