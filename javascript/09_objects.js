// Object literals or Values
let mySymbol = Symbol("keyOne")
let JsName = {
    name: "Raghava",
    "full name": "Raghava H D",
    [mySymbol]: "myKeyOne",
    age: 23,
    email: "raghava@github.com",
    phone_no: 123456789,
    isLoggedIn: true,
}
// console.log(JsName.email);
// console.log(JsName["email"]);
// console.log(JsName["full name"]);
// console.log(JsName[mySymbol]);


JsName.email = "arya@github.com";
// Object.freeze(JsName)
JsName.email = "arya123@github.com";
JsName.phone_no = 9538988545
// console.log(JsName);

JsName.greetings = function(){
    console.log(`Your age is ${this.age}`);
}
console.log(JsName.greetings());