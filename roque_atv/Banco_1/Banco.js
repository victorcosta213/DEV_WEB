export class contaBancaria{
    constructor(ag,numero,tipoConta,saldo){
        this.ag = ag
        this.numero = numero
        this.tipoConta = tipoConta
        this.saldo = saldo

    }

    get saldo(){
        return this.saldo
    }

    set saldo(valor){
        this.saldo = valor
    }

    Sacar(valor){
        this.saldo -= valor
    }

    deposito(valor){
        this.saldo += valor
    }
}