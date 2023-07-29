// In js, we don't have normal inheritance, we have prototypal inheritence (through prototypes)

// Prototypes

// Mechanism using which we can implement inheritance in JS

const person = {
    name : "Abhishek",
    age: 21,
    isAdult : true,
    sayHello : function (){
        console.log("Hello");
    }
};

let p1 = Object.create(person); // it will create an object by taking blueprint from the person object
// console.log(person);
// console.log(p1); // Output : Empty object
// console.log(p1.name); // Output : Abhishek

// p1 is empty object, still we are getting all the values like p1.name ....

let p2 = Object.create(p1);
// console.log(p2); // Output : Empty object
// console.log(p2.name);  // Output : Abhishek

// How all these things are happening, its because of prototypes

// We have something called dunder proto ---> __proto__  (underscore underscore proto underscore underscore)
// It contains the reference to the parent object

// console.log(p1.__proto__ === person); //true as output
// console.log(p2.__proto__ === p1); //true as output

// console.log(p1.hasOwnProperty("name")); // false, because p1 don't have any property of its own

p1.name = "vivek";

// console.log(person);
// console.log(p1.name);
// console.log(p2.name);

// console.log(person.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__); // null

// So at the top, we have Object.prototype... below this all its child are there.

// Everthing in js is created from Object.prototype 

const isRaining = true;

// console.log(isRaining.__proto__ === Boolean.prototype);
// console.log(Boolean.prototype.__proto__ === Object.prototype); 

// console.log(person.sayHello());

// So person have some sayHello() method which we can execute or we can write p1.sayHello(), it will also be fine

//Let see one more thing

let arr = [1,2,3];

console.log(arr.pop());
// in above statement, we haven't define any pop() function inside the array so from where does it come?
// For this first go to constructorfunction folder to see the logic behind this.

// All array methods are present in array.prototype from where we are accessing them easily


