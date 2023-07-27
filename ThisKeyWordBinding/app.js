// Implicit Binding : Automatically done by the JS Engine

const person = {
    name : "Abhishek",
    age : 21,

    sayName: function() {
        console.log(`Hello from ${this.name}`);  // this keyword.... contain the reference of the person object
    }
}

// Explicit Binding

function func(name, age){
    console.log(this);
    this.name = name;
    this.age = age;
}

// func("Abhishek")  

//currently "this keyword" above binding with Window Object, you can check this on console by types windows there
// But we don't want to bind "this keyword with window object"
// We want to bind it with some external object

// let make an another object 

const a = {
    a: 10,
    b: 20
}

func.call(a, "Abhishek", 21); 

// to verify, lets do console.log(this) inside the function. 
// You  will observe that, this keyword refers to that external object which we have created above

//Another way to do the same thing ---->

const f = func.bind(a);
f("Abhishek", 21);


//The ablility of a function to be used as a value is known as first class citizen or first class function

const square = function (num) {
    return num*num;
}

// You should never use "this keyword" inside the arroe function