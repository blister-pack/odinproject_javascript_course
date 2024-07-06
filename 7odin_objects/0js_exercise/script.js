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

// exercise 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};

function countSalary(allSalaries) {
    // this function counts the salaries of the allSalaries
    let salarySum = 0;
    for (let salary in allSalaries) {
        salarySum += allSalaries[salary];
    }
    return salarySum;
}

console.log(countSalary(salaries));

// exercise 4
function multiplyNumeric(obj) {
    // this function multiply any object property that is numeric by 2
    for (let prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);