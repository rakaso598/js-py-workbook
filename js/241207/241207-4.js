// 문자열 뒤집기
const str = "JavaScript";
let reversedStr = ''; // 뒤집힌 문자열을 저장할 변수

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str.charAt(i); // 문자를 추가
}

console.log(reversedStr); // tpircSavaJ 출력