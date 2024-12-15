function createTodo(value, order) {
    const list = document.querySelector('.list');
    const node = document.createElement('li');
    if (value.isClear) {
      node.classList.add('item', 'done');
    } else {
      node.classList.add('item');
    }
    node.textContent = `${order}. ${value.title}`;
    list.appendChild(node);
  }
  
  const data = [
    {
      title: '자바스크립트 공부하기',
      isClear: true,
    },
    {
      title: '쓰레기 분리수거',
      isClear: false,
    },
    {
      title: '고양이 밥주기',
      isClear: true,
    },
    {
      title: '독서하기',
      isClear: false,
    },
    {
      title: '영어 공부하기',
      isClear: false,
    },
  ];
  
  // 여기에 코드를 작성해 주세요.

// 1.이터러블 반복 통해서 data를 하나하나 꺼내고, createTodo에 들어가도록 작성
// 2. 인덱스를 1,2,3,4처럼..
data.forEach(({title, isClear},index)=>{
    createTodo({title, isClear}, index+1);
});

// createTodo({ title: '인터랙티브 자바스크립트', isClear: true }, 4)