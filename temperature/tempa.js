function onAddBtnClicked() {
    // find the HTML elements
    const number1Field = document.getElementById("number1Field");
    const number2Field = document.getElementById("number2Field");
    const messagePara = document.getElementById("messagePara");
    // get user inputs
    let number1 = Number(number1Field.value);
    let number2 = Number(number2Field.value);
    // check to see if user inputs were invalid
    if (isNaN(number1) || isNaN(number2)) {
    messagePara.innerHTML =
    "One or more of your input values are invalid";
    return; // exit the addBtnClicked function
    }
    // display the results
    let answer = number1 + number2;
    const answerField = document.getElementById("answerField");
    answerField.value = answer;
    // clear any previous error message
    messagePara.innerHTML = "";
    }