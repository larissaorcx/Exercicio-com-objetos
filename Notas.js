/*1. Escreva um programa que gera notas aleatórias de uma classe, e aponto quais alunos passaram, e quais precisam realizar a prova de recuperação
*/ 

let alunosClasse = Number(prompt("Digite o número de alunos na classe"))


function notasDaSala(alunosClasse) {
    let notas = []
    for(let i = 0; i < alunosClasse; i++){
        let nota = Math.random()
        notas.push(nota)
    }
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

function alunosAprovados(notas, alunosClasse) {
    aprovado = []
    for(let i = 0; i < alunosClasse; i++){
        if(notas[i] >= 5){
            aprovado.push(notas)
        }
    }
    return aprovado
}

function alunosReprovados(notas, alunosClasse) {
    reprovados = []
    for(let i = 0; i < alunosClasse; i++){
        if(notas[i] < 5){
            reprovados.push(notas)
        }
    }
    return aprovado
}

let teacher = {
    notas: notasDaSala(alunosClasse),
    media: media(notas, alunosClasse),
    aprovados: alunosAprovado(notas, alunosClasse),
    reprovados: alunosReprovados(notas, alunosClasse)

}