// class Person{ //Class name should be start with captial and be singular
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     sayName(){
//         return this.name
//     }


// }

// const p1 = new Person("Abhi", 21);

// sayName method exist inside the prototype of p1 


class Car{
    constructor(name, color, price){
        this.name = name;
        this.price = price;
        this.color = color;
    }

    //getter & setter methods

    getCarName(){
        return this.name;
    }

    get getPrice(){
        return this.price;  
    }

    set setPrice(price){
        this.price = price;
    }
}

const c1 = new Car("Audi", "Black", "100"); 

console.log(c1.getCarName());
console.log(c1.getPrice); // here in getter method we don't have to mention paranthesis, they behave like a property (Prototypal Inheritance)
c1.setPrice = 1000;
console.log(c1.getPrice);

class RacingCar extends Car{ // To extend multiple classes, you can place classes comma seperately
    constructor(name, color, price, maxSpeed, isDiscBreak){
        super(name, color, price); // calling the parent class constructor
        this.maxSpeed = maxSpeed;
        this.isDiscBreak = isDiscBreak;
    }

    get getMaxSpeed(){
        return this.maxSpeed;
    }
}

const c2 = new RacingCar("Audi", "Black", "100", "75", true);