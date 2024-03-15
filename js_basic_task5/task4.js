// Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. 

// В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

// 1-49 - Low performance
// 50-69 - Medium performance
// 70-89 - Good performance
// 90-10 - Very good perfomance



const averageSum = (math, literature, physics) => {
    let averageMark = (math + literature + physics) / 3
    if (averageMark >= 1 &&  averageMark <= 49) {
        return "1-49 - Low performance"
    } else if (averageMark >= 50 &&  averageMark <= 69) {
        return "50-69 - Medium performance"
    } else if (averageMark >= 70 &&  averageMark <= 89) {
        return "70-89 - Good performance"
    } else (averageMark >= 90 &&  averageMark <= 100)
        return "90-100 - Very good performance"
}
console.log(averageSum(90,90,87))
