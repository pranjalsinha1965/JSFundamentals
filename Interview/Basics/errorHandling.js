/*Try, Catch and Finally*/
try{
    console.log("Start of try runs");
    unicycle;
    console.log("try runs continues -- end of the try runs");
} catch(err){
    console.log("This is the error caught" + err);
} finally {
    console.log("This is always run");
}

console.log("....the execution continues");

let json = {
    "age" : 30, 
};

try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name");
    }
    console.log(user.name);
} catch(e){
    console.log("JSON Error: " + e);
}