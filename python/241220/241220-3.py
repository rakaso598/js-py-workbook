import pandas as pd

# 여기에 코드를 작성하세요
csv=pd.read_csv('./data/mega_millions.csv')
dfcsv=pd.DataFrame(csv)

dfcsv.columns=['Draw Date','Winning Numbers','Mega Ball','Multiplier']
df=dfcsv.set_index('Draw Date')

# 테스트 코드
print(df)