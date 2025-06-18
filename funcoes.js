torrar()

function torrar (){
    console.log("torrando pão...")
    ejetarPao()
}

function ejetarPao(){
    console.log("Preparando para ejetar pão...")
    console.log("Finalizado!")
}

console.log("")

//exemplo de função main

//para não ter que chamar varias funções de para uma determinada sequencia de funções 
//pode-se criar uma função onde as demais estejam em sequencia.
main()


function main(){
    getData()
    checkValues()
    sendToDatabase()
}



function getData(){
    console.log("Obtendo dados dos usuários")
}

function checkValues(){
    console.log("Validando dados")
}

function sendToDatabase(){
    console.log("Cadastrando dados no banco")
}
