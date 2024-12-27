// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요
function checkPrice(grade) {
  switch (grade) {
    case "R":
      console.log(`R석은 ${RPrice}만 원입니다.`);
      break;
    case "VIP":
      console.log(`VIP석은 ${VIPPrice}만 원입니다.`);
      break;
    case "S":
      console.log(`S석은 ${SPrice}만 원입니다.`);
      break;
    case "A":
      console.log(`A석은 ${APrice}만 원입니다.`);
      break;
    default:
      console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`);
  }
}

// 테스트 코드
checkPrice("R");
checkPrice("VIP");
checkPrice("S");
checkPrice("A");
checkPrice("B");
