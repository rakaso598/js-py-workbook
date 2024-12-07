// 숫자 배열
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 짝수만 반환하는 코드를 작성하세요.
const answer = numbers.reduce((acc, curr) => {
    if (curr % 2 === 0) acc.push(curr);
    return acc;
}, []);
console.log(answer);