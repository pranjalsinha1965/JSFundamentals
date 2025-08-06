let isLoggedIn = true;
console.log(isLoggedIn && 'Welcome back!');

function UserGreeting({ isLoggedIn })
{
    return (
        <div>
            {isLoggedIn && <p>Welcome back!</p>}
        </div>
    );
}

let username = '';
console.log(username || 'Guest');
function UserProfile({ username })
{
    return (
        <div>
            <p> Hello, {Username || 'Guest'} ! </p>
        </div>
    );
}

let isAdmin = false;
console.log(isAdmin && 'Admin Panel' || isLoggedIn && 'User Dashboard');

function Dashboard({ isAdmin, isLoggedIn }){
    return (
        <div>
            {isAdmin && <p>Welcome to the admin panel</p>}
            {isAdmin && isLoggedIn && <p>Welcome to the user Dashboard</p>}
        </div>
    );
}

