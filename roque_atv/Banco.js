class Banco{
    constructor(saldo){
        this.saldo = saldo
        this.historico=[]
    }

   
    getSaldo(){
        console.log(`Seu saldo atual: ${this.saldo}`)
    }
   
   
    Deposito(valor){
        this.saldo += valor
        this.historico("Deposito",valor)
        return console.log(`Seu deposito foi realizado com sucesso.`)
    }

    Saque(valor){
        var res=""
            if(this.saldo>=valor){
                this.saldo -= valor
                res= "Saque realizado com sucesso"
            }else{
                res= "Saldo indisponivel para saque"
            }
        this.historico.push(["Saque",valor,new Date()])
        return res
    }
 
    volta(){
        console.log(`Retorna: ${this.his}`)
    }
}


const cliente= new Banco(0)
var i=0
while(i!=5){
console.log("1- Depositar")
console.log("2- Sacar")
console.log("3- Ver saldo")
console.log("4- Ver Historico de transação")
console.log("5- Sair")
i=parseInt(prompt("Escolha uma opção: "))
                switch(i){
                case 1:
                    let valor = parseFloat(prompt("Digite um valor para deposito: R$ "))
                    console.log(cliente.Deposito(valor))
            
                break;
                case 2:
                    let sac= parseFloat(prompt("Digite um valor para saque: R$ "))
                    console.log(cliente.Saque(sac))
                break;
                case 3:
                    console.log(cliente.getSaldo());
                break;
                case 4:
                    console.log(cliente.volta());
                break;
                case 5:
                    console.log("Saindo...");
                break;
                default:
                    console.log("Opção não disponivel");
            }               
}

