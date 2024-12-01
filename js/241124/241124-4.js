// 배열의 평균 구하기

// 함수
function calculateAverage(arr) {
    // 1. 배열의 합
    const sum = arr.reduce((acc, num) => acc + num, 0)
    // 2. 평균
    return sum / arr.length;
};

// 예시 입력
const numbers = [10, 20, 30, 40, 50, 60];
console.log(calculateAverage(numbers));
