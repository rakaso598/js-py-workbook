{
    function getFunction() {
        return function () {
            console.log('Codeit');
        }
    }

    const printCodeit = getFunction;
    printCodeit();
}

{
    function getFunction() {
        return function () {
            console.log('Codeit');
        }
    }

    const printCodeit = getFunction();
    printCodeit();
}


const myObject = {
    brand: 'Codeit',
    bornYear: 2017,
    isVeryNice: true,
    sayHi: function (name) {
        console.log(`Hi! ${name}`);
    }
};

myObject.sayHi('JavaScript');