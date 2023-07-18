// Problema
// Você, desenvolvedor sênior do UFC, maior evento de artes maciais mistas (MMA) do mundo, deve desenvolver um programa que indique à organização do novo evento que sua empresa vai fazer se dois lutadores podem ou não lutar.

// Os lutadores serão divididos em cinco categorias:

// Peso leve: lutadores com peso mais leve que 55 kg;

// Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

// peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

// Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

// Peso pesado: pesos maiores ou iguais a 85 kg.

// A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.

// Entrada
// A entrada do seu programa será composta por duas variáveis:

// peso1: variável numérica que armazena o peso de um dos lutadores;

// peso2: variável numérica que armazena o peso do outro lutador.

// Saída
// Você deve retornar:

// PODEM LUTAR: se os lutadores forem da mesma categoria;

// NAO PODEM LUTAR: se os lutadores forem de categorias diferentes.

// solução

const peso1 = 55
const peso2 = 54

function solucao(peso1, peso2){
  categoriaLutador1 = categoria(peso1);
  categoriaLutador2 = categoria(peso2);
    
    if (categoriaLutador1 === categoriaLutador2){
    return "PODEM LUTAR";
    } else {
    return "NAO PODEM LUTAR";
    }
    }
    
    function categoria(peso) {
        if (peso < 55){
        return "pesoLeve";
        }
        else if (peso < 65){
        return "pesoMeioMedio";
        }
        else if (peso < 75){
        return "pesoMedio";
        }
        else if (peso < 85){
        return "pesoMeioPesado";
        }
        else{
        return "pesoPesado";
        }
        }
        console.log(solucao(peso1,peso2))
   