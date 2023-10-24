const vet = [6,1,3,4,2,5];
const nome= ['victor','ana','marcelo','marcantonio','bingo']
const matriz= [
    [1,2,3],
    [4,5,6],
    [7,8,9]]
var tam= vet.length

//vet.pop() -> elimina o ultimo elemento do array (valor pode ser guardado em variavel).

//vet.toString() -> transforma em string os valores do array e separa por virgula.

//vet.push(12) -> adiciona o elemento na ultima casa do array

//vet.shift()-> elimina o primeiro elemento e realoca os outros (valor pode ser guarda em var).

//vet.unshift(12)-> adiciona o elemento na primeira casa e realoca os outros.

//console.log(vet.unshift(12))-> demonstra o indice do array após acrecentar o valor.

//delete vet[0]-> deleta o valor, porém o espaço continua sendo ocupado pelo undefined. 

//const num_nom= vet.concat(name);-> junta 2 vetores em um terceiro.

//const test= triz.flat() -> unifica uma matriz em um vetor unidimensional.

//nome.splice(0,4,'bingo') -> adiciona no index especifico e elemina a quantidade de espaço escolhida.

//const visita= nome.slice(1) -> elimina o valor em uma localização especifica no array.

//vet.sort() -> ordena o array
/*
CUIDADO: const test= [100,75,50,25]

test.sort()

console.log(test.toString())
OUTPUT:100,25,50,75 */

//vet.reverse() -> inverte o array

const test= [100,75,50,25]

test.sort(function(a,b){return a-b})

console.log(test.toString())















