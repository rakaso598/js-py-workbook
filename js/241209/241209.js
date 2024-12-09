const numbers = [1, 2, 3, 4, 5]; // 예시 데이터

function sumArray(arr) {
    // 여기에 코드를 작성하세요
    return arr.reduce((acc, curr) => acc = acc + curr, 0);
}

console.log(sumArray(numbers)); // 예상 출력: 15
