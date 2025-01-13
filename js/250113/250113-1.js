/**
 * 배열의 각 숫자를 제곱하고 정렬하는 함수
 * @param {number[]} arr - 숫자 배열
 * @returns {number[]} 제곱된 숫자를 오름차순으로 정렬한 배열
 */
function sortedSquares(arr) {
  // 여기에 코드를 작성하세요
  return arr.map(num => num ** 2).sort((a, b) => a - b);
  // arr을 순회하며 각 요소를 제곱한 새로운 배열을 만든 후, 오름차순으로 정렬한 배열을 반환합니다.
}

// 테스트 케이스
const inputArray = [-4, -1, 0, 3, 10];
console.log(sortedSquares(inputArray)); // 예상 결과: [0, 1, 9, 16, 100]
