let isUserRegistered = true;
let message = isUserRegistered ? "Please Login" : "Please sign-up";
console.log(message);
// output : Please login

let numEggs = 4;
console.log(`In breakfast, I eat ${numEggs} eggs.`);

console.log(`Today, Iate only half of it, I ate just ${numEggs / 2}`);

console.log(`TodayI had: 
    - Breakfast 
    - Lunch 
    - Dinner `);

const greet = name => `Hello, ${name}!`;
console.log(greet(`John`));

const sayHello = () => `Hello, World`;
console.log(sayHello());

const add = (a, b) => a+b;
console.log(add(2, 3));

const multiply = (a, b) => a*b;
console.log(multiply(2, 3));

const getFullName = (firstName, LastName) => {
    const fullName = `$fullName`;
    return fullName;
    };
console.log(getFullName('John', 'Doe'));

const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 30));

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num ** 2);
console.log(squares);
 
function greetSecond(name = 'Stranger') {
    console.log(`Hello, ${name}!`);
}
greetSecond();
greetSecond('Alice');

let user = {
    name: "Alice", 
    address: {
        city: "Wonderland" 
    }
};

console.log(user?.address?.city);

function fetchData(callback) {
    setTimeout(() => {
    console.log("Data fetched successfully");
    callback({user: "John", age: 30});
    }, 2000);
}

fetchData((data) => { 
    console.log("User:", data.user);
})
