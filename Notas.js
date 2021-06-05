/*1. Escreva um programa que gera notas aleatórias de uma classe, e aponto quais alunos passaram, e quais precisam realizar a prova de recuperação
*/ 

let alunosClasse = Number(prompt("Digite o número de alunos na classe"))

let notas = []
let aprovados = []
let reprovados = []

function notasDaSala(notas, alunosClasse) {
    
    for(let i = 0; i < alunosClasse; i++){
        let nota = Math.floor(Math.random() * 10) // gera um numero aletorio de 0 a 10
        notas.push(nota)
    }
    console.log(notas)
    return(notas)
}

function media(notas, alunosClasse) {
    let soma = 0
    for(let i = 0; i < alunosClasse; i++){
        soma += notas[i]
    }

    let media = soma / alunosClasse
    return media
}

function alunosAprovados(aprovados, notas) {
    for(let i = 0; i < notas.length; i++){
        if(notas[i] >= 5){
            aprovados.push(notas[i])
        }
    }
    return aprovados
}

function alunosReprovados(reprovados, notas) {
    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 5){
            reprovados.push(notas[i])
        }
    }
    return reprovados
}

let teacher = {
    notas: notasDaSala(notas, alunosClasse),
    media: media(notas, alunosClasse),
    aprovados: alunosAprovados(aprovados, notas),
    reprovados: alunosReprovados(reprovados, notas)

}

console.log(teacher)