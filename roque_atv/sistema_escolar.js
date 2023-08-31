const alunos= []
const media= []
const redimento= []


//menu
var i=1
while(i>0){
    var nome= prompt("Digite o nome do aluno(a): ")
    alunos.push(nome)
    var nota1= prompt("Digite a nota1 do aluno(a): ")
    var nota2= prompt("Digite a nota2 do aluno(a): ")
    var nota3= prompt("Digite a nota3 do aluno(a): ")
    var a = m(nota1,nota2,nota3)
    media.push(a)
               switch(Math.round(a)){
                    case a>=7:
                        redimento.push("Aprovado")
                        break;
                    case a<7 && a>=5:
                        redimento.push("Recuperação")
                        break;
                    case a<5:
                        redimento.push("Reprovado")
                        break;
                    default:
                        redimento.push("nspu")
               }
    i= prompt("Deseja cadastrar outro aluno(a):(1-sim/0-não) ")
    console.log("----------------------------------------")
    console.log()
}

for(var i =0; i< alunos.length;i++){
   console.log("----------------------------------------")
   console.log(`O aluno(a): ${nome[i]}`)
   console.log(`média: ${media[i]}`)
   console.log(`Situação: ${rendimento[i]}`)
   console.log("----------------------------------------")
}

function m(a,b,c){
    var m = (a+b+c)/3
    return m  
}