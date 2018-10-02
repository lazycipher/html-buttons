var element = document.createElement("button");
element.innerHTML = "Click Me!"
var btnDiv = document.getElementById("btn");
btnDiv.appendChild(element);

console.log(element);
