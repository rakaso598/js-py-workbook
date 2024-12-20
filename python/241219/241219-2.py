import numpy as np

# 신주쿠점 매출 (단위: 엔)
sales_shinjuku = np.array([50000, 120000, 75000])  # 예시 데이터
# LA 지점 매출 (단위: 달러)
sales_la = np.array([400, 550, 320])  # 예시 데이터

# 환율
yen_to_krw = 10.08
usd_to_krw = 1138

# 매출을 원화로 변환
sales_shinjuku_krw = sales_shinjuku * yen_to_krw
sales_la_krw = sales_la * usd_to_krw

# 두 지점의 매출 합산 (원화)
total_sales_krw = sales_shinjuku_krw + sales_la_krw

print(total_sales_krw)
