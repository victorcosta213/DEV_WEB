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
    let op = prompt("Digite uma opção: ")
            switch(op){
                case 1:
                    var nome= prompt("Digite o nome do aluno(a): ");
                    alunos.push(nome);
                    break;
                case 2:
                    let indentificar= prompt("Digite o nome do aluno");
                    let pos= Array.prototype.indexOf(alunos.find((Element)=> Element = indentificar));
                    var nota1= prompt("Digite a nota1 do aluno(a): ");
                    var nota2= prompt("Digite a nota2 do aluno(a): ");
                    var nota3= prompt("Digite a nota3 do aluno(a): ");
                    nota.splice(pos,nota1,nota2,nota3);
                    m(nota1,nota2,nota3);
                    media.splice(pos,m);
                    break;
                case 3:
                    let indentificador= prompt("Digite o nome do aluno");
                    let posi= Array.prototype.indexOf(alunos.find((Element)=>Element = indentificador));
                    console.log(`O aluno ${indentificador}`);
                    console.log(`Ficou com as notas ${nota[posi]}`);
                    console.log(`Ficou com a media ${media[posi]}`);
                    break;}
  
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