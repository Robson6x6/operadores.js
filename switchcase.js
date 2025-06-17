//Usado quando se possui muitas opções para não usar muitos else e if.

//estrutura
// switch/case/break/default

// dentro do switch quando ele encontra a resposta ele continua testando as linhas caso não possua o break

// usamos o break para quando o valor da variavel for encontrado ele executar e parar

//default não é obrigátorio porém bastante utilizado.

let fruta = "morango"

switch (fruta){
    case "laranja":
        console.log("suco de laranja")
        break

    case "banana":
    case "morango":
        console.log("Vitamina de " + fruta)
        break

    case "maça":
        console.log("suco de maça")
        break

    default: 
        console.log("Fruta indisponível, escolha outra!")
}

