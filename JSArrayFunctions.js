

const items=[
{name:"Bike",price:100},
{name:"TV",price:200},
{name:"Album",price:50},
{name:"Book",price:5},
{name:"Phone",price:500},
{name:"Computer",price:1000},
{name:"Keyboard",price:25},
]

// it will filter arrays whose price is less than or equals to 100 and 
// one great thing about using filter function is it will not modify original array
const filtereditems= items.filter((item)=>{
	return item.price<=100;
})

// Original array is not changed
console.log(items);
// New array consists of filtered values
console.log(filtereditems);



const myAwesomeArray = ["a", "b", "c", "d", "e"]

// we passed to some function an argument to check whether the value is available in entire array
myAwesomeArray.some(test => test === "d")