const { type } = require("express/lib/response")

var a = (function(){
    return typeof arguments;
})();
console.log(a);

// note: JavaScript always uses lexical scope only 