function printTriangle(height) {
    let message = '';
      for(let i=1; i<=height; i++){
        message += '*';
        console.log(message);
      }
  }
  
  // 테스트 코드
  console.log('높이: 1');
  printTriangle(1);
  
  console.log('높이: 3');
  printTriangle(3);
  
  console.log('높이: 5');
  printTriangle(5);