// Media query
const tela_Max390px       = window.matchMedia("(max-width: 390px)");
const tela_Min390Max458px = window.matchMedia("(min-width: 390px) and (max-width: 458px)");
const tela_Min459Max598px = window.matchMedia("(min-width: 459px) and (max-width: 598px)");
const tela_Min599Max768px = window.matchMedia("(min-width: 599px) and (max-width: 768px)");


/* CARROSSEL - Experiência */
const expSetaDireita  = document.querySelectorAll(".carrosselSetas")[1];
const expSetaEsquerda = document.querySelectorAll(".carrosselSetas")[0];
const expContainerCarrossel = document.querySelector("#Experiencia section");
const expScrollMax = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;

// Mover para direita
function expCarrosselMoverDireita(){ 
    // Tela ... - 390px
    if(tela_Max390px.matches){
        if (expContainerCarrossel.scrollLeft >= expScrollMax) {
            expContainerCarrossel.scrollLeft = 0;
        } 
        else {
            expContainerCarrossel.scrollLeft += 340;
        }
    }
    // Tela 390px - 458px
    else if(tela_Min390Max458px.matches){
        if (expContainerCarrossel.scrollLeft >= expScrollMax) {
            expContainerCarrossel.scrollLeft = 0;
        } 
        else {
            expContainerCarrossel.scrollLeft += 380;
        }
    }
    // Tela 459px - 598px
    else if(tela_Min459Max598px.matches){
        if (expContainerCarrossel.scrollLeft >= expScrollMax) {
            expContainerCarrossel.scrollLeft = 0;
        } 
        else {
            expContainerCarrossel.scrollLeft += 420;
        }
    }
    // Tela 599px - 768px
    else if(tela_Min599Max768px.matches){
        if (expContainerCarrossel.scrollLeft >= expScrollMax) {
            expContainerCarrossel.scrollLeft = 0;
        } 
        else {
            expContainerCarrossel.scrollLeft += 510;
        }
    }
    // Valor padrão
    else{
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (expContainerCarrossel.scrollLeft >= expScrollMax) {
            expContainerCarrossel.scrollLeft = 0;
        } 
        // Se não for o último card, será mostrado o card seguinte
        else {
            expContainerCarrossel.scrollLeft += 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
        }
    }
}
expSetaDireita.addEventListener('click', expCarrosselMoverDireita);

// Mover para esquerda
function expCarrosselMoverEsquerda(){
    // Tela ... - 390px
    if(tela_Max390px.matches){
        if (expContainerCarrossel.scrollLeft <= 0) {
            expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
        } 
        else {
            expContainerCarrossel.scrollLeft -= 340;
        }
    }
    // Tela 390px - 458px
    else if(tela_Min390Max458px.matches){
        if (expContainerCarrossel.scrollLeft <= 0) {
            expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
        } 
        else {
            expContainerCarrossel.scrollLeft -= 380;
        }
    }
    // Tela 459px - 598px
    else if(tela_Min459Max598px.matches){
        if (expContainerCarrossel.scrollLeft <= 0) {
            expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
        } 
        else {
            expContainerCarrossel.scrollLeft -= 420;
        }
    }
    // Tela 599px - 768px
    else if(tela_Min599Max768px.matches){
        if (expContainerCarrossel.scrollLeft <= 0) {
            expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
        } 
        else {
            expContainerCarrossel.scrollLeft -= 510;
        }
    } 
    // Valor padrão
    else {

        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (expContainerCarrossel.scrollLeft <= 0) {
            expContainerCarrossel.scrollLeft = expContainerCarrossel.scrollWidth - expContainerCarrossel.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            expContainerCarrossel.scrollLeft -= 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
        }
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
    // Tela ... - 390px
    if(tela_Max390px.matches){
        if (certContainerCarrossel.scrollLeft >= certScrollMax) {
            certContainerCarrossel.scrollLeft = 0;
        } 
        else {
            certContainerCarrossel.scrollLeft += 330;
        }
    }
    // Tela 390px - 458px
    else if(tela_Min390Max458px.matches){
        if (certContainerCarrossel.scrollLeft >= certScrollMax) {
            certContainerCarrossel.scrollLeft = 0;
        } 
        else {
            certContainerCarrossel.scrollLeft += 360;
        }
    }
    // Tela 459px - 598px
    else if(tela_Min459Max598px.matches){
        if (certContainerCarrossel.scrollLeft >= certScrollMax) {
            certContainerCarrossel.scrollLeft = 0;
        } 
        else {
            certContainerCarrossel.scrollLeft += 430;
        }
    }
    // Tela 599px - 768px
    else if(tela_Min599Max768px.matches){
        if (certContainerCarrossel.scrollLeft >= certScrollMax) {
            certContainerCarrossel.scrollLeft = 0;
        } 
        else {
            certContainerCarrossel.scrollLeft += 460; 
        }
    }
    // Valor padrão
    else{
        // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
        if (certContainerCarrossel.scrollLeft >= certScrollMax) {
            certContainerCarrossel.scrollLeft = 0;
        }
        // Se não for o último card, será mostrado o card seguinte
        else {
            certContainerCarrossel.scrollLeft += 460; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
        }
    }
}
certSetaDireita.addEventListener('click', certCarrosselMoverDireita);

// Mover para esquerda
function certCarrosselMoverEsquerda(){
    // Tela ... - 390px
    if(tela_Max390px.matches){
        if (certContainerCarrossel.scrollLeft <= 0) {
            certContainerCarrossel.scrollLeft = certContainerCarrossel.scrollWidth - certContainerCarrossel.clientWidth;
        } 
        else {
            certContainerCarrossel.scrollLeft -= 330;
        }
    }
    // Tela 390px - 458px
    else if(tela_Min390Max458px.matches){
        if (certContainerCarrossel.scrollLeft <= 0) {
            certContainerCarrossel.scrollLeft = certContainerCarrossel.scrollWidth - certContainerCarrossel.clientWidth;
        } 
        else {
            certContainerCarrossel.scrollLeft -= 360;
        }
    }
    // Tela 459px - 598px
    else if(tela_Min459Max598px.matches){
        if (certContainerCarrossel.scrollLeft <= 0) {
            certContainerCarrossel.scrollLeft = certContainerCarrossel.scrollWidth - certContainerCarrossel.clientWidth;
        } 
        else {
            certContainerCarrossel.scrollLeft -= 430;
        }
    }
    // Valor padrão
    else{
        // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
        if (certContainerCarrossel.scrollLeft <= 0) {
            certContainerCarrossel.scrollLeft = certContainerCarrossel.scrollWidth - certContainerCarrossel.clientWidth;
        } 
        // Se não for o 1º card, será mostrado o card anterior
        else {
            certContainerCarrossel.scrollLeft -= 460; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
        }
    }
}
certSetaEsquerda.addEventListener('click', certCarrosselMoverEsquerda);