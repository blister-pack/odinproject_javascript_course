const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red";
// redParagraph.style.color = "red";
// redParagraph.style.cssText = "color:red;";
redParagraph.style["color"] = "red";
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!"
