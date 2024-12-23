import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
# 오류시 pip install --upgrade seaborn six 수행

df = pd.read_csv('data/salaries.csv')

#급여 ('salary')에 대한 Violin Plot 그리기
sns.violinplot(df['salary'])

plt.show()