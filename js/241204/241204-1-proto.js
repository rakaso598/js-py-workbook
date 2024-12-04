
// Animal 생성자 함수
function Animal(name) {
    this.name = name;
}

// Animal의 prototype에 speak 메서드 추가
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound`);
};

// 새로운 인스턴스 dog 생성
const dog = new Animal("Dog");

// dog 는 Animal.prototype을 상속받음
dog.speak(); // Dog maeks a sound
console.log(dog.name); // Dog

console.log(dog.__proto__ === Animal.prototype);
console.log(dog.__proto__.speak);
console.log(dog instanceof Animal);
