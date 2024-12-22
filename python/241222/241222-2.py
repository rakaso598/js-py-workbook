import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('data/silicon_valley_summary.csv')

# 실리콘 밸리에서 일하는 남자 관리자 (Managers)에 대한 인종 분포를 막대 그래프로 그리기
b_manager=df['job_category'] == 'Managers'
b_male=df['gender'] == 'Male'
b_not_all = df['race_ethnicity'] != 'All'

df[b_male & b_manager & b_not_all].plot(kind='bar', x='race_ethnicity',  y='count')

plt.show()