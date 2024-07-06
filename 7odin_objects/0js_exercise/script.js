// exercises from https://javascript.info/object
// exercise 1
let user = {};

user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

console.log(user.name);

// exercise 2
function isEmpty(objToCheck) {
    // checks if object has properties
    for (let key in objToCheck) {
        return false;
    }
    return true;
}

let schedule = {};
console.log((isEmpty(schedule))); // should return true
schedule["wakeUp"] = "8:30";
console.log((isEmpty(schedule))); // should return false
