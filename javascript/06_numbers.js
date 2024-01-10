const salary = new Number(20000)
// console.log(salary);

// console.log(salary.toString());
// console.log(salary.toFixed(3));

const oneMonthSalary = 30000.89464
// console.log(oneMonthSalary.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

/*********************************** Maths *************************************************/

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.4));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(9.9));
// console.log(Math.min(99, 100, 10000, 1));
// console.log(Math.max(99, 100, 10000, 1));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));

const min = 10
const max = 100
console.log(Math.floor(Math.random() * (max - min + 1)) + min);