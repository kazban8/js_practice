// Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*). 
// Поверніть результат операції. За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте 
// помилку(throw new Error() ), якщо дані невірні:

// Якщо операція ділення("/"), то другий параметр не може бути 0
// Для всіх операцій перший та другий параметр повинні бути числами
// Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
// Кількість аргументів не повинна бути більше 3-х

function calculate(num1, num2, operator) {

    if (arguments.length !== 3) {
        throw new Error('Кількість аргументів не повинна бути більше 3-х');
    }

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error('Обидва параметри повині бути числами');
    }

    if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
        throw new Error('Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*');
    }

    if (operator === '/' && num2 === 0) {
        throw new Error('другий параметр не може бути 0');
    }

    let result;
    if (operator === '+') {
        return num1 + num2

    } else if (operator === '-') {
        return num1 - num2

    } else if (operator === '*')
        return num1 * num2

    else if (operator === '/') {
        return num1 / num2
    }
}


try {
    console.log(calculate(1, "test", "*"));
} catch (error) {
    console.log(error.message);
}