/**
 * 문자열에서 중복된 문자를 제거하는 함수
 * @param {string} str - 입력 문자열
 * @returns {string} 중복 문자가 제거된 문자열
 */
function removeDuplicates(str) {
  // 여기에 코드를 작성하세요
  return str.split("").filter((char, index) => str.indexOf(char) === index).join("");
}

// 테스트 케이스
const inputString = "programming";
console.log(removeDuplicates(inputString)); // 예상 결과: "progamin"
