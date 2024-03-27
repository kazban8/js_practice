export function sayJoek(callback) {
    console.log("Це всього лише жарт")

    setTimeout(function(){
        const joek = "it's a joke and nothing";
        callback(joek);
    }, 3000);
}
const joek = sayJoek
console.log(sayJoek)

