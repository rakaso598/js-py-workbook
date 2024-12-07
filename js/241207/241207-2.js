// 문자열 배열
const words = ["apple", "banana", "cherry", "blueberry", "grape"];

// 가장 긴 문자열을 찾는 코드를 작성하세요.
const answer = words.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");

console.log(answer); // blueberry