const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red";
// redParagraph.style.color = "red";
// redParagraph.style.cssText = "color:red;";
redParagraph.style["color"] = "red";
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!"
blueH3.style.cssText = "color:blue;";
container.appendChild(blueH3);

const weirdDiv = document.createElement("div");
weirdDiv.style.cssText = "background:pink; border-style:solid; border-color:black; border-width:3px;";
container.appendChild(weirdDiv);

const weirdH1 = document.createElement("h1");
weirdH1.textContent = "I'm in a div";
weirdDiv.appendChild(weirdH1);

const weirdP = document.createElement("p");
weirdP.textContent = "ME TOO!";
weirdDiv.appendChild(weirdP);


// playing around with event listeners

function alertFunc() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn")

// btn.addEventListener("click", alertFunc);

// btn.addEventListener("click", function (e) {
//     console.log(e);
// });
    
// btn.addEventListener("click", function (e) {
//     console.log(e.target);
//     });

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
    });