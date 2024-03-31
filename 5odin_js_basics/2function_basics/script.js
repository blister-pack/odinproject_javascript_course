function add7(num) {
    return (num + 7);
}

console.log(add7(3));

function multiply(num1, num2) {
    return (num1 * num2);
}

console.log(multiply(3, 2));

function capitalize(strlol) {
    formattedstr = strlol.toLowerCase()
    return formattedstr.charAt(0).toUpperCase() + formattedstr.slice(1)
}

console.log(capitalize("lowercase"));
console.log(capitalize("UPPERCASE"));
console.log(capitalize("eRmaRHgErd"));