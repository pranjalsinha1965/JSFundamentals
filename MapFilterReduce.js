const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled numbers: ", doubled);

const users = [
    { id: 1, name: 'Alice' }, 
    { id: 2, name: 'Bob' }, 
    { id: 3, name: 'Charlie' }
];

function UserList() {
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

// Just a function that logs users
function UserListLogger() {
    console.log("User List:");
    users.forEach(user => {
        console.log(`ID: ${user.id}, Name: ${user.name}`);
    });
}

// Call the function to print
UserListLogger();

/* To log these elements to console please use a logger function and create it on your own.*/


/* Note that each <li> element in the list has a unique 'key' prop.
It is required by React when rendering lists like this */

const numbersArrayTwo = [1, 2, 3, 4, 5];
const evenNumbers = numbersArrayTwo.filter(num => num % 2 == 0);
console.log(evenNumbers);

// Example (Filtering Data in React)
const todos = [
    { id: 1, task: 'Learn JavaScript', completed: true}, 
    { id: 2, task: 'Learn React', completed: false}, 
    {id: 3, task: 'Learn Reduc', completed: false}
];

function TodoList() {
    const imcompleteTodos = todos.filter(todo => !todo.completed);
    return (
        <ul>
            {incompleteTodos.map(todo => (
                <li key = {todo.id} > {todo.task}</li>
            ))}
        </ul>
    );
}

// Example (Basic Usage):
const numbersArrayThree = [1, 2, 3, 4];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10

// Example (Using reduce() in React):
const cart = [
  { id: 1, name: 'Apple', price: 1.5, quantity: 3 },
  { id: 2, name: 'Banana', price: 1, quantity: 2 },
  { id: 3, name: 'Orange', price: 2, quantity: 1 }
];

function CartSummary() {
  const total=cart.reduce((sum, item)=>sum + item.price * item.quantity, 0);
  return (
    <div>
      <h3>Total: ${total}</h3>
    </div>
  );
}

// Example: combined use of filter and map methods
const usersCart = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 17 },
  { id: 3, name: 'Charlie', age: 30 }
];

const adultNames = usersCart
  .filter(usersCart => user.age >= 18)
  .map(usersCart => user.name);
console.log(adultNames); // ['Alice', 'Charlie']