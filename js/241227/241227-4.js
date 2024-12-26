/*
단위: 체중 = kg, 신장 = cm
체질량지수 = 체중 / (신장 * 신장 / 10000)
*/

// 이름(name)과 체중(weight), 그리고 신장(height)을 파라미터로 입력받고,
// 체질량지수를 계산해주는 bmiCalculator함수를 작성

function bmiCalculator(name,weight,height){
  bmi = weight / (height * height / 10000);
  console.log(`${name}님의 체질량지수는 ${bmi}입니다.`);
}

// 결과
bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);