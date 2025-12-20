// setTimeout 

var timeoutID = setTimeout(bye, 3000);
console.log("Hello");
clearTimeout(timeoutID);
function bye(){
    console.log("goodbye");
}

// setInterval 

var count = 0;
var intId = setInterval(counter, 3000);
function counter(){
    console.log(++count);
}