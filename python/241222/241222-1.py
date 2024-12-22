import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('data/gdp.csv', index_col=0)

# 여기에 코드를 작성하세요
df.plot(y=['Korea_Rep','United_States','United_Kingdom'
,'Germany','China','Japan'])

plt.show()