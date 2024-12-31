{
  // 중복 선언 허용 - var 변수
  var myVariable = "labala";
  console.log(myVariable);
  var myVariable = "Labala!";
  console.log(myVariable);
  // labala
  // Labala!
}

{
  // 변수가 let인 경우
  {
    let x = 3;
  }

  function myFunction() {
    let y = 4;
  }

  try {
    console.log(x);
  } catch (err) {
    console.log("x가 정의되지 않았습니다.");
  }

  try {
    console.log(y);
  } catch (err) {
    console.log("y가 정의되지 않았습니다.");
  }
}

{
  // 변수가 var일 경우 전역변수의 역할을 함. 함수 스코프만 적용
  {
    var x = 3;
  }

  function myFunction() {
    var y = 4;
  }

  try {
    console.log(x);
  } catch (err) {
    console.log("x가 정의되지 않았습니다.");
  }

  try {
    console.log(y);
  } catch (err) {
    console.log("y가 정의되지 않았습니다.");
  }
}

{
  // var는 호이스팅 존재 -> 코드의 흐름 방해

  // 함수에도 호이스팅이 존재함

  sayHi(); // 정의 이전에 선언했지만 결과는 `hi`

  function sayHi() {
    console.log("hi");
  }
}
