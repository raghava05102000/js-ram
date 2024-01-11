let myArr = [0, 1, 2, 3, 4, 5, 6, 7]
// console.log(myArr[0]); // 0
// console.log(myArr[8]); // undefined

//Array Methods
// myArr.push(8);
// myArr.push(9)
// myArr.pop()

// myArr.unshift(-1)
// myArr.shift()

// console.log(myArr.includes(0));
// console.log(myArr.indexOf(7));

// const newArr = myArr.join()
// console.log(newArr);
// console.log(myArr);


//Slice, Splice
// console.log("1", myArr);

// let myArr1 = myArr.slice(1, 5);
// console.log("2", myArr1);

// let myArr2 = myArr.splice(1, 5);
// console.log("3", myArr2);

let mysorePlaces = ["Chamundi Hills", "Palace", "Zoo", "Nanjangud Temple"]
let karnatakaPlaces = ["Mangaluru Beachs", "Mysore", "Bangaluru", "ChikkaMangaluru"]

// mysorePlaces.push(karnatakaPlaces);

let allPlaces = mysorePlaces.concat(karnatakaPlaces)

// console.log(allPlaces);

let all_places_of_karnataka = [...mysorePlaces, ...karnatakaPlaces]
// console.log(typeof all_places_of_karnataka);

let anotherArray = [0,1,2,3,4,5,["Chamundi Hills", "Palace", "Zoo", "Nanjangud Temple",["Mangaluru Beachs", "Mysore", "Bangaluru", "ChikkaMangaluru"]]]

let real_another_Array = anotherArray.flat(Infinity)
// console.log(real_another_Array);

console.log(Array.isArray("Raghava"))
console.log(Array.from("Raghava"));
console.log(Array.from({name: "raghava"}));

let name = "arya";
let age = 23;
let email = "arya@github.com"
console.log(Array.of(name, age, email));