let today = new Date(2112, 7, 24); // 2112년 8월 24일
let jaeSangStart = new Date(2109, 6, 1); // 2109년 7월 1일

function workDayCalc(startDate) {
    // 오늘 날짜와 입사일의 차이를 계산
    let timeDifference = today - startDate;
    // 밀리초를 일수로 변환
    let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    // 입사한 지 1일째부터 시작하므로 1을 더함
    return dayDifference + 1;
}

console.log(`오늘은 입사한 지 ${workDayCalc(jaeSangStart)}일째 되는 날 입니다.`); // 결과를 출력