const input = document.querySelector("#item");
const btn = document.querySelector("button");
const itemList = document.querySelector("ul");

const addItem = function() {
    let itemName = input.textContent;
    input.textContent = "";

    const itemLi = document.createElement("li");
    const itemSpan = document.createElement("span");
    const itemBtn = document.createElement("button");

    itemLi.appendChild(itemSpan);
    itemLi.appendChild(itemBtn);

    itemSpan.textContent = itemName;
    itemBtn.textContent = "Delete Item";

    itemList.appendChild(itemLi);
    focus(input);
};

btn.addEventListener("click", addItem);