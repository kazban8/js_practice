const array1 = ["String one", "String two", "string three"]
const array2 = []

for (const string of array1) {
    array2.push(string.toUpperCase())
}

console.log("капслоком - ", array2) 