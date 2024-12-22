import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('data/starbucks_drinks.csv')

#스타벅스 음료의 박스 플롯
df.plot(kind='box',y='Calories')

plt.show()