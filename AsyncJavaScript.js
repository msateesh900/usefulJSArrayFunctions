// Asynchronous JavaScript (Start Something Now and finish it Later)

// Callback, Promises,Async & Await

// 1.Callbacks
// setTimeout

setTimeout(() => {
  console.log("I am a single cllback called after 1 second");
}, 1000);

// nested setTimeOut callbacks
setTimeout(() => {
  console.log("I am Call back1 you waited for me about 2 seconds");
  setTimeout(() => {
    console.log("I am Call back2 You waited for me about 2+2=4 seconds");
    setTimeout(() => {
      console.log("I am Call back3 waited for me about 2+2+2=6 seconds");
    }, 2000);
  }, 2000);
}, 2000);

// Button Event Handler in browser Javascript
// Here we have id demo which will get displayed after button click
const btn;

btn.addEventListener("click", () => {
  document.getElementById("demo").innerHTML = "Hello World";
});

// file load helper packages need to install these using npm
const fetch = require("node-fetch");
const fs = require("fs");

// error first callbacks
fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log("ERROR");
    console.log(err);
  } else {
    console.log("File is available ");
    console.log(data);
  }
});

// 2.Promises

// Create a promise
const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  console.log(rand);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log("error", err);
  });

// fetching data from external server using fetch api(default available in JS)

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((json) => {
    console.log("First user in the array:");
    console.log(json[0]);
    console.log("Name of the first user in the array:");
    console.log(json[0].name);
  })
  .catch((err) => console.error(err));

// fetching data from external server using axios( A promise based )
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((res) => console.log(res.data[0].name))
  .catch((err) => {
    console.log(err);
  });

// load file with async/await

const loadfile = async () => {
  try {
    console.log("inside async await for loading a file");
    const data = await fs.promises.readFile("./test.txt", {
      encoding: "utf-8",
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

loadfile();

// fetch using async await next level

const fetchPoke = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchPoke(2);

function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

// usage
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log("carried sum:", curriedSum(1(2)(3)));
