// TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성
function teraToGiga(num){
    console.log(`${num}TB는\n${num*1024}GB 입니다.`);
  }
  function teraToMega(num){
    console.log(`${num}TB는\n${num*1024*1024}MB 입니다.`);
  }
  
  // TB -> GB 테스트
  teraToGiga(2);
  // TB -> MB 테스트
  teraToMega(2);