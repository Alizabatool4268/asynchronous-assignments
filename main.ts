//ASYNCHRONOUS ASSIGNMENTS
//ASSIGNMENT NO 1

async function fetchGreetings() {
  return setTimeout(() => {
    console.log("hello aliza");
  }, 2000);
}
fetchGreetings();
//output :(hello aliza) after 2 seconds

// //ASSIGNMENT NO 2

async function stimulateTask() {
  console.log("task started");
  setTimeout(() => {
    console.log("task completed");
  }, 1000);
}
stimulateTask();

//output: task started and after 1 second task completed

//ASSIGNMENT NO 3

async function fetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 100);
  });
}
fetchData().then((message) => {
  console.log(message);
});

//output: (Data fetched successfully) after 1 second

//ASSIGNMENT NO 4

async function fetchWithError(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data fetched successfully!");
      } else {
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

// output: Randomly resolves or rejects with the respected output.

//ASSIGNMENT NO 5

function processData(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("your data is being processed. please wait!");
  });
}

function FetchData(): Promise<string> {
  return new Promise((resolve, reject) => {
    resolve("Data is fetched successfully");
  });
}

function executeSequentially() {
  processData().then((message) => {
    console.log(message);
  });
  FetchData().then((message) => {
    console.log(message);
  });
}
executeSequentially();

// output : executes the output of two functions processData and FetchData.
