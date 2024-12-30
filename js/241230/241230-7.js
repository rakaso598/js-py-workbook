let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 화씨를 계산하는 함수 fff
const fff = function(C) {
  return ( C * 9 / 5 ) + 32;
}
celsiusTemps.forEach((C)=>{
  let fahrenheit = fff(C);
  fahrenheitTemps.push(fahrenheit);
});

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);