{
  // 함수 선언
  function sayHi() {
    console.log("Hi!");
  }
}
{
  // 함수 표현식
  const sayHi = function () {
    console.log("Hi!");
  };
}
{
  // argument 객체
  function printArguments() {
    // arguments 객체의 요소들을 하나씩 출력
    for (const arg of arguments) {
      console.log(arg);
    }
  }

  printArguments("Young", "Mark", "Koby");
}
{
  // rest parameter
  function printArguments(...args) {
    // args 객체의 요소들을 하나씩 출력
    for (const arg of args) {
      console.log(arg);
    }
  }

  printArguments("Young", "Mark", "Koby");
}
{
  function printRankingList(first, second, ...others) {
    console.log("레이스 최종 결과");
    console.log(`우승: ${first}`);
    console.log(`준우승: ${second}`);
    for (const arg of others) {
      console.log(`참가자: ${arg}`);
    }
  }

  printRankingList("Tommy", "Jerry", "Suri", "Sunny", "Jack");
}
