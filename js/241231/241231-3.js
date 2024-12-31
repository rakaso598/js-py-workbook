// n = 납입 개월 수
// r = 이자율
// v = 월 납입금 
function interestCalculator(r,v,n){
    interest = v * n * (n+1) / 2 * r / 12;
    return console.log(Math.round(interest));
  }
  // 돈은 소수점이 없으므로 반올림 처리
  
  // 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
  interestCalculator(0.043, 800000, 24);
  
  // 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우
  interestCalculator(0.043, 600000, 24);