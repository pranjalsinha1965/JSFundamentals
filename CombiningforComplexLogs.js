let isAdmin = false;
let isLoggedIn = true;
console.log(isAdmin && 'Admin Panel' || isLoggedIn && 'User Dahsboard');
// Output: User Dahsboard

function Dashboard({ isAdmin, isLoggedIn })
{
    return (
        <div>
            {isAdmin && <p>Welcome to the Admin Panel</p>}
            {!isAdmin && isLoggedIn && <p>Welcome to the User Dashboard</p>}
        </div>
    );
}

