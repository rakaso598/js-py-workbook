function firstWords() {
  let word = "";

  for (let i = 0; i < arguments.length; i++) {
    word += arguments[i][0];
  }
  console.log(word);
}

firstWords("나만", "없어", "고양이");
firstWords("아니", "바나나말고", "라면먹어");
firstWords("만두", "반으로", "잘라먹네", "부지런하다");
firstWords("결국", "자바스크립트가", "해피한", "지름길");
firstWords("빨간색", "주황색", "노란색", "초록색", "파란색", "남색", "보라색");
