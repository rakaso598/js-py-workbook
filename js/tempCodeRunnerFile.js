// sumArray

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