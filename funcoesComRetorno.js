//aqui veremos funções com retorno

//aqui estamos atribuindo a uma variavel o resultado de uma função, onde só é retornado quando for chamado.


let resultado = soma(5, 5)

console.log("O resultado desta função é: " + resultado)

// não é indicado returnar dois valores ou objetos.

//podemos retornar um vetores ou matrizes, se necessário.

 
function soma(numA, numB){
    let somatorio = numA + numB
    //console.log(somatorio)
    return somatorio
}

