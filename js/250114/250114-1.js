// 문제를 해결하는 함수
function solution(input) {
  // 인풋을 받아서 분자열을 역순으로 정렬하는 코드
  output = input.split("").reverse().join("");
  return output;
}

// 입력 예제
const input = "vscode";
console.log(solution(input)); // 출력 예제
