//Simple JavaScript Calculator


//Take user number input
const firstValue = parseFloat(prompt('Enter first number'));
const secondValue = parseFloat(prompt('Enter second number'));

//Take user operator input
const method = prompt('Choose your method: + = Additon, - = Subtractions, * = Multiplication, / = Division.')

//result variable
let result;

// operator calculations if/else
if (!firstValue || !secondValue || !method) {
    console.log('Wrong or missing input');
} else {
    if (method == '+') {
        result = firstValue + secondValue;
    } else if (method == '-') {
        result = firstValue - secondValue;
    } else if (method == '*') {
        result = firstValue * secondValue;
    } else if (method == '/') {
        result = firstValue / secondValue;
    } else {
        console.log('Wrong method');
    }
}

//display results
console.log(`${firstValue} ${method} ${secondValue} = ${result}`);