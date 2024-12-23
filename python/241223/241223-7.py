import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv("data/museum_3.csv", dtype={'지역번호': str})

# 코드를 작성하세요.

region = {
    '02': '서울시',
    '031': '경기도', '032': '경기도',
    '033': '강원도',
    '041': '충청도', '042': '충청도', '043': '충청도', '044': '충청도',
    '051': '부산시',
    '052': '경상도', '053': '경상도', '054': '경상도', '055': '경상도',
    '061': '전라도', '062': '전라도', '063': '전라도',
    '064': '제주도',
    '1577': '기타', '070': '기타'
}

df["지역번호"] = df["지역번호"].map(region)

df.rename(columns={"지역번호": "지역명"}, inplace=True)

print(df)