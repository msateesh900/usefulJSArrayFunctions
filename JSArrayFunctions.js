			
							// Useful JS Array Functions

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

// this case we need item names
// console.log(itemsNames);
// [
//   'Bike',     'TV',
//   'Album',    'Book',
//   'Phone',    'Computer',
//   'Keyboard'
// ]

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

// MAP
// Get an array of all names

const allCharacterNames = characters.map((character) => {
  return character.name;
});
// console.log(allCharacterNames);
// console.log(characters);

// Get an array of all heights
const allCharacterHeights = characters.map((character) => {
  return character.height;
});
// console.log(allCharacterHeights);
// console.log(characters);

const allCharactersWithHeightAndNames = characters.map((character) => {
  const container = {};
  container["name"] = character.name;
  container["height"] = character.height;
  container["age"] = character.name.split(" ").slice(0, -1).length;
  return container;
});

// console.log(allCharactersWithHeightAndNames);

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

// console.log(characters.map((character) => character.name.split(" ")[0]));
// console.log(firstNameOfCharacter);

// console.log(characters);

// FILTER
// Get characters with mass greater than 100

const massGreaterThan100 = characters.filter((character) => {
  return character.mass > 100;
});

// console.log(massGreaterThan100);

// console.log(characters.filter((character) => character.mass > 100));

// Get characters with mass less than 200

const heightLessThan200 = characters.filter((character) => {
  return character.mass < 100;
});

// console.log(heightLessThan200);
// console.log(characters.filter((character) => character.mass < 100));
// Get all male characters

const allMaleCharcaters = characters.filter((character) => {
  return character.gender === "male";
});

// console.log(allMaleCharcaters);

// console.log(characters.filter((character) => character.gender === "male"));
// Get all female characters

const allFeMaleCharcaters = characters.filter((character) => {
  return character.gender === "female";
});

// console.log(allMaleCharcaters);

// console.log(characters.filter((character) => character.gender === "female"));

// completed Array Filter,Map functions


