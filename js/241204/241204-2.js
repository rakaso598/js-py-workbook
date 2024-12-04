// 클로저 구현
function counter() {
    let count = 0; // 0으로 초기화
    return {
        upper : function () {
            count++
            console.log(`currentCount:${count}`);
        },
        downer : function () {
            count--
            console.log(`currentCount:${count}`);
        },
        getCount : function () {
            console.log(count);
        }
    };
};

const myCounter1 = counter();
myCounter1.upper(); //currentCount:1
myCounter1.upper(); //currentCount:2
myCounter1.upper(); //currentCount:3
myCounter1.getCount(); // 3
myCounter1.downer(); //currentCount:2

const myCounter2 = counter();
myCounter2.downer(); //currentCount:-1
myCounter2.downer(); //currentCount:-2

console.log(myCounter1.count); // undefined 내부변수 접근불가
console.log(myCounter1 instanceof counter); // false
console.log(myCounter1 === myCounter2); // false



