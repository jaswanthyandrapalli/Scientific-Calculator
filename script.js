let display = document.querySelector('.res');
let buttons = document.querySelectorAll('.keys button');
let history_section = document.querySelector('.history');

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.getAttribute("data-value");
        handleInput(value);
    });
});

function handleInput(value) {

    if (value === "c") {
        display.value = "";
    }

    else if (value === "del") {
        display.value = display.value.slice(0, -1);
    }

    else if (value === "=") {
        try {
            let result = eval(display.value);
            addToHistory(display.value + " = " + result);
            display.value = result;
           
        } catch {
            display.value = "Error";
        }
    }

    else if (value === "x²") {
        try {
            let result = eval(display.value) ** 2;
            addToHistory(display.value + "² = " + result);
            display.value = result;
        } catch {
            display.value = "Error";
        }
    }

    else if (value === "√") {
        try {
            let result = Math.sqrt(eval(display.value));
            addToHistory("√" + display.value + " = " + result);
            display.value = result;
        } catch {
            display.value = "Error";
        }
    }

    else {
        display.value += value;
    }
   
}


function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    history_section.appendChild(li);
}