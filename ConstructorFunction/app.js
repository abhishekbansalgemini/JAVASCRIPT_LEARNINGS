function fun(){
    console.log("Hello World");
}

function fun1(name, age){

    // in "this" object we are attaching 2 properties name and age.... and assign them with arguments name and age
    this.name = name;
    this.age = age;

    // So where these values will be attached
    // in js, we have a window object in which both these values get added as a property

}

// fun1("Abhi", 21);

// Constructor function

// function Person(name, age){ // first letter of function should be capital
//     this.name = name;
//     this.age = age;
//     this.sayHello = function (){
//         console.log("hello "+this.name);
//     }
// }

// Person("Abhi", 21);

// is there any difference b/w Person and fun1 function?? ---> No

// In case of constructor function, we use new keyword to create an object 

// const p1 =  new Person("Abhi", 21);
// console.log(p1); 

//Now "this" in Person function refers to p1 object. this.name ie equivalent to p1.name and inside p1.name we assign the value name (i.e. Abhi)

// IF YOU NOT GIVE THIS NEW KEYWORD, THEN "THIS" KEYWORD REFERS TO WINDOW OBJECT BY-DEFAULT 

// console.log(p1.sayHello());

// Suppose if we create millons of objects of type person, so in each type that same function (sayHello()) will be created
// it makes lots of wastage of memory

//Instead of doing this, what we can do so that we can access this function and it should not present in each object;

// What we will do is, add that function inside prototype of person

function Person(name, age){ // first letter of  function should be capital
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = function (){
    console.log("hello "+this.name);
}

const p1 = new Person("Abhi", 21);
console.log(p1.sayHello()); // hello abhi
    



