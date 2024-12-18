// fetch 수행후 항상 isLoading을 false로 만들기

let isLoading = true;

/* ..다른 코드들 */

// const url = 'https://jsonplaceholder.typicode.com/users';
const url = 'https://www.google.com';

fetch(url)
  .then((response) => {
    const contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      return response.json();
    }
    throw new Error('response is not json data');
  })
  .then((result) => {
    // 리스폰스 처리
    console.log(result);
  })
  .catch((error) => {
    // 에러 처리
    console.log(error);
  })
  .finally(()=>{
    // 에러가 잡혀도 이즈로딩 폴스와 콘솔로그는 실행되는 모습
    isLoading = false;
    console.log(isLoading);
  });

/* ..다른 코드들 */
