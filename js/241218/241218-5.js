fetch('https://first.com', (response) => {
    // Do Something
    fetch('https://second.com', (response) => {
      // Do Something
      fetch('https;//third.com', (response) => {
        // Do Something
        fetch('https;//fourth.com', (response) => {
          // Do Something
        });
      });
    });
  });

  // Promise 객체를 사용하면 callback hell 문제를 해결할 수 있습니다.
  // 비동기 작업 처리에 관한 좀 더 세밀한 처리를 자바스크립트 문법 단에서 해결 (ES6 문법)

  fetch('https://first.com')
  .then((response) => {
    // Do Something 
    return fetch('https://second.com');
  })
  .then((response) => {
    // Do Something 
    return fetch('https://third.com');
  })
  .then((response) => { 
    // Do Something 
    return fetch('https://third.com');
  });
