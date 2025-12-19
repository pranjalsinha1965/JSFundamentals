var a = 10;
setTimeout(function(){
    console.log(a);
}, 100);

console.log(window.document == document);
console.log(window.location === document.location);

function test(){
    return this;
}

console.log(window == test());
