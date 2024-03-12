const string_email = "daniel.abrams@gmail.com"
const words = string_email.split("@")
const removed = words.splice(1, 1, "changed.com")
console.log(words.join('@'))