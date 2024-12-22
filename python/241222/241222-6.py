import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('data/world_indexes.csv')

#world_indexes로부터 가장 연관성이 깊은 지표 찾기 (산점도)

df.plot(kind='scatter',x='Life expectancy at birth- years',y='Internet users percentage of population 2014')

plt.show()