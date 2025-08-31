class Dog {
    constructor (name, breed,age){ 
        this.name = name;
        this.age
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const dog1 = new Dog('coffee','Deshi');
console.log(dog1);
dog1.eat()