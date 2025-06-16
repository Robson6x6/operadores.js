//OR ( || ) quando uma ou outra condição está como verdadeira.

//O personagem só pode sair se estiver sem chuva OU com guarda chuva

let tempo = "Sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log("Nosso personagem pode sair? " + podeSair)