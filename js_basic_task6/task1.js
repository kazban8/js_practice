// Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish.
// За допомогою рекурсії, виведіть всі числа від start до finish.

function printNumbers(start, finish) {

    if (start > finish) {
        return;
    }
    console.log(start);
    printNumbers(start + 1, finish);
}

const startNumber = 10;
const finishNumber = 15;
printNumbers(startNumber, finishNumber);