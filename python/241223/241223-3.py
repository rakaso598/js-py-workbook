import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
# 오류시 pip install --upgrade seaborn six 수행

df = pd.read_csv('data/insurance.csv')

#흡연 여부 카테고리에 따라 보험금을 살펴볼 수 있는 그래프 그리기
sns.catplot(x='smoker',y='charges',data=df,kind='violin')

plt.show()