const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

let myCreteDate = new Date(24, 0, 11)
myCreteDate = new Date(24, 0, 23, 4, 6)
myCreteDate = new Date("01-01-2024")
// console.log(myCreteDate.toString());

let myTime = Date.now()
// console.log(myTime);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDate());
// console.log(newDate.getFullYear());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());

newDate.toLocaleString('defalut',{
    calendar: "myCreteDate"
})
console.log(newDate);