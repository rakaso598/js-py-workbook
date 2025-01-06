// 주어진 숫자 배열에서 짝수와 홀수를 분리하여 객체로 반환하세요.

// 결과는 다음과 같아야 합니다.
// {
//   even: [2, 4, 6, 8, 10],
//   odd: [1, 3, 5, 7, 9]
// }

// for, forEach, 또는 reduce 중 하나를 사용해 문제를 해결하세요.
// 결과 객체의 키는 even과 odd여야 합니다.

{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const groupByEvenOdd = (arr) => {
    // 여기에 로직을 작성하세요
    return arr.reduce(
      (acc, curr) => {
        if (curr % 2 === 0) {
          acc.even.push(curr);
        } else {
          acc.odd.push(curr);
        }
        return acc;
      },
      { even: [], odd: [] }
    );
  };

  const result = groupByEvenOdd(numbers);
  console.log(result);
  //   { even: [ 2, 4, 6, 8, 10 ], odd: [ 1, 3, 5, 7, 9 ] }
}
