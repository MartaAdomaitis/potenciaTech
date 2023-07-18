// Problema
// Como desenvolvedor sênior da Cubos Game, empresa da Cubos Academy destinada a fazer jogos eletrônicos para computadores, você ficou responsável por implementar a lógica que mostre ao jogador do "Enfrentando Bugs", novo jogo da empresa, se ele pode ou não entrar na sala do chefão da fase em que ele se encontra no jogo.

// Para ter o direito de enfrentar o chefão, o jogador deve ter coletado três itens específicos ao longo da fase, que variam de chefão para chefão.

// Entrada
// A entrada do seu programa será composta por quatro variáveis:

// itensColetados: array de strings em que cada posição indica um item coletado ao longo da fase;
// itemNecessario1: uma string que indica o primeiro item necessário para enfrentar o chefão;
// itemNecessario2: uma string que indica o segundo item necessário para enfrentar o chefão;
// itemNecessario3: uma string que indica o terceiro item necessário para enfrentar o chefão.
// Saída
// Você deve retornar:

// PODE ENFRENTAR: caso o jogador tenha os três itens necessários para enfrentar o chefão;
// NAO PODE ENFRENTAR: caso o jogador não tenha os três itens necessários para enfrentar o chefão.
// Exemplo
// Entrada
// itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

// itemNecessario1 = "machado"

// itemNecessario2 = "espada"

// itemNecessario3 = "sapato"

// Saída
// NAO PODE ENFRENTAR

// Explicação
// Apesar do jogador ter conseguido coletar dois dois itens necessários, o machado e o sapato, ele não conseguiu obter a espada.

let itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"]

let itemNecessario1 = "machado"

let itemNecessario2 = "espada"

let itemNecessario3 = "sapato"

// primeira forma de solucionar

function procura2(a){
    let resultado;
    if(a.includes(itemNecessario1)&& a.includes(itemNecessario2) && a.includes(itemNecessario3)){
        resultado = "PODE ENFRENTAR"
    }else{
        resultado = "NÃO PODE ENFRENTAR"
    }
    return resultado
}
console.log(procura2(itensColetados))
return procura2(itensColetados)

// segunda forma de solucionar


// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
// let resultado = 0;

//       for (let item of itensColetados){  
//       if(item === itemNecessario1 || item === itemNecessario2 || item === itemNecessario3){
//         resultado++;
//       }
//      }

//       if(resultado < 1){
//         return ("NÃO PODE ENFRENTAR")
//       }else{
//         return ("PODE ENFRENTAR")}
//       }

// return solucao(itensColetados)

