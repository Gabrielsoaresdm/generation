export class Elevador {

        totalandares: number;
        capacidadelevador: number;
        pessoas: number;
        terreo: number;
    constructor(

        totalandares: number,
        capacidadelevador: number,
        pessoas: number,
        terreo: number

    ){
       this.terreo = terreo;
       this.totalandares = totalandares;
        this.capacidadelevador = capacidadelevador;
        this.pessoas = pessoas;

    }   
        inicializa(){

            console.log(`A capacidade do elevador é de:`, this.capacidadelevador, `\nO total de andares do prédio são:`, this.totalandares)
     }

        entrar(){ 
            if(this.terreo+1){
                this.totalandares=0 
                this.totalandares = this.totalandares + 1
            }
            this.terreo = this.terreo + 1

            console.log(`Andar: ${this.totalandares}`)
        }

       



}