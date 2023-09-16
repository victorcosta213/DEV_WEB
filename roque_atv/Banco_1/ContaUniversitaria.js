import { contaBancaria } from "./Banco";
export class contaUniversitaria extends contaBancaria{

    saque(valor){
        if(valor<=500){
            this.saldo -= valor
        }else(
            console.log("Limite de saque excedido!")
        )
    }
}