function reverseNumber(num) {
    // 여기에 코드를 작성하세요.
    const isNegative = num < 0; // 음수인지확인
    const result = Math.abs(num)
        .toString().split('').reverse().join('');
    return result;
}

// 테스트
console.log(reverseNumber(12345));  // 54321
console.log(reverseNumber(-6789)); // -9876

// 배열 합치기 .join()
const arr = ["apple", "banana", "Cream"];
const result = arr.join();
console.log(result);

// split()으로 문자열을 배열화
const splited = result.split('');
console.log(splited);