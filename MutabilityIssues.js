// const numbers = [4, 2, 3, 1];
// numbers.sort();
// console.log(numbers);

// const numbers = [4, 2, 3, 1];
// const sortedNumbers = [...numbers].sort();
// console.log(sortedNumbers);

// Ternary Operator
// It has the syntax condition ? expressionIfTrue : expressionIfFalse. If the condition evaluates to true, it executes the expressionIfTrue. If it’s false, it executes the expressionIfFalse.

// let isUserRegistered = true;
// let message = isUserRegistered ? "Please Login" : "Please Sign-up";
// console.log(message);
// output : Please login

// Short-Circuiting and Logical Operators   
// Logical operators like && (AND) and || (OR) can be used to create clean and concise conditional logic in JavaScript.

// let isLoggedIn = true;
// console.log(isLoggedIn && "Welcome back!"); // Welcome back!

function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}
