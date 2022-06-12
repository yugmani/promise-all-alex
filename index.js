// Import stylesheets
import './style.css';

// *******************************************
// ********** creating a promise *************
// *******************************************

const promise1 = new Promise(function (resolve, reject) {
  //Resolve the Promise passing a message as a data
  resolve('Success: promise resolved.');

  //if some error occurs
  if (error) {
    //Reject the promise passing a message as a data
    reject('Failure: promise rejected.');
  }
});

//invoke the promise
console.log(promise1);
//Promise {}

//Returning a promise from a function
// *************************************************

function myPromiseFunction() {
  return new Promise(function (resolve, reject) {
    //Resolve the Promise passing a message as a data
    resolve('Success: promise resolved.');

    //if some error occurs
    if (error) {
      //Reject the promise passing a message as a data
      reject('Failure: promise rejected.');
    }
  });
}

//invoke myPromiseFunction() to invoke the promise inside it.
console.log(myPromiseFunction());
// Promise {}

// **************************************
//The promise with handler functions
// ***************************************

//the then() handler
// ----------------------------------------

const promise2 = new Promise((resolve, reject) => {
  //fake a delay
  setTimeout(function () {
    //resolve the Promise with a simple message
    resolve('Promise has been resolved!');
  }, 1000);
});

//Invoke the promise and attach then() handler
//pass a callback function to the then() handler
//make that callback function accept one parameter
promise2.then((receivedData) => {
  //Log the data received by Promise
  console.log(receivedData);
});

//output:
//Promise has been resolved!

const promise3 = new Promise((resolve, reject) => {
  //fake a delay
  setTimeout(function () {
    //reject the promise with a message
    reject('Promise has been rejected...');
  }, 1000);
});

//invoke the promise and attach then() handler
//pass a callback function to the then() handler
//make that callback function accept one parameter
promise3.then(
  (receivedData) => {
    //this is the first callback, for 'fulfilled' state
    //log the data received by Promise
    console.log(receivedData);
  },
  (error) => {
    //remember to separate handlers with comman
    //this is the second callback, for 'rejected' state
    console.log(error);
  }
);

//output:
// Promise has been rejected...

//the catch() handler
// ----------------------------------------

//Reject promise without then()
// -----------------------------------------
const promise4 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject('Unfortunately, Promise has been rejected...');
  }, 1000);
});

//Invoke the promise and attach catch() handler
//pass a callback function to the catch() handler
//make that callback function accept one parameter
promise4.catch((error) => {
  console.log(error);
});

//output:
//Unfortunately, Promise has been rejected...

//Reject promise with then()
// -----------------------------------------
const promise5 = new Promise((resolve, reject) => {
  console.log('it is test...');
  if (error) {
    reject('Promise has been denied!!!');
  } else {
    resolve('Promise has been accepted!!!');
  }
});

//invoke the promise and first attach then() handler
// with a callback function to that accepts one parameter
//then attach catch() handler also with a callback function
//that accepts one parameter
console.log('it is test2...');
promise5
  .then((receivedData) => {
    console.log(receivedData);
  })
  .catch((error) => {
    console.log(error);
  });

// The finally() handler function
// -----------------------------------------

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise has been nicely resolved.');
  }, 1000);
});

promise6
  .then((receivedData) => {
    console.log(receivedData);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Promise is finally done!.');
  });

//output
// Promise has been nicely resolved.
// Promise is finally done!.

// Promise.all()
// ********************************************

const promise71 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('promise71 has been resolved.');
  }, 500);
});

const promise72 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('promise72 has been resolved.');
  }, 1000);
});

Promise.all([promise71, promise72])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//output
/*
[
  "promise71 has been resolved.", 
  "promise72 has been resolved."
]
*/

const promise73 = new Promise((resolve, reject) => {
  setTimeout(function () {
    reject('promise73 has been rejected!');
  }, 1000);
});

//to process all promises
Promise.all([promise71, promise72, promise73])
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//output:
// promise73 has been rejected!

// !! Notice that the data from promise71 and promise72 that were resolved before the promise73 was rejected are missing

// Promise.allSettled()
// ***************************************

Promise.allSettled([promise71, promise73, promise72]).then((data) => {
  console.log(data);
});

//output
/*
[Object, Object, Object]
0: Object
status: "fulfilled"
value: "promise71 has been resolved."
__proto__: Object
1: Object
reason: "promise73 has been rejected!"
status: "rejected"
__proto__: Object
2: Object
status: "fulfilled"
value: "promise72 has been resolved."
__proto__: Object
promise73 has been rejected!
*/
