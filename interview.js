// Simulating user prompt and alert
// let name = prompt("What is your name ?");
// let greeting = alert(`Hello ${name}`);

// Static assignment and greeting
const name = 'Alice';
const greeting = `Hello, ${name}! How are you today?`;
console.log(greeting); // Output: Hello, Alice! How are you today?

// Mapping items into list elements
const items = ['apple', 'banana', 'cherry'];
const listItems = items.map(item => `<li>${item}</li>`).join('');
const list = `<ul>${listItems}</ul>`;
// console.log(list); // Uncomment if you want to see the list

// Destructuring person object
const person = {
    firstName: 'Olalekan', 
    lastName: 'Akande', 
    middleName: 'Toheeb', 
    age: 30
};
const { lastName, firstName } = person;
console.log(firstName, lastName); // Output: Olalekan Akande

// Destructuring with default value
const config = {
    theme: 'light'
};
const { theme = 'dark' } = config;
console.log(theme); // Output: light

// Corrected address object and destructuring
const addressObject = {
    street: '123 Main St', 
    city: 'Ilorin', 
    state: {
        nameObject: 'Kwara', 
        abbreviation: 'KW', 
    }
};
const { street, city, state: { nameObject } } = addressObject;
console.log(street, city, nameObject); // Output: 123 Main St Ilorin Kwara

// Renaming destructured properties
const personObject = {
    firstName: 'Olalekan',
    lastName: 'Akande',
    middleName: 'Toheeb',
    age: 30 
};
const { firstName: givenName, lastName: familyName } = personObject;
console.log(familyName, givenName); // Output: Akande Olalekan

// Array destructuring with rest operator
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // Output: 1 2 [3, 4, 5]


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7];
console.log(arr2);

const obj1 = {name: 'Alice', age: 25};
const obj2 = {...obj1, job: 'Engineer'};
console.log(obj2);

function sum(...args)
{
    return args.reduce((total, num) => total + num, 0);
}
