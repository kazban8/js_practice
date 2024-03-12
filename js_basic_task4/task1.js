const numbers = [5, -4, 0, 6, 7, -1, 0, 0];
let positive = 0;
let negative = 0;
let zero = 0;

for (let i = 0; i < numbers.length ; i++) {
    if (numbers[i] > 0) {
        positive++;
    } else if (numbers[i] < 0) {
        negative++;
    } else {
        zero++;
    }
}

console.log("позитивні - ", positive);
console.log("негативні - ", negative);
console.log("нуль - ", zero);
