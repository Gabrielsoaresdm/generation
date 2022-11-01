
// Três formas de identificar o array: 
//Collections é tudo
// (não consigo alterar a informação dentro do array) - vetor
// for of e foreach é para array, dentro de collections

// let identificador = new Array<string>
// let identificador: number[] = []
// let identificador = ["Nome", "leao"]

let alunos: string[] = []


//populando um array
alunos.push('gabriel', 'joao', 'alex', 'duda','oton')

// console.log(alunos[0])
// console.log(alunos[1])

// for(let i = 0; i <= 2; i++){
//     console.log(alunos[i])
// }

// for( let i of alunos){
//     console.log(i)
// }

// alunos.forEach(x => console.log(x))

//remover conteúdo array
//alunos.pop() remove o ultimo item dentro do array
//alunos.shift() remove o primeiro item dentro do array


console.log(alunos);

// alunos.shift();
// alunos.pop();
alunos.splice(0,5)
console.log(alunos);