// 1° quais variáveis vou precisar declarar 
// 2° que comandos vou escrever para processar as informações e dar um resultaro final 
// 3° resultado final : console.log(), retorno de uma função 
function horaAtual () {
     const hora = new Date(); 
     const horaconvertida = hora.toLocaleTimeString() 
     console.log(`Olá, agora são ${horaconvertida}`) 
    } 
    
    horaAtual()
 console.log("Boa noite para você.")
