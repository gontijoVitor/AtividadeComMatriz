const prompt = require ("prompt-sync")({sigint: true});
//função para criar matriz
function criarMatriz(){
    const matriz = new Array(5);
    matriz[0] = new Array(5);
    matriz[1] = new Array(5);
    matriz[2] = new Array(5);
    matriz[3] = new Array(5);
    matriz[4] = new Array(5);

    let contador = 0;
    for(let lin = 0; lin<5; lin++){
        for(let col = 0; col<5; col++){
            contador+=1;
            matriz[lin][col] = Number(prompt("Digite o " + String(contador)+"º número: "))
        }
    }

    console.log(matriz)//retornar matriz com seus número. A soma é feita à seguir
    return matriz
}

function lerArea(matriz){
    let soma = 0
    for(let lin = 0; lin<5; lin++){
        for(let col = 0; col<5; col++){
            if((lin==1) && (col==0)){
                soma += matriz[lin][col];

            }else if ((lin==2) && ((col==0)||(col==1))){  
                soma += matriz[lin][col];

            }else if ((lin==3) && (col==0)){
                soma += matriz[lin][col];

            } else{
                matriz[lin][col]='';
            }  
            
        }
    }
    console.log(matriz);
    console.log("Soma: " + soma);
}

function main(){
    let matriz = criarMatriz();
    lerArea(matriz);
}

main()