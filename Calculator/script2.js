let buttonInput = document.querySelectorAll(".input-button");
let input = document.getElementById('input');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');
let erase = document.getElementById('erase');

window.onload = () => {
    //when we open new calc set value in display as 0
    input.value = "";
} 

let equalPressed = 0;
buttonInput.forEach((buttonClass) => {
    buttonClass.addEventListener('click', () => {
        if (equalPressed == 1) {
            input.value = "";
            equalPressed = 0;
        }

        input.value = input.value + buttonClass.value;
    });
});

equal.addEventListener('click', () => {
    equalPressed = 1;
    let inputValue = input.value;
    try {
        //evaluate user's input
        let solution = eval(inputValue);
        //true for natural numbers
        //false for decimals
        if (Number.isInteger(solution)) {
            input.value = solution;
        } else {
            input.value = solution.toFixed(2);
        }
    }
    catch (error) {
        alert("Invalid Input" + error);
    };
})

clear.addEventListener('click', () => {
    input.value = ""
});

erase.addEventListener('click', () => {
    input.value = input.value.substr(0, input.value.length - 1);
});
