// 재귀함수구현

let countdown = function (n) {
    // 전달받은 n을 출력, 여기서는 5
    console.log(n);
    if (n === 0) {
        console.log('End!')
    } else {
        countdown(n - 1);
        /*
            countdown(n - 1);
            countdown()를 호출하고 (n - 1)값을 파라미터로 전달
            countdown(4) 호출, countdown(3) 호출, countdown(2) 호출, countdown(1) 호출, countdown(0) 호출.
            countdown() 함수가 일단 호출되면 전달받은 파라미터 값을 콘솔에 출력하므로 4, 3, 2 ,1, 0 순으로 출력될 것.
            countdown(0)이 호출되면 if (n === 0)을 만족하여 콘솔에 End! 출력. 함수 종료.
        */
    }
};
countdown(5);