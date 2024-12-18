// 새 직원 정보는 원하는 대로 작성하세요
const newMember = {
    name:  'abc',
    email: 'abc@abc.com',
      department: 'abc'
  };
  
  
  fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember),
  })
    .then(() => {
      fetch('https://learn.codeit.kr/api/members')
        .then((response) => response.text())
        .then((result) => {
          const members = JSON.parse(result);
          console.log(members[members.length - 1]);
        });
    });