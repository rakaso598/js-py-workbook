// 첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

// 둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

// X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

// 입력 :
// 10 5 - N과 X가 주어짐
// 1 10 4 9 2 3 8 5 7 6

// 출력 :
// 1 4 2 3

const N = 10;
const X = 5;
const A = [1,10,4,9,2,3,8,5,7,6];

let result = 0;

function quest(N,X,A) {
    const result = A.filter(num=>num<X);
    return result.join(" ");
}

console.log(quest(N,X,A)); // 1 4 2 3