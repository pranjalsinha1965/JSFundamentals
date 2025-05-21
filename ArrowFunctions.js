const greet = name => `Hello, ${name}!`;
console.log(greet('John')); // Hello, John!

const sayHello = () => 'Hello, world!';
console.log(sayHello()); // Hello, world!

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

const multiply = (x, y) => x * y;
console.log(multiply(4, 5)); // 20

const getFullName = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
};
console.log(getFullName('John', 'Doe')); // John Doe

const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 30)); // { name: 'Alice', age: 30 }

const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]