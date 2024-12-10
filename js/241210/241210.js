/*
try/catch를 사용하면,
에러가 발생했을 때 그 에러를 catch 블록으로 이동시켜 처리할 수 있고,
이렇게 처리된 에러는 최상위까지 전파되지 않으므로 프로그램이 중단되지 않습니다.
하지만 만약 최소한의 catch 블록이 없다면, 에러는 전파되어 최상위 컨텍스트까지 도달하고,
최종적으로 프로그램이 종료될 수 있습니다.
*/

// Promise 객체를 다루는 함수
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // 요청 성공 여부를 변경해 테스트 가능
            if (success) {
                resolve("데이터를 성공적으로 가져왔습니다!");
            } else {
                reject("데이터 가져오기에 실패했습니다.");
            }
        }, 2000); // 2초 지연
    });
}

// 비동기 함수를 처리 (성공시/실패시)
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));


