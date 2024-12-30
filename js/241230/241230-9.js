// 배열에서 특정 값 찾기 (indexOf / lastIndexOf)
{
    let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];

    console.log(brands.indexOf('Kakao'));
    console.log(brands.indexOf('Daum'));
}

{
    let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];

    console.log(brands.lastIndexOf('Kakao'));
    console.log(brands.lastIndexOf('Daum'));
}

// 배열에서 특정 값이 있는지 확인하기 (includes)

{
    let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];

    console.log(brands.includes('Kakao'));
    console.log(brands.includes('Daum'));
}

// 배열 뒤집기 (reverse)

{
    let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
    console.log(brands);
    
    brands.reverse();
    console.log(brands);
}