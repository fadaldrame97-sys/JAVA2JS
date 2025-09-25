const prompt = require("prompt-sync")();
let nombre = prompt("donner un nombre");





for (let i = 1; i <= 10;i++){
    let total= nombre * i;
    console.log(total);
}