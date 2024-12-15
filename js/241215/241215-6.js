const data = [ 
    { company: 'Naber', month: 3 },
      { company: 'Amajohn', month: 12 },
      { company: 'Coogle', month: 10 },
    { company: 'Ittel', month: 6 },
    { company: 'Sasung', month: 4 },
    { company: 'CaCao', month: 3 },
      { company: 'Microhard', month: 17 },
  ];
  
  // 여기에 코드를 작성하세요 ( .reduce 활용 )
  const totalCareer = data.reduce((acc,curr)=> acc += curr.month, 0);
  console.log(`상원이의 경력은 총 ${totalCareer}개월입니다.`);

  // 상원이의 경력은 총 55개월입니다.