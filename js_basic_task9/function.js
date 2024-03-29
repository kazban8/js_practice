export function sayJoke(callback) {
    console.log("Це всього лише жарт")

    setTimeout(function(){
        const joke = "it's a joke and nothing";
        callback(joke);
    }, 2000);
}
const joke = sayJoke
console.log(sayJoke)

