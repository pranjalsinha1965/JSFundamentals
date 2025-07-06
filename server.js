const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());
// Static greeting endpoint
app.get('/greeting', (req, res) => {
    const name = 'Alice';
    const greeting = `Hello, ${name}! How are you today?`;
    res.send({ greeting });
});

// List rendering endpoint
app.get('/list', (req, res) => {
    const items = ['apple', 'banana', 'cherry'];
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    const list = `<ul>${listItems}</ul>`;
    res.send({ list });
});

// Person info destructure
app.get('/person', (req, res) => {
    const person = {
        firstName: 'Olalekan',
        lastName: 'Akande',
        middleName: 'Toheeb',
        age: 30
    };
    const { firstName, lastName } = person;
    res.send({ firstName, lastName });
});

// Theme config endpoint
app.get('/config', (req, res) => {
    const config = {
        theme: 'light'
    };
    const { theme = 'dark' } = config;
    res.send({ theme });
});

// Address object destructuring
app.get('/address', (req, res) => {
    const addressObject = {
        street: '123 Main St',
        city: 'Ilorin',
        state: {
            nameObject: 'Kwara',
            abbreviation: 'KW'
        }
    };
    const { street, city, state: { nameObject } } = addressObject;
    res.send({ street, city, stateName: nameObject });
});

// Person object with renamed fields
app.get('/person/rename', (req, res) => {
    const personObject = {
        firstName: 'Olalekan',
        lastName: 'Akande',
        middleName: 'Toheeb',
        age: 30
    };
    const { firstName: givenName, lastName: familyName } = personObject;
    res.send({ givenName, familyName });
});

// Numbers with array destructuring
app.get('/numbers', (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    res.send({ first, second, rest });
});

// Root
app.get('/', (req, res) => {
    res.send('JS Destructuring API is running 🚀');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
