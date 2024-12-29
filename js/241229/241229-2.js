// 피보나치 수열

let curr = 1;
let prev = 0;

for(let i=1;i<=50;i++){
  console.log(curr);
  let temp = curr;

  curr = curr + prev;
  prev = temp;
  
}