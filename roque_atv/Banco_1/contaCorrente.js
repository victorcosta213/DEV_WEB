
import { contaBancaria } from "./Banco";

export class contaCorrent extends contaBancaria{

    constructor(saldoCred){
            this.saldoCred = saldoCred
            this.tipo = "Conta Corrente"

    }

    get cred(){
        return this.saldoCred
    }

    set cred(valor){
        this.saldoCred=valor
    }
  
}