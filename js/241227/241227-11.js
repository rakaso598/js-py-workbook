// 세트 메뉴 주문 시 따로 말씀하지 않으시면, 음료는 스프라이트가 기본으로 제공
function orderSetMenu(sandwich, drink = '스프라이트') {
    console.log(`주문하신 ${sandwich}, ${drink} 세트 메뉴 나왔습니다!`)
    
  }
  
  
  // 테스트 코드
  orderSetMenu('서브웨이 클럽');
  orderSetMenu('터키베이컨 아보카도', '코카콜라');
  orderSetMenu('서브웨이 멜트');
  orderSetMenu('이탈리안 비엠티', '닥터페퍼');
  orderSetMenu('에그마요', '환타 오렌지');