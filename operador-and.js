//AND ( && ) O operador AND as duas condições tem que ser verdadeiras

// primeiro exemplo

console.log("Primeiro teste")
console.log(" ")
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true) 
console.log( "Para deixar poder viajar as duas condições tem que ser verdadeiras para o resultado ser true, caso contrário será false: " + resultado)
console.log(" ")
console.log(" ")

//segundo exemplo
//condições para vitória: 100 moedas coletads e 1 item de estrela

console.log("Segundo teste")
console.log(" ")

let moedasColetadas = 100
let item = "estrela"
let resultadoGame = (moedasColetadas === 100) && (item === "estrela")

console.log(resultadoGame   )
