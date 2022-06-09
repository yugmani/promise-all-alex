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

