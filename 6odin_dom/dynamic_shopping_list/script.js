const input = document.querySelector("#item");
const btn = document.querySelector("button");
const itemList = document.querySelector("ul");

const addItem = function() {
    let itemName = input.textContent;
    input.textContent = "";
    
};

btn.addEventListener("click", addItem);