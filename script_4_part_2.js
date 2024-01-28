function calculateFactorial(number) {
    let result = 1;
    let i = 1;

    while (i <= number) {
        result *= i;
        i++;
    }

    return result;
}

document.addEventListener("DOMContentLoaded", function() {
    let factorialOf5 = calculateFactorial(5);
    alert(`Factorial of 5 is: ${factorialOf5}`);
});
