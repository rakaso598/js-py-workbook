/**
 * 짝수 숫자만 필터링하는 함수
 * @param {number[]} arr - 숫자로 이루어진 배열
 * @returns {number[]} 짝수만 포함된 배열
 */
function filterEvenNumbers(arr) {
  // 여기에 코드를 작성하세요
  return arr.filter((num) => num % 2 === 0);
}

// 테스트 케이스
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filterEvenNumbers(inputArray)); // 예상 결과: [2, 4, 6, 8]
