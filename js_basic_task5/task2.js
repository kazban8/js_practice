// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив,
// в якому кожен елемент буде піднесений до квадрата.

function squareNumbers(arr) {

    return arr.map(num => num * num)

 }
 console.log(squareNumbers([1,5,2,3,4]))

