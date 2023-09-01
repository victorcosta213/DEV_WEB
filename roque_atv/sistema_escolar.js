const alunos= []
const nota= []
const media= []
const redimento= []


//menu
var i=1
while(i>0){
    console.log("1- Cadastrar Aluno(a)")
    console.log("2- Cadastrar Notas")
    console.log("3- Exibir boletim")
    console.log("4- Sair")
    let op = parseInt(prompt("Digite uma opção: "))
            switch(op){
                case 1:
                    var nome= prompt("Digite o nome do aluno(a): ");
                    alunos.push(nome);
                    break;
                case 2:
                    let indentificar= prompt("Digite o nome do aluno: ");
                    let pos= alunos.indexOf(indentificar);
                    var nota1= parseFloat (prompt("Digite a nota1 do aluno(a): "));
                    var nota2= parseFloat (prompt("Digite a nota2 do aluno(a): "));
                    var nota3= parseFloat(prompt("Digite a nota3 do aluno(a): "));
                    nota.splice(pos,0,[nota1,nota2,nota3])
                    let valor= m(nota1,nota2,nota3);
                    media.splice(pos,0,valor);
                    break;
                case 3:
                    let indentificador= prompt("Digite o nome do aluno: ");
                    let posi= alunos.indexOf(indentificador)
                    console.log(`O aluno ${indentificador}`);
                    console.log(`Ficou com as notas ${nota[posi]}`);
                    console.log(`Ficou com a media ${media[posi].toFixed(2)}`);
                            if(media[posi]>=7){
                                console.log("Aprovado")
                            }else if(media[posi]<7 && media[posi]>=5){
                                console.log("recuperação")
                            }else if(media[posi]<5){
                                console.log("Reprovado")
                            }else{
                                console.log("nspc")
                            }
                            break;
                default: 
                    console.log("Opção invalida");}
  
    i= prompt("Deseja voltar ao menu (1-sim / 0-não): ")
    console.log("----------------------------------------")
    console.log()
}


function m(a,b,c){
    var m = (a+b+c)/3
    return m  
}