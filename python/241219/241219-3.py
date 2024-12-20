import numpy as np

# 매출 데이터 (리스트 형태)
revenue_in_yen = [50000, 120000, 75000]  # 예시 데이터
revenue_in_dollar = [400, 550, 320]  # 예시 데이터

# 환율
yento = 10.08
usdto = 1138

# 매출 데이터를 numpy 배열로 변환
revenue_in_yen = np.array(revenue_in_yen)
revenue_in_dollar = np.array(revenue_in_dollar)

# 원화로 변환
one = revenue_in_yen * yento
two = revenue_in_dollar * usdto

# 두 지점 매출 합산
total = one + two

print(total)
