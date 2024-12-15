/* Question
오늘 커뮤니티 게시판에 아래의 배열 안에 숨겨진 인물을 찾으라는 퀴즈가 올라왔습니다.

['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING']

평소 추리 소설을 좋아하는 종훈이는 잠깐의 고민으로 이 속에 YOUNG (강영훈의 닉네임)이 숨겨져 있다는 걸 찾아냈는데요.
템플릿에 주어진 배열의 map 메소드를 활용해서 'Y', 'O', 'U', 'N', 'G'을 추출한 새로운 배열을 answer 변수에 담아주세요.
*/

const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성하세요
const answer = quiz.map((curr,index)=>{
    return curr[index];
});


// 테스트 코드
console.log(answer);