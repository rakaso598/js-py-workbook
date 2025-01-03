// 옵셔널 체이닝 (Optional Chaining)
function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: "Captain",
  cat: {
    name: "Crew",
    breed: "British Shorthair",
  },
};

printCatName(user1); // Crew

{
  const user2 = {
    name: "Young",
  };

  console.log(user2.cat); // undefined
  printCatName(user2); // TypeError: Cannot read property 'name' of undefined
}

{
  // 옵셔널 체이닝 연산자(?.)
  // 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그다음
  // 프로퍼티 값을 리턴하고 그렇지 않은 경우에는 undefined를 반환
  function printCatName(user) {
    console.log(user.cat?.name);
  }
}
{
  // 옵셔널 체이닝 동작원리
  function printCatName(user) {
    console.log(
      user.cat === null || user.cat === undefined ? undefined : user.cat.name
    );
  }
}
{
  // 활용
  function printCatName(user) {
    console.log(user.cat?.name ?? "함께 지내는 고양이가 없습니다.");
  }

  const user2 = {
    name: "Young",
  };

  printCatName(user2); // 함께 지내는 고양이가 없습니다.
}
