let user = { name : 'Alice', address: { city: 'Wonderland' }};
console.log(user?.address?.city);

// Output: Wonderland

let user1 = { name: 'Bill' };
// console.log(user1.address.city);

// Output: Error : cannot read property 'city' of undefined

let user2 = { name: 'Caleb' };
console.log(user2.address?.city);

// Output : Undefined

// Optional chaining with functions 

let user3 = {
    name: 'Alice', 
    greet: () => 'Hello!'
};

console.log(user3.greet?.());
console.log(user3.sayGoodbye?.());

let users = [{ name: 'Alice' }, { name: 'Bob' }];
console.log(users[0]?.name);
console.log(users[2]?.name);

let user4 = { name: 'Bill', preferences: { Theme: 'dark' }};
let property = 'preference';
console.log(user4[property]?.theme);
property = 'settings';
console.log(user2?.[property]?.theme);

let user5 = { profile: { address: { city: 'Wonderland' } } };

// usage without optional chaining (using short-circuiting):
if (user5 && user5.profile && user5.profile.address && user5.profile.address.city) {
  console.log(user5.profile.address.city);
}

// usage with optional chaining (saving repititive null checks):
console.log(user5?.profile?.address?.city); // Wonderland

// Example usage of Optional Chaining in React
function UserProfile({ user6 }) {
  return (
    <div>
      <p>Name: {user6?.name}</p>
      <p>City: {user6?.address?.city ?? 'Unknown'}</p>
    </div>
  );
}