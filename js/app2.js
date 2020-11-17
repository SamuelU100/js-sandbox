console.log('Hello');

const name = 'Samuel Uukivi';
const age = 18;
const job = 'Student';
const city = 'Tallinn';
const gender = 'Male';

const today = new Date();
let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);

const html = `
    <h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>
    
    </ul>
`;
document.body.innerHTML = html;
