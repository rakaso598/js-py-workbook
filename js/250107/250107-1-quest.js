// 각 문자열을 길이별로 그룹화하여 객체로 반환하세요.
// 결과는 객체로 반환되어야 하며, 키는 문자열의 길이, 값은 해당 길이를 가진 문자열 배열이어야 합니다.
// console.log() 로 다음과 같이 출력되어야 합니다.
// {
//     3: ['cat', 'dog'],
//     5: ['apple'],
//     6: ['banana'],
//     8: ['elephant']
//   }

{
  const input = ["apple", "banana", "cat", "dog", "elephant"];

  // 길이별로 그룹화하는 함수
  const groupByLength = (arr) => {
    return arr.reduce((acc, curr) => {
      const len = curr.length; // 현재 문자열의 길이
      if (!acc[len]) {
        acc[len] = []; // 길이에 해당하는 배열이 없으면 초기화
      }
      acc[len].push(curr); // 해당 길이의 배열에 문자열 추가
      return acc;
    }, {}); // 초기값은 빈 객체
  };

  // 결과 계산
  const result = groupByLength(input);

  // 결과 출력
  console.log(result);
}


