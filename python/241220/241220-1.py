import pandas as pd

# 판다스 데이터프레임 만들기
df = pd.DataFrame([['Taylor Swift','December 13, 1989','Singer-songwriter']
    ,['Aaron Sorkin','June 9, 1961','Screenwriter']
    ,['Harry Potter','July 31, 1980','Wizard']
    ,['Ji-Sung Park','February 25, 1981','Footballer']
    ])

df.columns = ['name','birthday','occupation']

# 테스트 코드
df