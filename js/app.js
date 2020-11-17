console.log('Hello!');
const name = 'Harry Potter';
const age = 31;
const job = 'Wizard';
const city = 'London';
const gender = 'Male';
console.log(typeof(name));
console.log(typeof(age));

function hello() {
    return 'hello';
}

const fruit = ['Apple' , 'Banana', 'Orange', 'Pear'];
console.log(fruit);
fruit.push('Lemon');
console.log(fruit);
console.log(fruit.sort());
fruit.shift();
console.log(fruit);
fruit.pop();
console.log(fruit);


fruit.forEach(item => {
    console.log("Fruit from array:" , item);
});


const today = new Date();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

const html = `
    <h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
        <li> ${name} says ${hello()}</li>
    </ul>
`;
document.body.innerHTML = html;
