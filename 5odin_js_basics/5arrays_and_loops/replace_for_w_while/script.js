const numbers_while = document.querySelector(".numbers_while");
const numbers_for = document.querySelector(".numbers_for");

numbers_for.textContent += "For cycle: \n";
numbers_while.textContent += "While cycle: \n";

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
    numbers_for.textContent += `number ${i}! \n`;
}
let a = 0
while (a < 3) {
    alert(`number ${a}!`);
    numbers_while.textContent += `number ${a}! \n`;
    a++
}