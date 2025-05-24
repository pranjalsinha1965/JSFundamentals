let isLoggedIn = true;
console.log(isLoggedIn && 'Welcome back!');

// Welcome Back 

function UserGreeting({ isLoggedIn})
{
    return (
        <div>
            {isLoggedIn && <p>Welcome back !</p>}
        </div>
    );
}

let username = '';
console.log(username || Guest);
// Output: Guest

function UserProfile({ username})
{
    return (
        <div>
            <p>Hello, {username || 'Guest'} !</p>
        </div>
    );
}

