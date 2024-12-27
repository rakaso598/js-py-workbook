// 140 이상일 시 롤러코스터 탑승 가능
function checkHeight(height) {
	if(height>=140){
	  console.log('탑승이 가능합니다.');
	} else {
	  console.log('탑승이 불가능합니다.')
	}
}

// 테스트 코드
checkHeight(140);
checkHeight(135);
checkHeight(170);