const getFullName = () => `${this.firstName} ${this.lastName}`;

const user = {
  firstName: 'Ted',
  lastName: 'Chang',
  getFullName: getFullName,
};

console.log(user.getFullName()); // undefined undefined

// 일반함수의 this : 호출한 대상 객체
// 화살표함수의 this : 화살표함수가 선언되기 직전 유효한 this의 값과 같은값