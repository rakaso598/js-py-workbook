// sayHi() 선언 전에 호출되었음에도 올바르게 콘솔로그 찍힘. (호이스팅)

{
    sayHi();

    function sayHi() {
        console.log('Hi!');
    }
}


// 기명 함수 표현식

const sayHi1 = function () {
    console.log('Hi');
};

console.log(sayHi1.name); // sayHi1
// 변수의 name 프로퍼티는 변수 이름을 문자열로 가짐

const sayHi2 = function printHiFunc() {
    console.log('Hi');
};

console.log(sayHi2.name); // printHiFunc
// 함수 내부에서 함수 자체를 가리킬 수 있음. 외부호출불가

