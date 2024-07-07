// the objective of this exercise is to rewrite the function
// using filter, map and reduce

function sumOfTripledEvents(arr) {
    // func using map
    let sum = 0;
    let evenArray = arr.filter(num =>num % 2 === 0);
    console.log(evenArray);

    let tripledArray = evenArray.map(num => num * 3);
    console.log(tripledArray);
    
    let summedArray = tripledArray.reduce((summed, num) => summed + num, 0);

    return summedArray;
}

function cleanSumOfTripledEvens(array) {
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((acc, curr) => acc + curr);
}

let lol = [1, 2, 3, 4, 5];

sumOfTripledEvents(lol);
console.log(sumOfTripledEvents(lol));
console.log(cleanSumOfTripledEvens(lol));