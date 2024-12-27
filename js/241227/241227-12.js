// adultTag, teenagerTag, errorTag, transferTag
const adultTag =`삑!`
const teenagerTag=`삑삑!`
const errorTag=`삑삑삑!`
const transferTag=`환승입니다.`
// tagCase파라미터를 가지는 tagNotification()
function tagNotification(tagCase) {
  console.log(`${tagCase}`)
}


// 테스트 코드
tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);