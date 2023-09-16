import { contaBancaria } from "./Banco";
import { contaCorrent } from "./contaCorrente";
import { contaPoupanca } from "./contaPoupança";
import { contaUniversitaria } from "./ContaUniversitaria";


console.log("Qual seu tipo de conta: ")
console.log("1- Conta Corrente ")
console.log("2- Conta Poupança ")
console.log("3- Conta Universitario ")
var op= parseInt(prompt("Escolha uma opção: "))

        if(op===1){
            const cliente = new contaCorrent();
        } else if(op===2){
            const cliente= new contaPoupanca();
        } else if(op===3){
            const cliente= new contaUniversitaria();
        }

for(var i=0; i<5;i++){
    cliente.ag(parseInt(prompt("Digite o numero da agencia: ")))
    cliente.numero(parseInt(prompt("Digite o numero da conta: ")))
    cliente.tipoConta(parseInt(prompt("Digite o tipo de conta: ")))
    cliente.saldo(0)
    console.log("1-deposito")
    console.log("2-Saque")
    console.log("3-Sair")
        switch(i){
            case 1:
                cliente.deposito(parseInt(prompt("Digite o valor do deposito: ")))
                break;
            case 2:
                cliente.Sacar(parseInt(prompt("Digite o valor do Saque: ")))
                break;
            case 3:
                console.log("Até logo!")
                break;
            default:
               console.log("Essa opção não está disponivel") 
        }
    
}