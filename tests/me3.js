// const promise = new Promise((resolve, reject) => {
//     reject("Hattori");
//     console.log("how are you");
// });
// promise.then(val => alert("Success: " + val))
//     .catch(e => {
//         console.log("Error: " + e);
//         console.log("whats up")
//     });


// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("Yoshi"), 500);
//     setTimeout(() => resolve("Hattori"), 500);
// });
// promise2.then(val => console.log("Success: " + val))
//     .catch(e => console.log("Error: " + e));

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("blue", 500));
});
promise2.then(val => console.log(val));
console.log("green")



// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }
// let promise = job(true);
// promise.then(function(data) {
//         console.log(data);
//         return job(true);
//     })
//     .then(function(data) {
//         console.log(data);
//         return job(false);
//     }).catch(function(error) {
//         console.log(error);
//         return 'Error caught';
//     });