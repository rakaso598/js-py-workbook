import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('data/starbucks_drinks.csv')

#스타벅스 음료의 칼로리 분포 히스토그램, 구간은 총 20개
df.plot(kind='hist',y='Calories', bins=20)

plt.show()