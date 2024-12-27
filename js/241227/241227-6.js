function calcWage(name, time, wage) {
    let total = time * wage;
  
    console.log(`${name}님의 근무시간은 총 ${time}시간이며, 최종 급여는 ${wage}원 입니다.`);
  }
  
  // 테스트 코드
  calcWage('김윤식', 208, 11340);
  calcWage('성규재', 175, 12160);
  calcWage('손태웅', 161, 13070);
  calcWage('허우선', 222, 10980);