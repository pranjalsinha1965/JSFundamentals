import React from "react";

let isLoggedIn = true;
console.log(isLoggedIn && 'Welcome back!'); // Welcome back!

function UserGreeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
}