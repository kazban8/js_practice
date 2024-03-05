const baseString = "TEST$$$ @@@ testTEST" ;
const charToReplace = "@";
const replacedString = replaceCharacter(baseString, charToReplace);

function replaceCharacter(baseString, charToReplace) {
    const replacedString = baseString.replace(new RegExp(charToReplace, 'g'), '*');
    return replacedString;}

console.log(replacedString); 