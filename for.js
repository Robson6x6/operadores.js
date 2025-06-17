//é um conteúdo que irá se repetir indeterminada vezes, até que determinada condição seja verdadeira

//for

//é preciso declar uma variavel ; regra para sair do laço ; regra de como o contador será incrementado.

for (let contador = 0; contador < 4; contador++){
    console.log(contador)
}

// cuidados com o for verificar se o contador está passando a quantidade de vezes desejada.

let pontosDeVida = 0

for(let i = 1; i <= 10 ; i++){
    pontosDeVida += 1
    console.log("Tomou poção mágica de HP " + i)
}

console.log(pontosDeVida + " Totais")