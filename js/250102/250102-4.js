let countdown = function printCountdown(n) {
    console.log(n);
    if (n === 0) {
      console.log('End!');
    } else {
      printCountdown(n - 1);
    }
  };
  
  let myFunction = countdown;
  
  countdown = null;
  
  myFunction(5); // 정상적으로 동작
  