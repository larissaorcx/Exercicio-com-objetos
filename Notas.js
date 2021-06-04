/*1. Escreva um programa que gera notas aleatórias de uma classe, e aponto quais alunos passaram, e quais precisam realizar a prova de recuperação
*/ 

// um objeto que recebe os dados de uma classe (nota, média, desvio padrao).

let alunosClasse = Number(prompt("Digite o número de alunos na classe"))


function notasDaSala(alunosClasse) {
    notas = []
    for(let i = 0; i < alunosClasse; i++){
        nota = Math.random()
        notas.push(nota)
    }
    return(notas)
}

function media(notas, alunosClasse) {
    soma = 0
    for(let i = 0; i < alunosClasse; i++){
        soma += notas[i]
    }

    let media = soma / alunosClasse
    return media
}



let teacher = {
    notas: notasDaSala(alunosClasse),
    media: media(notas, alunosClasse),
    aprovados: alunosAprovado(),
    reprovados: alunosReprovados()

}