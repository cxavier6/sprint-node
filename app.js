import readlineSync from "readline-sync";

let arr = []

while(true) {
    let input = readlineSync.question("Insira a propriedade do CSS: ");
    if(input.toLowerCase() == 'sair') break;
    arr.push(input);
}

console.log(arr.sort());


