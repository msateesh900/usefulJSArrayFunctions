			
							// Useful JS Array Functions

const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

                              // Array MAP Function
// Get an array of all names

const allCharacterNames = characters.map((character) => {
  return character.name;
});
// console.log(allCharacterNames);
// console.log(characters);

console.log(characters.map((character) => character.name));

// Get an array of all heights
const allCharacterHeights = characters.map((character) => {
  return character.height;
});
// console.log(allCharacterHeights);
// console.log(characters);

console.log(characters.map((character) => character.height));

const allCharactersWithHeightAndNames = characters.map((character) => {
  const container = {};
  container["name"] = character.name;
  container["height"] = character.height;
  container["age"] = character.name.split(" ").slice(0, -1).length;
  return container;
});

// console.log(allCharactersWithHeightAndNames);

console.log(
  characters.map((character) => ({
    name: character.name,
    height: character.height,
  }))
);

// console.log(
//   characters.map((character) => ({
//     name: character.name,
//     height: character.height,
//   }))
// );
// console.log(characters);

// Get an array of all first names
const firstNameOfCharacter = characters.map((character) => {
  return character.name.split(" ")[0];
});

// console.log(firstNameOfCharacter);

console.log(characters.map((character) => character.name.split(" ")[0]));

                              // Array FILTER Function

// Get characters with mass greater than 100

const massGreaterThan100 = characters.filter((character) => {
  return character.mass > 100;
});

// console.log(massGreaterThan100);

console.log(characters.filter((character) => character.mass > 100));

// Get characters with mass less than 200

const heightLessThan200 = characters.filter((character) => {
  return character.mass < 100;
});

// console.log(heightLessThan200);
console.log(characters.filter((character) => character.mass < 100));

// Get all male characters

const allMaleCharcaters = characters.filter((character) => {
  return character.gender === "male";
});

// console.log(allMaleCharcaters);

console.log(characters.filter((character) => character.gender === "male"));

// Get all female characters

const allFeMaleCharcaters = characters.filter((character) => {
  return character.gender === "female";
});

// console.log(allMaleCharcaters);

console.log(characters.filter((character) => character.gender === "female"));

                              // Array SOME Function

// Is there at least one male character?

const atleastOneMale = characters.some((character) => {
  return character.gender === "male";
});

// console.log(atleastOneMale);

console.log(characters.some((character) => character.gender === "male"));

// Is there at least one character with blue eyes?

const atleastOneBlueEyes = characters.some((character) => {
  return character.eye_color === "blue";
});

// console.log(atleastOneBlueEyes);

console.log(characters.some((character) => character.eye_color === "blue"));

// Is there at least one character taller than 200?

const tallerthan200 = characters.some((character) => {
  return character.height > 200;
});

// console.log(tallerthan200);

console.log(characters.some((character) => character.height > 200));

// Is there at least one character that has mass less than 50?

const masslessthan50 = characters.some((character) => {
  return character.mass < 50;
});

// console.log(masslessthan50);

console.log(characters.some((character) => character.mass < 50));

                              // Array EVERY Function

// Does every character have blue eyes?
const everyCharacterBlue = characters.every((character) => {
  return character.eye_color === "blue";
});
// console.log(everyCharacterBlue);

console.log(characters.every((character) => character.eye_color === "blue"));

// Does every character have mass more than 40?

const everyCharacterMassGT40 = characters.every((character) => {
  return character.mass > 40;
});

// console.log(everyCharacterMassGT40);

console.log(characters.every((character) => character.mass > 40));

// Is every character shorter than 200?

const shorterThan200 = characters.every((character) => {
  return character.height < 200;
});
// console.log(shorterThan200);

console.log(characters.every((character) => character.height < 200));

// Is every character male?

const everyCharacterMale = characters.every((character) => {
  return character.gender === "male";
});
// console.log(everyCharacterMale);

console.log(characters.every((character) => character.gender === "male"));

                              // Array SORT Function

// Sort by name

const sortByName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

// console.log(sortByName);

// Sort by mass

const sortByMass = characters.sort((a, b) => {
  return a.mass - b.mass;
});

// console.log(sortByMass);
console.log(characters.sort((a, b) => a.mass - b.mass));

// Sort by height

const sortByHeight = characters.sort((a, b) => {
  return b.height - a.height;
});

// console.log(sortByHeight);

console.log(characters.sort((a, b) => a.height - b.height));

// Sort by gender

const sortByGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  return 1;
});

console.log(sortByGender);

                              // Array REDUCE Function

// Get the total mass of all characters

const getTotalMass = characters.reduce(
  (acc, curr) => acc + parseInt(curr.mass),
  0
);

console.log(getTotalMass);

// Get the total height of all characters

const getTotalHeight = characters.reduce(
  (acc, curr) => acc + parseInt(curr.height),
  0
);

console.log(getTotalHeight);
// Get the total number of characters by eye color (hint. a map of eye color to count)

const charactersByEyeColor = characters.reduce((acc, cur) => {
  const color = cur.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

console.log(charactersByEyeColor);

// Get the total number of characters in all the character names

const charactersLength = characters.reduce(
  (acc, cur) => acc + cur.name.length,
  0
);

console.log(charactersLength);

const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 50 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

// it will filter arrays whose price is less than or equals to 100 and
// one great thing about using filter function is it will not modify original array
const filtereditems = items.filter((item) => {
  return item.price <= 100;
});

console.log(items.filter((item) => item.price <= 100));

// Original array is not changed
// console.log(items);
// [
// { name: 'Bike', price: 100 },{ name: 'TV', price: 200 },{ name: 'Album', price: 50 },
// { name: 'Book', price: 5 },{ name: 'Phone', price: 500 },{ name: 'Computer', price: 1000 },
// { name: 'Keyboard', price: 25 }
// ]

// New array consists of filtered values
// console.log(filtereditems);

// [
//   { name: 'Bike', price: 100 },
//   { name: 'Album', price: 50 },
//   { name: 'Book', price: 5 },
//   { name: 'Keyboard', price: 25 }
// ]

// Map function is similar to filter function but this return the items which we need
const itemsNames = items.map((item) => {
  return item.name;
});

console.log(items.map((item) => item.name));

// this case we need item names
// console.log(itemsNames);
// [
//   'Bike',     'TV',
//   'Album',    'Book',
//   'Phone',    'Computer',
//   'Keyboard'
// ]

// completed Array filter,map,some,every,reduce,sort functions


