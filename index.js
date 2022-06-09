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

