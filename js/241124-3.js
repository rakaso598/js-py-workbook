const numbers = [1, 2, 3, 4, 5];

// 메서드 체이닝

const result = numbers
    .filter(num => num % 2 === 0) // [2,4]
    .map(num => num * 2) // [4,8]
    .reduce((sum, num) => sum + num, 0); // 4+8

console.log(result); // 12



