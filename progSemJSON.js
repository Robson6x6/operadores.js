// JSON -- JavaScript Object Notation

//objeto simples composto por -- chave e valor com o objetivo de transferir dados.

let name = "Robson"
let age = 32
let products = ["mouse 2xwm", "Teclado mêcanico", "Monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInVoice(name, products, productsValues,  age)

function generateInVoice(name, products, productsValues, age){
    console.log("O comprador é " + name)
    console.log("A idade é " + age)
    console.log("--------------------")
    console.log("O produto é: " + products[0])
    console.log("O valor é: " + productsValues[0])
}