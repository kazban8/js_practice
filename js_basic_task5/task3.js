// Напишіть функцію, яка приймає масив чисел в якості аргументу 
// і повертає суму всіх чисел у масиві.

function calculateSum(numbers){
    return numbers.reduce((total, num) => total + num)
}
console.log(calculateSum([1,1,15,20,111]))

