import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
# 오류시 pip install --upgrade seaborn six 수행

df = pd.read_csv('data/subway.csv')

#승차인원에 대한 KDE Plot 그리기

sns.kdeplot(df['in'])

plt.show()