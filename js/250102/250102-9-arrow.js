{
  // 화살표 함수 정의
  const getTwice = (number) => {
    return number * 2;
  };

  // 콜백 함수로 활용
  myBtn.addEventListener("click", () => {
    console.log("button is clicked!");
  });
}
{
  // 1. 함수의 파라미터가 하나 뿐일 때
  const getTwice = (number) => {
    return number * 2;
  };

  // 파라미터를 감싸는 소괄호 생략 가능
  const getTwice = (number) => {
    return number * 2;
  };

  // 2. 함수 동작 부분이 return문만 있을 때
  const sum = (a, b) => {
    return a + b;
  };

  // return문과 중괄호 생략 가능
  const sum = (a, b) => a + b;
}
{
  // 메소드가 호출한 객체를 가르킴
  const user = {
    firstName: "Tess",
    lastName: "Jang",
    getFullName: function () {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  console.log(user.getFullName()); // getFullName 안에서의 this는 getFullName을 호출한 user객체가 담긴다
}
