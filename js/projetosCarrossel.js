/* CARROSSEL */
// Significados:
/*
- PMe -> Projetos Menores
- PMa -> Projetos Maiores
*/

// Media query: 
/*
- Até 389px
- Entre 390px e 458px
*/
const telaMuitoPequena = window.matchMedia('(max-width: 398px)');
const telaPequena      = window.matchMedia('(min-width: 390px) and (max-width: 458px)');

// Projetos Maiores 
const PMaSetaEsquerda = document.querySelectorAll(".carrosselSetas")[0];
const PMaSetaDireita  = document.querySelectorAll(".carrosselSetas")[1];
const PMaContainer    = document.querySelectorAll(".containerProjetos")[0];


// Mover para direita
function carrosselPMaMoverDireita(){
    const scrollMax = PMaContainer.scrollWidth - PMaContainer.clientWidth;

    // Telas com width de até 398px
    if (telaMuitoPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMaContainer.scrollLeft >= scrollMax) {
            PMaContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMaContainer.scrollLeft += 340; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    } 
    // Telas com width entre 398px e 458px
    else if(telaPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMaContainer.scrollLeft >= scrollMax) {
            PMaContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMaContainer.scrollLeft += 360; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width superior a 398px
    else{
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMaContainer.scrollLeft >= scrollMax) {
            PMaContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMaContainer.scrollLeft += 440; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
}
PMaSetaDireita.addEventListener('click', carrosselPMaMoverDireita);

// Mover para esquerda
function carrosselPMaMoverEsquerda(){

    // Telas com width de até 458px
    if (telaMuitoPequena.matches){
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMaContainer.scrollLeft <= 0) {
            PMaContainer.scrollLeft = PMaContainer.scrollWidth - PMaContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMaContainer.scrollLeft -= 340; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width entre 398px e 458px
    else if(telaPequena.matches){
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMaContainer.scrollLeft <= 0) {
            PMaContainer.scrollLeft = PMaContainer.scrollWidth - PMaContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMaContainer.scrollLeft -= 360; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width superior a 458px
    else{
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMaContainer.scrollLeft <= 0) {
            PMaContainer.scrollLeft = PMaContainer.scrollWidth - PMaContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMaContainer.scrollLeft -= 440; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
}
PMaSetaEsquerda.addEventListener('click', carrosselPMaMoverEsquerda);


// Projetos Menores
const PMeSetaEsquerda = document.querySelectorAll(".carrosselSetas")[2];
const PMeSetaDireita  = document.querySelectorAll(".carrosselSetas")[3];
const PMeContainer    = document.querySelectorAll(".containerProjetos")[1];

// Mover para direita
function carrosselPMEMoverDireita(){
    const scrollMax = PMeContainer.scrollWidth - PMeContainer.clientWidth;

    // Telas com width de até 398px
    if (telaMuitoPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMeContainer.scrollLeft >= scrollMax) {
            PMeContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMeContainer.scrollLeft += 340; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    } 
    // Telas com width entre 398px e 458px
    else if(telaPequena.matches){
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMeContainer.scrollLeft >= scrollMax) {
            PMeContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMeContainer.scrollLeft += 360; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width superior a 398px
    else{
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (PMeContainer.scrollLeft >= scrollMax) {
            PMeContainer.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            PMeContainer.scrollLeft += 440; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
}
PMeSetaDireita.addEventListener('click', carrosselPMEMoverDireita);

// Mover para esquerda
function carrosselPMEMoverEsquerda(){

    // Telas com width de até 458px
    if (telaMuitoPequena.matches){
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMeContainer.scrollLeft <= 0) {
            PMeContainer.scrollLeft = PMeContainer.scrollWidth - PMeContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMeContainer.scrollLeft -= 340; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width entre 398px e 458px
    else if(telaPequena.matches){
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMeContainer.scrollLeft <= 0) {
            PMeContainer.scrollLeft = PMeContainer.scrollWidth - PMeContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMeContainer.scrollLeft -= 360; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
    // Telas com width superior a 458px
    else{
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (PMeContainer.scrollLeft <= 0) {
            PMeContainer.scrollLeft = PMeContainer.scrollWidth - PMeContainer.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            PMeContainer.scrollLeft -= 440; // Esse nº vem do width da img + gap entre as img, então ele avançará um card
        }
    }
}
PMeSetaEsquerda.addEventListener('click', carrosselPMEMoverEsquerda);