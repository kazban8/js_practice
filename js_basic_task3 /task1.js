const userInput = "ВeeeeeeeGHVHVvjiooii";
const modifiedString = replaceVowelsWithAsterisks(userInput);


function replaceVowelsWithAsterisks(inputString) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    for (let char of inputString) {
        if (vowels.includes(char)) {
            result += '*';
        } else {
            result += char;
        }
    }
    return result;
}

console.log(modifiedString)
