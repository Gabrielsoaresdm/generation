export class Pessoa {

    private nome: string;
    private datanascimento: number;
    private altura: number;

    constructor(
        nome: string,
        datanascimento: number,
        altura: number,

    ){
            this.nome = nome;
            this.altura = altura;
            this.datanascimento = datanascimento;

    }

    verDados(){
        console.log(`Nome: ${this.nome}
Altura: ${this.altura}
Data de Nascimento: ${this.datanascimento}`)

    }
    calcularidade(valor:number){

        console.log(`idade: `,valor-this.datanascimento)



        
    }



}