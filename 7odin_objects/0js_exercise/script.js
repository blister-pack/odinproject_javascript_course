// exercises from https://javascript.info/object
// exercise 1
let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

console.log(user.name);

// exercise 2