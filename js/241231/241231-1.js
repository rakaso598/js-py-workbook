let groups = [
    ['영준', '캡틴'], 
    ['태순', '우재'],
    ['재훈', '지웅'],
    ['윤형', '동욱'],
    ['규식', '소원'],
  ];
  
  let teams = [
    [],
    [],
  ];
  
  // 세로순인걸 가로순으로 재정렬 중첩반복문
  for(let i = 0; i < groups.length; i++) {
    for(let j = 0; j < groups[i].length; j++) {
      teams[j].push(groups[i][j]);
    }
  }
  // 테스트 코드
  console.log(teams[0]);
  console.log(teams[1]);