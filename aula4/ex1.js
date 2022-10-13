const nome = "Pedro" 
const anoDeNascimento = 2000
const diaAtual = new Date()
const anoAtual =  diaAtual.getFullYear()
const idade = anoAtual - anoDeNascimento

if (idade >= 18){
    console.log("Pode jogar!")
} else {
    console.log("acesso negado")
}