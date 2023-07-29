let nome  
let idade
let parImparIdade = "impar"
let parImparAno = "impar"
let parImpar

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
console.log("Olá " + nome + ", voce tem " + idade + " anos, que é um número " + parImparIdade + ", e nasceu em " + anoNasc + " que é um número " + parImparAno);

if(idade >= 18){
    console.log("Você pode comprar bebidas alcoólicas.");
}else{
    console.log("Você não pode comprar bebidas alcoólicas.");
}
