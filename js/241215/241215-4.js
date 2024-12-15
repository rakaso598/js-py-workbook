/*
주어진 템플릿 속의 data 변수에는 '주식회사 고두잇'의 유저 정보가 담겨 있는데요.
유저 이름과 전화번호를 입력하면, 해당하는 유저의 이메일을 찾아주는 기능을 만들고자 합니다.

find 메소드를 활용해서 입력받은 유저 이름과 전화번호가 일치하는 객체를 찾아 user 변수에 할당해 주세요!

findEmail 함수가 제대로 완성된다면, 각 input 태그에 적절한 값을 입력했을 때 해당하는 이메일을 잘 찾아줄 겁니다!
*/
const nameInput = document.querySelector('#user-name');
const phoneInput = document.querySelector('#phone-number');
const findBtn = document.querySelector('#find');

const data = [
  { userName: '막대기', phoneNumber: '01012341111', email: 'stick@go_do_it.kr' },
  { userName: 'young', phoneNumber: '01012342222', email: 'kang@go_do_it.kr' },
  { userName: '코린이', phoneNumber: '01012343333', email: 'corin2@go_do_it.kr' },
  { userName: 'captain', phoneNumber: '01012344444', email: 'crew@go_do_it.kr' },
  { userName: 'YH', phoneNumber: '01012345555', email: 'whyH@go_do_it.kr' },
  { userName: '망고쥬스', phoneNumber: '01012346666', email: 'drinkMango@go_do_it.kr' },
  { userName: 'nemoming', phoneNumber: '01012347777', email: 'ractAngle@go_do_it.kr' },
  { userName: '강그루', phoneNumber: '01012348888', email: 'riverTree@go_do_it.kr' },
  { userName: '개룩발룩', phoneNumber: '01012349999', email: 'checkShirts@go_do_it.kr' },
  { userName: '오렌지쥬스', phoneNumber: '01012341010', email: 'delmonte@go_do_it.kr' },
];

function findEmail() {
  const nameValue = nameInput.value;
  const phoneValue = phoneInput.value;

  // 여기에 코드를 작성하세요
  const user = data.find(({userName, phoneNumber})=> userName === nameValue && phoneNumber === phoneValue );
  // data의 userName과, nameValue 일치
  // data의 phoneNumber와, phoneValue 일치


  const message = user
    ? `${user.userName}님의 이메일은 ${user.email} 입니다.`
    : '이메일을 찾을 수 없습니다. 입력 정보를 다시 확인해 주세요.';

  alert(message);
}

findBtn.addEventListener('click', findEmail);