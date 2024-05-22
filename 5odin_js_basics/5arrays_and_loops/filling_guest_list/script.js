const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (const person of people) {
    if (person == "Phil" || person == "Lola") {
        refused.textContent += `${person}, `;
    } else {
        admitted.textContent += `${person}, `;
    }
}
// how can I select and reassign the last 2 chars just like in Python?
admitted.textContent.slice(-2) = ""

// refused.textContent += ;
// admitted.textContent += ;