
    var matrizQuadradaMagica = function () {
        console.log("Quantidade de Parametros: " + arguments.length);
    
        //VERIFICANDO SE TODOS OS PARAMETROS SAO NUMEROS
        for (var i = arguments.length - 1; i >= 0; i--) {
            if (isNaN(arguments[i])) {
                console.log("O parametro de nº" + (i + 1) + " não é um numero");
                return false;
            }
        }
    
        //TIRANDO A RAIZ QUADRADA DA QUANTIDADE DE TERMOS PARA VER O NUMERO DE
        var calc = Math.sqrt(arguments.length);
    
        //TRANSFORMANDO EM A RAIZ EM UM NUMERO INTEIRO
        var calc2 = Number.parseInt(calc);
    
        //JA COM O ROUND...ELE TRANSFORMA NO NUMERO INTEIRO MAIS PROXIMO
        if ((x = Math.round(20.49)) == 20 && (x = Math.round(20.5)) == 21) {
            var calc2 = Math.round(calc);
        }
    
        if (calc != calc2) {
            console.log("Raiz Quadrada do tamanho da matriz: " + calc + " Não é um numero inteiro!! \nLogo matriz nem chega a ser quadrada.");
            return false;
        }
        console.log("Numero de linhas e colunas: " + calc);
    
        //PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
        var matriz = [];
        var arr = [];
        var cont = 0;
        var cont2 = 0;
    
        //PEGAR OS PARAMETROS PASSADOS E TRANSFORMAR EM UMA MATRIZ QUADRADA
        for (var i = arguments.length - 1; i >= 0; i--) {
            if (cont < calc) {
                arr[cont] = arguments[i];
            }
            if (cont == calc - 1) {
                matriz[cont2] = arr.reverse();
                var arr = [];
                cont2++;
                cont = -1;
            }
            cont++;
        }
    
        console.log("Matriz: " + matriz.toString());
        console.log("Matriz: " + matriz.reverse().toString());
        console.log("Tamanho da matriz : " + matriz.length);
    
        var m = matriz;
        var somad = 0;
        var somad2 = 0;
        var somal = [];
        var somac = [];
        var retorno = 1;
    
        //FAZENDO A SOMA DOS LADOS, COLUNAS E DIAGONAL PRINCIPAL
        for (var i = 0; i < m.length; i++) {
            somad += m[i][i];
            somal[i] = 0;
            somac[i] = 0;
        }
        
        for(var i=0;i< m.length;i++){
            for (var j = 0; j < m[0].length; j++) {
                somal[i] += m[i][j];
                somac[i] += m[j][i];
            }}
    
        //CONFIRINDO SE A SOMA DOS LADOS E COLUNAS SAO DIFERENTES
        if (somal[i] != somac[i]) {
            console.log("Não é uma matriz quadrada mágica.");
            retorno = 0;
        }
    
        //FAZENDO A SOMA DA DIAGONAL SECUNDARIA
        for (var i = m.length - 1; i >= 0; i--) {
            somad2 += m[i][i];
        }
        console.log("Soma da Diagonal Principal: " + somad);
        console.log("Soma da Diagonal Secundaria: " + somad2);
    
        //CONFIRINDO SE AS SOMAS DAS DIAGONAIS SAO IGUAIS
        if (somal[0] != somad || somad != somad2) {
            console.log("Não é uma matriz quadrada mágica.");
            retorno = 0;
        }
    
        //PEGANDO O RETORNO PARA DEFINIR SE É UMA MATRIZ QUADRADA OU NAO
        if (retorno) {
            console.log("É uma matriz quadrada mágica.");
            return true;
        } else {
            console.log("Não é uma matriz quadrada mágica.");
            return false;
        }
    }
    
    //CHAMANDO A FUNCAO PASSANDO ALGUNS PARAMETROS
    matrizQuadradaMagica(2, 7, 6, 9, 5, 1, 4, 3, 8);
    matrizQuadradaMagica(2, 3, 4, 9, 3, 1, 1, 3, 3);
    matrizQuadradaMagica(1, 1, 1, 1, 1, 1, 1, 1, 1);
    matrizQuadradaMagica(1, 7, 1, 3, 1, 56, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 3);
    