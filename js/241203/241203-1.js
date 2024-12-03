{
    // 객체분해
    // 알게된점 : 객체분해시 , , 로 빈 객체로 뛰어넘을 수 없으며 필드명과 동일한 변수로 일단은 떼어냄
    const number = {
        one: 1,
        two: 2,
        three: 3,
        four: 4
    };
    const { one, two, four, three } = number;
    console.log(one, two, four, three); // 1 2 4 3
}

{
    // 배열분해
    // 알게된점 : 필드명이 없으므로 특정 필드를 지칭하는게 아닌 배열의 순서와 맞춰서 변수를 순차적으로 지칭함
    const number = [1, 2, 3, 4];
    const [one, three, four, two] = number;
    console.log(one, three, four, two); // 1 2 3 4
}