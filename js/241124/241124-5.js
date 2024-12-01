/*
    console.log(arr.every(num => typeof num === "number")); // 숫자 검사

    // 1. 숫자로만 구성된 배열:
    [1, 2, 3].every(num => typeof num === "number"); // true

    // 2. 문자열이 포함된 배열:
    [1, 2, "hello"].every(num => typeof num === "number"); // false

    // 3. 비어 있는 배열:
    [].every(num => typeof num === "number"); // true (조건을 위반하는 요소가 없으므로 true)
*/

function sumArray(arr) {
    // 유효성 검사: 배열의 모든 요소가 숫자인가?
    if (!arr.every(num => typeof num === "number")) {
        return "Invalid array";
    }
    return sum = arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, 20, "hello"]));
console.log(sumArray([5, -5, 15, 25]));