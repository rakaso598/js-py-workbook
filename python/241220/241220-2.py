# dtype	설명
# int64	정수
# float64	소수
# object	텍스트
# bool	불린(참과 거짓)
# datetime64	날짜와 시간
# category	카테고리

import pandas as pd

# 여기에 코드를 작성하세요
info=pd.read_csv('./data/popular_baby_names.csv')
df=pd.DataFrame(info)

# 테스트 코드
df