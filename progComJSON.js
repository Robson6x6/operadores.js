// JSON -- JavaScript Object Notation

//objeto simples composto por -- chave e valor com o objetivo de transferir dados.
let invoice = {
    name: "robson",
    age: 32,
    products: {
        0: ["mouse 2xwm", 29.90],
        1: ["Teclado mecânico", 129,90],
        2: ["Monitor", 899.99],
        3: ["TV 100 polegadas", "1000.90" ]
    }
    
}

generateInVoice(invoice)

function generateInVoice(invoice){
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age} `)
    console.log("--------------------")

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`O produto é:  ${productName}: no valor de R$ ${productPrice}`)
    }

    //console.log(`O produto é:  ${invoice.products}`)
}