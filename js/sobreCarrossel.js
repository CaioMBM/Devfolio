/* CARROSSEL - Experiência */
const expSetaDireita  = document.querySelectorAll(".carrosselSetas")[1];
const expSetaEsquerda = document.querySelectorAll(".carrosselSetas")[0];
const expContainerCarrossel = document.querySelector("#Experiencia section");
const expScrollMax = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;

// Mover para direita
function expCarrosselMoverDireita(){ 
    // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
    if (expContainerCarrossel.scrollLeft >= expScrollMax) {
        expContainerCarrossel.scrollLeft = 0;
    } 
    // Se não for o último card, será mostrado o card seguinte
    else {
        expContainerCarrossel.scrollLeft += 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
    }
}
expSetaDireita.addEventListener('click', expCarrosselMoverDireita);

// Mover para esquerda
function expCarrosselMoverEsquerda(){ 
    // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
    if (expContainerCarrossel.scrollLeft <= 0) {
        expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
    } 
    // Se não for o 1º card, será mostrado o card anterior
    else {
        expContainerCarrossel.scrollLeft -= 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
    }
}
expSetaEsquerda.addEventListener('click', expCarrosselMoverEsquerda);


/* CARROSSEL - Certificado e Formação */
const certSetaDireita  = document.querySelectorAll(".carrosselSetas")[3];
const certSetaEsquerda = document.querySelectorAll(".carrosselSetas")[2];
const certContainerCarrossel = document.querySelector("#certificados section");
const certScrollMax = certContainerCarrossel.scrollWidth - certContainerCarrossel.clientWidth;

// Mover para direita
function certCarrosselMoverDireita(){ 
    console.log("Mover direira")
    
    certContainerCarrossel.scrollLeft += 460; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
}
certSetaDireita.addEventListener('click', certCarrosselMoverDireita);

// Mover para esquerda
function certCarrosselMoverEsquerda(){ 
    console.log("Mover direira")
    
    certContainerCarrossel.scrollLeft -= 460; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
}
certSetaEsquerda.addEventListener('click', certCarrosselMoverEsquerda);