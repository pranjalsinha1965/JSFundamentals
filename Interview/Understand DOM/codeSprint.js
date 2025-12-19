var a = 10;
var b;
function outer(){
    var a = 20;
    // var b = 30; for case II only 
    function inner(a){
        var s = 30;
        console.log(a++, b++);
    }
    console.log(a, ++b);
    inner(a);
}

outer();
console.log(a++, b++);

function Adder(x){
    return function(y){
        return x + y;
    };
}

var add5 = Adder(5);
var add10 = Adder(10);
console.log(add5(2));
console.log(add10(2));

// first Case 
let user = {
    firstname :'John', 
    lastname : 'Doe', 
    getFullName: function(){
        return function(){
            console.log(`The full name of the user is ${this.firstname} ${this.lastname}`);

        }
    }
}

user.getFullName()();

// Solution related case 

let userTwo = {
    firstname :'John', 
    lastname : 'Doe', 
    getFullName: function(){
        return() =>  {
            console.log(`The full name of the user is ${this.firstname} ${this.lastname}`);
        }
    }
}

userTwo.getFullName()();