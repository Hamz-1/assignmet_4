function displayMultiplicationTable(number) {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${number} x ${i} = ${number * i}\n`;
    }
    alert(`Multiplication Table for ${number}:\n\n${table}`);
}

let userInput = prompt("Enter a number to display its multiplication table:");

if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
    alert('Invalid input. Please enter a valid number.');
} else {
    let number = parseFloat(userInput);
    displayMultiplicationTable(number);
}

function calculateFactorial(number) {
    let result = 1;
    let i = 1;

    while (i <= number) {
        result *= i;
        i++;
    }

    return result;
}

let factorialOf5 = calculateFactorial(5);

console.log(`Factorial of 5 is: ${factorialOf5}`);

