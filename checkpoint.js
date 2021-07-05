// Programacao imperativa 28/06/2021
//prova**
let microondas = {
    'Pipoca': 10,
    'Macarrao': 8 ,
    'Carne': 15 , 
    'Feijao': 12 ,
    'Brigadeiro': 8
}
function comparar (tempoPadrao, tempo) {     
    if (tempo < tempoPadrao) {
        console.log("Tempo insuficiente");
    }
    else if (tempo> (2*tempoPadrao)) {
        console.log("A comida queimou");
    }
    else if (tempo>=(3*tempoPadrao)) {
        console.log("Kabumm");
    }
    else (tempo == (tempoPadrao)) 
        console.log("Prato pronto, bom apetite!!!");
    }
   
function menu (prato, tempo,tempoPadrao) { 
    switch (prato){
        case 'Pipoca':
            tempoPadrao = 10;
            comparar(tempoPadrao, tempo);
            break;
        case 'Macarrao':
            tempoPadrao = 8;
            comparar(tempoPadrao, tempo);
            break;
        case 'Carne':
            tempoPadrao = 15;
            comparar(tempoPadrao, tempo);
            break;
        case 'Feijao':
            tempoPadrao = 12;  
            comparar(tempoPadrao, tempo);
            break;
        case 'Brigadeiro':
            tempoPadrao = 8;
            comparar(tempoPadrao, tempo);
            break;
        default:
            console.log("Prato inexistente");           
    }
}
console.log('\n Pipoca');
 menu('Pipoca', 10);
 menu('Pipoca', 20);
 menu('Pipoca', 30)

console.log('\n Macarrao')
 menu('Macarrao', 8);
 menu('Macarrao', 16);
 menu('Macarrao', 24);

console.log('\n Carne')
 menu('Carne', 15);
 menu('Carne', 30);
 menu('Carne', 45);

console.log('\n Feijao')
 menu('Feijao', 12);
 menu('Feijao', 24);
 menu('Feijao', 36);

console.log('\n Brigadeiro')
 menu('Brigadeiro', 8);
 menu('Brigadeiro', 16);
 menu('Brigadeiro', 24);