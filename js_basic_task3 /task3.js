function findEvenNumbers(start, end) {
    const evenNumbers = [];
    for (let i = start + 1; i < end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

const num1 = 21;
const num2 = 45;

const start = Math.min(num1, num2);
const end = Math.max(num1, num2);

const evenNumbers = findEvenNumbers(start, end);
 {
        console.log("Парні числа між", start, "та", end, ":", evenNumbers);
    }
