


//o split separa o texto de acordo com um caractere. no caso abaixo é um espaço, e para pegar o primeiro nome entre colchetes pegar o nome

let userName = getFistName("Robson Chagas de Freitas")
console.log("Seja bem vindo " + userName)

userName = getFistName("Atais-Ramos-de-Freitas", "-")
console.log("Seja bem vindo " + userName)

function getFistName(name, splitChar = " "){
    let fistName = name.split(splitChar)[0]
    return fistName
}