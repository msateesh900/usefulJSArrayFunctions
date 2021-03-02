// call,apply,bind

let name = {
  firstname: "Gautam",
  lastname: "Gambhir",
  // printFullName: function () {
  //   console.log(`First Name:${this.firstname} Last Name:${this.lastname}`);
  // },
};

let printFullName = function (hometown, state) {
  console.log(
    `First Name:${this.firstname} Last Name:${this.lastname} from home town ${hometown} of ${state} state  `
  );
};

// name.printFullName(); ===> This we can do when we create fucntions inside an object
printFullName.call(name, "Delhi", "New Delhi");

let anotherName = {
  firstname: "Rahul",
  lastname: "Dravid",
};

// using call method we can do function borrowing (comma seperated)
// printFullName.call(anotherName, "India");

// using apply method also we can do function borrowing but with some syntax change(array)
// printFullName.apply(anotherName, ["Bangalore", "Karnataka"]);

// bind method will create a new copy of a function which we need to borrow and use it later on
let makeaFunctionCopy = printFullName.bind(
  anotherName,
  "Bangalore",
  "Karnataka"
);
makeaFunctionCopy();
