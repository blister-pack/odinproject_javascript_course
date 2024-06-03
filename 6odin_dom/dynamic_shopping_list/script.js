const input = document.querySelector("#item");
const btn = document.querySelector("button");
const itemList = document.querySelector("ul");


const addItem = function() {
    let itemName = input.value;
    console.log(itemName);
    input.value = "";

    const itemLi = document.createElement("li");
    const itemSpan = document.createElement("span");
    const itemBtn = document.createElement("button");

    itemLi.appendChild(itemSpan);
    itemLi.appendChild(itemBtn);

    itemSpan.textContent = itemName;
    itemBtn.textContent = "Delete Item";
    itemBtn.addEventListener("click", () => { deleteItem(itemBtn); });

    itemList.appendChild(itemLi);
    input.focus();
};

btn.addEventListener("click", addItem);


const deleteItem = function (clickedButton) {
    // use query selector to get parent
    // it should be the li
    // delete the li

    // const toDelete = document.querySelector("li");
    // itemList.removeChild(toDelete);

    clickedButton.parentElement.remove();
};