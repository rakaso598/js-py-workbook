// 중첩반복문 구구단 만들기

let a = 0;
let b = 0;

for(let i = 1; i<=9; i++){
  a = i;
  for(let ii = 1; ii<=9; ii++){
    b = ii;
    console.log(`${a} * ${b} = ${a*b}`);
  }
}