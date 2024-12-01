// 객체 리터럴

const objGildong = {
    name: "gildong",
    age: 22,
    isActive: true
};
console.log(objGildong.name);

// JSON 문자열

const jsonGildong = '{"name":"gildong","age":"22"}';
console.log(jsonGildong.name);

// JSON 파싱

const parsedGildong = JSON.parse(jsonGildong);
console.log(parsedGildong.age); // 출력 : 22

// 파싱된 문자열을 직렬화

const stringifiedParsedGildong = JSON.stringify(parsedGildong);
console.log(stringifiedParsedGildong);

