"use strict";
//ASYNCHRONOUS ASSIGNMENTS
//ASSIGNMENT NO 1
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchGreetings() {
    return setTimeout(() => {
        console.log("hello aliza");
    }, 2000);
}
fetchGreetings();
// //ASSIGNMENT NO 2
async function stimulateTask() {
    console.log("task started");
    setTimeout(() => {
        console.log("task completed");
    }, 1000);
}
stimulateTask();
//ASSIGNMENT NO 3
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 100);
    });
}
fetchData().then((message) => {
    console.log(message);
});
//ASSIGNMENT NO 4
async function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed!");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
    console.log(error);
});
//ASSIGNMENT NO 5
function processData() {
    return new Promise((resolve, reject) => {
        resolve("your data is being processed. please wait!");
    });
}
;
function FetchData() {
    return new Promise((resolve, reject) => {
        resolve("Data is fetched successfully");
    });
}
;
function executeSequentially() {
    processData().then((message) => {
        console.log(message);
    });
    FetchData().then((message) => {
        console.log(message);
    });
}
;
executeSequentially();
