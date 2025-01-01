function calculateChange(payment, cost) {
  const fiftyThousand = 50000;
  const tenThousand = 10000;
  const fiveThousand = 5000;
  const oneThousand = 1000;

  let fiftyCount = 0;
  let tenCount = 0;
  let fiveCount = 0;
  let oneCount = 0;

  let result = payment - cost;

  fiftyCount = Math.floor(result / fiftyThousand);
  result %= fiftyThousand;

  tenCount = Math.floor(result / tenThousand);
  result %= tenThousand;

  fiveCount = Math.floor(result / fiveThousand);
  result %= fiveThousand;

  oneCount = Math.floor(result / oneThousand);
  result %= oneThousand;

  console.log(
    `50000원 지폐: ${fiftyCount}장\n10000원 지폐: ${tenCount}장\n5000원 지폐: ${fiveCount}장\n1000원 지폐: ${oneCount}장`
  );
}

// 테스트 코드
calculateChange(100000, 33000);
console.log("");
calculateChange(500000, 378000);

// 결과
// 50000원 지폐: 1장
// 10000원 지폐: 1장
// 5000원 지폐: 1장
// 1000원 지폐: 2장

// 50000원 지폐: 2장
// 10000원 지폐: 2장
// 5000원 지폐: 0장
// 1000원 지폐: 2장
