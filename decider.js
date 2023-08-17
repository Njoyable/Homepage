function addInput() {
    const container = document.getElementById("input-container");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "dynamicInput";
    newInput.placeholder = "Enter something";
    container.appendChild(newInput);
}

function chooseRandomInput() {
    const inputElements = document.querySelectorAll("input[name='dynamicInput']");
    const randomIndex = Math.floor(Math.random() * inputElements.length);
    const chosenInput = inputElements[randomIndex].value;

    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = "The Chosen One: " + chosenInput;
}

