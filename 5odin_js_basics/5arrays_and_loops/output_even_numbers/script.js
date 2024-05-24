const numbers = document.querySelector(".even_numbers");
numbers.textContent += "Even numbers: ";

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        numbers.textContent += `${index} `;
    }
}