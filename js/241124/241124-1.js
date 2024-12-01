// 기존 함수
function greet1(name) {
    return `Hello, ${name}!`;
}

// 화살표 함수
const greet2 = (name) => `Hello, ${name}!`;


// 매개변수가 없는 화살표 함수
const greet3 = () => `Hello, Node.js!`;

// 이스케이프 문자 "" 표현
const quote1 = () => "Hello, \"Node.js!\"";

console.log(greet1("Node.js")); // 출력: Hello, Node.js!
console.log(greet2("Node.js")); // 출력: Hello, Node.js!
console.log(greet3("Node.js")); // 출력: Hello, Node.js!
console.log(quote1("Node.js")); // 출력: Hello, Node.js!