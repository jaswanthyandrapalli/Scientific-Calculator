let display = document.querySelector('.res');
let buttons = document.querySelectorAll('.keys button');
let history_section = document.querySelector('.history');

// Button Click Support
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


document.addEventListener("keydown", function (event) {

    const keyMap = {
        "Enter": "=",
        "Backspace": "del",
        "Escape": "c"
    };

    if (keyMap[event.key]) {
        handleInput(keyMap[event.key]);
    }

    else if ("0123456789+-*/.".includes(event.key)) {
        handleInput(event.key);
    }
});

const toggleBtn = document.querySelector("#themeToggle");

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
   if(document.body.classList.contains("dark")){
    toggleBtn.textContent = "☀️";
    document.body.style.backgroundColor = "#333";
    } else {
    toggleBtn.textContent = "🌙";
    document.body.style.backgroundColor = "#fff";

   }
});