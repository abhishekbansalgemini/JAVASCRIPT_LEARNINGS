// function fun(){
//     console.log("Inside fun");
// } 


// Statements will execute line by line (Synchronous and single threaded)

// console.log("START");
// fun();
// console.log("END");


// What i want is that the above function fun should called after 2 seconds or 3 seconds.

// lets create a manual delay of 2 seconds 

// function delay(){
//     const x = new Date().getTime();
//     while(new Date().getTime() < x+1000){

//     }
//     fun();
// }


// console.log("START");
// delay();
// console.log("END ");

//But, if we create delay like this, our browser will get freeze at the time of delay, so this is not a good practice

//To improve above thing, we need some super powers because JS Engine can't fix this thing

// But Our Browser is not less than a miracle... It contains all the super powers

// The thing is that, it is written in C++ which supports Multi-threading


//Superpowers

// 1. Connecting to server 
// 2. Timers
// 3. Storage
// 4. Can change the HTML
// 5. Can connect to Bluetooth

// So We Want timers superpower of Browser to create delay so that screen will not freeze and next statements will start
// executing in that delay

// Timers ---> setTimeout() (Not a part of javascript)
// To connect with external server ---> fetch() (Not a part of javascript)
// Storage : localStorage
// Console.log() is also not a part of JS
// DOM API is also not a part of JS

// Somehow we have to access these superpowers of browser to run inside jS Engine, which we can done through WINDOW object

// TRY to write WINDOW on the browser console, you will see all the methods like setTimeout, and fetch are there inside

// Superpowers in technical term ---> WEB APIS

console.log("START");

setTimeout(function CB(){
    console.log("Inside CB");
}, 2000);

console.log("END");

//Now the screen is not freezing while creating delay

// Lets Understand How above code is working

// Firstly "console.log("START");" will  go in call stack for execution and print START on console 
// Now that setTimeOut() function which is nothing but a superpower of browser, starts the timer of 2 seconds and will
// wait of 2 seconds outside the call stack 
// Now that "console.log("END");" line will come into call stack and print END on console
// As soon as the timer will over, that function will come inside call stack and complete its execution

//That function will not directly go to the call stack after time expires

//First it will to go inside callback queue and it will wait there.

// Now how we will decide, when it will go inside Call stack. Here comes the concept of Event Loop
// Event loop runs continuously and check both callback queue and call stack and as soon as the call stack get empty
// and callback queue contains any function then this event loop transfer that function from callback queue to callstack

// Similary we have setInterval method

// setInterval(function (){
//     console.log("Inside setInterval");
// }, 2000);

// Now to stop this setInterval ---> Actually it return us a ID

const id = setInterval(function (){
    console.log("Inside setInterval");
}, 2000);

setTimeout(function (){
    clearInterval(id);
}, 10000)