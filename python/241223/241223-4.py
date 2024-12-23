import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

df = pd.read_csv('data/exam.csv')
#학생들의 시험점수를 바탕으로 상관계수 알아보기
#색이 밝을수록 상관계수 더 높음 - heatmap 메소드
#annot=True 옵션 추가하면, 색상 뿐 아니라 숫자도 함께 보여줌.

# 숫자 데이터만 선택
numerical_data = df[["math score", "reading score", "writing score"]]

# 상관계수 계산
correlation_matrix = numerical_data.corr()

# 히트맵 그리기
plt.figure(figsize=(8, 6))
sns.heatmap(correlation_matrix, annot=True)
plt.title("Correlation Heatmap")
plt.show()
