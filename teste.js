let nome  
let idade
let parImparIdade = "impar"
let parImparAno = "impar"

nome = prompt("Digite seu nome:");
idade = parseInt(prompt("Digite sua idade:"));

let anoNasc 
anoNasc = 2023 - idade;

if(idade % 2 == 0){
    parImparIdade = "par"
}

if(anoNasc % 2 == 0){
    parImparAno = "par"
} 
console.log("Olá " + nome + ", você tem " + idade + ", nasceu em " + anoNasc + " e de acordo com a informações recebidas, voce ")

if(idade >= 18){
    console.log("Pode dar entrada na sua CNH!")
}else{
    console.log("Você ainda não tem idade suficiênte.")
}