{
    // 주어진 배열 numbers의 총합을 구하세요.
    const numbers = [1, 2, 3, 4, 5];
    // 구조분해풀이
    const [a, b, c, d, e] = [...numbers];
    const sum = a + b + c + d + e;
    console.log(sum);
}
{
    // reduce() 풀이
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum); // 15
}