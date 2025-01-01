function isPalindrome(word) {

  for (let i = 0; i <= Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// 테스트 코드
console.log(isPalindrome("racecar"));
console.log(isPalindrome("stars"));
console.log(isPalindrome("기러기"));
console.log(isPalindrome("123321"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("kayak"));

// true
// false
// true
// true
// false
// true

