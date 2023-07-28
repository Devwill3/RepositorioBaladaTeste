let nome  
let idade
let parImparIdade = "impar"
let parImparAno = "impar"

let anoNasc 
anoNasc = 2023 - idade;

nome = prompt("Digite seu nome:");
idade = parseInt(prompt("Digite sua idade:"));

if(idade % 2 == 0){
    parImparIdade = "par"
}

if(anoNasc % 2 == 0){
    parImparAno = "par"
}