//primitive //7 types
// 1:string, 2:number, 3:boolean, 4:null, 5:undefined, 6:symbol, 7:BigInt

let char ="Raghava"
let number = 123
let isBoolean = true
let isNull = null
let isUndefined = undefined
let id = Symbol("123")
let bigInt = 12214343434213n


//Non-primitive (Reference) //3 types
// 1:Object, 2:Arrya, 3:funtion

let person = {
    name:"raghava",
    age: 23,
    loc: "Hullahalli"
}

const heros = ["Sri Ram", "Jai Hunman", "Sri Krishan"]

const myFunction = function(){
    console.log("Hello Wolrd");
}

// console.table([typeof(char), typeof(number), typeof(isBoolean), typeof(isNull), typeof(isUndefined), typeof(id), typeof(bigInt), typeof(person),typeof(heros), typeof(myFunction)])



// Stack Memory (Primitive)
let myInstaName = "raghava_arya"

let anotherName = myInstaName
anotherName = "ragaava_arya007"

console.log(myInstaName);
console.log(anotherName);

// Heap Memory (Non-primmitive)

let userOne = {
    email: "user@email.com",
    moblie_no: 9191919191,
    loc: 571314
}

let userTwo = userOne
userTwo.email = "user123@email.com"
console.log(userOne.email);
console.log(userTwo.email);