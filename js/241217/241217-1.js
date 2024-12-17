// fetch 간단한 리퀘스트

fetch('https://workey.codeit.kr/ratings')
  .then(response => response.text())
  .then(data => console.log(data))
