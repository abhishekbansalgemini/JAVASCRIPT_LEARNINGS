//Closure

// function bundled together + lexical environment  ===>  forms the closure
// function along with its lexical environment forms the closure

//closure give you access to an outer's function scope from an inner function.  
//In JS, Closures are created everytime     a function is created, at function creation time 

function a() {
  let b = 100;
  function c() {
    b++; // please add breakpoint here and try to debug, you will see a closure(a) object containing b=100 in the source tab
    console.log(b);
  }
  return c; // only function definition is not returning, along with this whole lexical environment is getting return
  // Basically a closure object is return, which contains all the information (function along with the lexical environment)
}

let f = a();
f();
