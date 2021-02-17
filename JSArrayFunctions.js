			
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
console.log(items);
// [
// { name: 'Bike', price: 100 },{ name: 'TV', price: 200 },{ name: 'Album', price: 50 },
// { name: 'Book', price: 5 },{ name: 'Phone', price: 500 },{ name: 'Computer', price: 1000 },
// { name: 'Keyboard', price: 25 }
// ]

// New array consists of filtered values
console.log(filtereditems);

// [
//   { name: 'Bike', price: 100 },
//   { name: 'Album', price: 50 },
//   { name: 'Book', price: 5 },
//   { name: 'Keyboard', price: 25 }
// ]

// Map function is similar to filter function but this will return the items which we need
const itemsNames = items.map((item) => {
  return item.name;
});

// this case we need item names
console.log(itemsNames);
// [
//   'Bike',     'TV',
//   'Album',    'Book',
//   'Phone',    'Computer',
//   'Keyboard'
// ]



