{
    // 이터러블 구조분해
    const arr = ["1", "2", "3"];
    console.log(arr);

    const [x, , xxx] = arr;
    console.log(`result2 = ${x}, ${xxx}`);
}
{
    let x = 1;
    let y = 2;
    let z = 3;

    console.log(`x++ x++ x++ : ${x++, x++, x++}`);
}

