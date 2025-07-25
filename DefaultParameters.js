function greet(name = 'Stranger') {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, Stranger!
greet('Alice'); // Hello, Alice!

function greet(name) {
  const finalName = name || 'Stranger';
  console.log(`Hello, ${finalName}!`);
}

greet(); // Hello, Stranger!
greet(''); // Hello, Stranger!
greet('John'); // Hello, John!
