// Set 생성
const members = new Set();

// add 메소드
members.add("영훈"); // Set(1) {"영훈"}
members.add("윤수"); // Set(2) {"영훈", "윤수"}
members.add("동욱"); // Set(3) {"영훈", "윤수", "동욱"}
members.add("태호"); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has("동욱")); // true
console.log(members.has("현승")); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete("종훈"); // false
console.log(members.size); // 4
members.delete("태호"); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

{
  // 중복을 허용하지 않음
  const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
  const uniqNumbers = new Set(numbers);

  console.log(uniqNumbers); // Set(5) {1, 3, 4, 2, 5}
}
