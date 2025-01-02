function ignoreFirst(...args) {
  res = args.slice(1);
  for (const re of res) {
    console.log(re);
  }
}

ignoreFirst("1세대", "2세대", "3세대");
ignoreFirst("곰팡이", "강아지", "고양이");
ignoreFirst(20, 9, 18, 19, 30, 34, 40);

// 2세대
// 3세대
// 강아지
// 고양이
// 9
// 18
// 19
// 30
// 34
// 40