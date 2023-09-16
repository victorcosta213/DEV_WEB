import { contaBancaria } from "./Banco";


export class contaPoupanca extends contaBancaria{
    constructor(){
        this.tipo= "Conta poupança"
    }
}