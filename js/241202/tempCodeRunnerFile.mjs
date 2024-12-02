{
    // 배열분해하기
    const arr = ["Bora", "Lee"];
    const [firstName, lastName] = arr;
    console.log(`firstName=${firstName}, lastName=${lastName}`);
}


{
    // 객체분해하기
    const book = {
        title: "Cyber World",
        content: "text",
        author: "John"
    };
    // { 객체 프로퍼티: 목표 변수 }
    const { title: t, content: c, author: a, color = "red" } = book;
    console.log(`title=${t},content=${c},author=${a},color=${color}`);
}