const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

/* arr2 is created by spreading the elements of arr1 
 and then adding additional values */

 const obj1 = {name: 'Alice', age: 25};
 const obj2 = {...obj1, job : 'Engineer'};
console.log(obj2);
// { name: 'Alice', age: 25, job: 'Engineer' }

/* obj2 is created by spreading the properties of obj1
 and adding a new property */

 function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]
