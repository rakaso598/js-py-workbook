const spait = [
  {
    codeName: "ApplePie",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "BigBoss",
    members: ["스파이", "스파이", "스과이", "스파이", "스파이"],
  },
  {
    codeName: "CEO",
    members: ["스파이", "스파이", "스파이", "습하이", "스파이"],
  },
  {
    codeName: "DeathNote",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "EarlyBird",
    members: ["스파이", "스마이", "스파이", "스파이", "스파이"],
  },
  {
    codeName: "Faker",
    members: ["스파이", "스파이", "스파이", "스파이", "스파이"],
  },
];

function checkSpy(team) {
  const allSpy = team.members.every((member) => member === "스파이");
  const notSpy = team.members.some((member) => member !== "스파이");

  let message;
  if (allSpy) {
    message = `팀 ${team.codeName} 에는 이중 스파이가 없습니다.`;
  } else if (notSpy) {
    message = `[주의!] 팀 ${team.codeName} 에 이중 스파이가 있습니다!`;
  }

  console.log(message);
}

// 테스트 코드
spait.forEach((team) => checkSpy(team));
