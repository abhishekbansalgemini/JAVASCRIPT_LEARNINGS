function add(x, y, z) {
  return x + y + z;
}

// if we execute above function like add(1,2,3), will get 6 as output

async function add1(x, y, z) {
  return x + y + z;
}

// if we execute above function like add1(1,2,3), will return a promise (with fulfilled state and result=6);

// if you add async ahead a function, it will wrap that function into the promise, if this function will return something
// it will resolve the promise... inside .then() 6 will be available

add1(1, 2, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


  // await keyword is used to wait for a promise. await should come inside async function only.

//   await is usually used to unwrap promises by passing a Promise as the expression. Using await pauses the execution
//  of its surrounding async function until the promise is settled (that is, fulfilled or rejected). When execution resumes,
//   the value of the await expression becomes that of the fulfilled promise.


