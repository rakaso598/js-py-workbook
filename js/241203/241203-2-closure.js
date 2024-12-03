// 클로저
// myCounter() 에 counter()를 담으면 counter()의 리턴값이 반환
// myCounter() 는 counter()의 메서드를 사용하고 내부의 변수값을 조정
// 할 수 있지만 counter() 의 내부 변수값에 직접 접근 불가
// => 곧 캡슐화, 정보 은닉을 함수로 구현 (클로저)

function counter() {
    let count = 0;
    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function () {
            return count;
        },
    };
}

console.log(counter().getCount());
counter().increment();
counter().increment();
console.log(counter().getCount());

const myCounter = counter();
myCounter.increment(); // Count: 1
myCounter.increment(); // Count: 2
console.log(myCounter.getCount()); // 2
myCounter.decrement(); // Count: 1