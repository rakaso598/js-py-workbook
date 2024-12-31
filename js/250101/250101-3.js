let espresso = ['espresso'];

let americano = [...espresso];
americano.push('water');

let caffeLatte = [...espresso];
caffeLatte.push('milk');

// caffeMocha와 vanillaLatte 레시피 만들기
let caffeMocha = [...caffeLatte];
caffeMocha.push('chocolateSyrup');

let vanillaLatte = [...caffeLatte];
vanillaLatte.push('vanillaSyrup');

// 테스트 코드
console.log(espresso);
console.log(americano);
console.log(caffeLatte);
console.log(caffeMocha);
console.log(vanillaLatte);