let name = "raghava_arya"
const dateOfBirth = "05-10-2000"
// console.log(`Hello My name is ${name} and My DateofBirth is ${dateOfBirth}`);

//New String

const useName = new String("Raghava")
// console.log(useName[0]);
// console.log(useName.__proto__);
// console.log(useName.toUpperCase());
// console.log(useName.charAt(5));
// console.log(useName.indexOf('a'));

const newString = useName.substring(0, 6)
// console.log(newString);

const anotherString = useName.slice(-8,7)
// console.log(anotherString);

const anotherStringOne ="            raghava              "
// console.log(anotherStringOne.trim());

const url = "https://super-duper-succotash-4jgpwjjw7xxf4v7.github.dev/"
console.log(url.replace("-", "123"));
console.log(url.includes(('a')));
console.log(url.split('/'));