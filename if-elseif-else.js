//if São blocos de codigo que só serão executados quando determinada expressão for verdadeira

//else é executado quando o if não é verdadeiro

//else if é possivel fazer uma segunda pergunta caso o if não seja verdadeiro e tenha outra opção antes do else


//if, else

let possuiOvos = false
let itensComprados = ""
if(possuiOvos){
    itensComprados = "Leite"
}
else{
    console.log("Passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

//else if

let nivelDeFome = 1

if(nivelDeFome === 1){
    console.log("Você está com pouca fome!")
}else if(nivelDeFome === 2){
    console.log("Você está com muita fome!")
}else{
    console.log("Você comeria mais que o Scooby e o Salsicha juntos")
}