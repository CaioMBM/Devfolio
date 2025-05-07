// Variável com a camada preta para PROJETOS MAIORES
const camadaPretaPMa = document.querySelectorAll('.camadaPreta')[0];


// Modal (Projeto Maiores) - Recriando Site
const cardRecriandoSite  = document.querySelectorAll(".containerProjetos div")[0];
const modalRecriandoSite = document.querySelectorAll(".modalProjeto")[0];
const modalFechar        = document.querySelectorAll(".icon-x")[0];

// Abrir modal
function abrirRecriandoSite(){
    camadaPretaPMa.style.visibility = 'visible';
    camadaPretaPMa.style.opacity    = 100;
    modalRecriandoSite.style.visibility   = 'visible';
}
cardRecriandoSite.addEventListener("click", abrirRecriandoSite);

// Fechar modal
function fecharRecriandoSite(){
    camadaPretaPMa.style.visibility = 'hidden';
    camadaPretaPMa.style.opacity    = 0;
    modalRecriandoSite.style.visibility  = 'hidden';
}
modalFechar.addEventListener("click", fecharRecriandoSite);


// Modal (Projeto Maiores) - Portifólio 1
const cardPortifolio     = document.querySelectorAll(".containerProjetos div")[1];
const modalPortifolio    = document.querySelectorAll(".modalProjeto")[1];
const esconderPortifolio = document.querySelectorAll(".icon-x")[1];

// Abrir modal
function abrirPortifolio(){
    camadaPretaPMa.style.visibility = 'visible';
    camadaPretaPMa.style.opacity    = 100;
    modalPortifolio.style.visibility      = 'visible';
}
cardPortifolio.addEventListener("click", abrirPortifolio);

// Fechar modal
function fecharPortifolio(){
    camadaPretaPMa.style.visibility = 'hidden';
    camadaPretaPMa.style.opacity    = 0;
    modalPortifolio.style.visibility      = 'hidden';
}
esconderPortifolio.addEventListener("click", fecharPortifolio);


// Modal (Projeto Maiores) - FlexBLog
const cardFlexBLog     = document.querySelectorAll(".containerProjetos div")[2];
const modalFlexBLog    = document.querySelectorAll(".modalProjeto")[2];
const esconderFlexBLog = document.querySelectorAll(".icon-x")[2];

// Abrir modal
function abrirFlexBLog(){
    camadaPretaPMa.style.visibility = 'visible';
    camadaPretaPMa.style.opacity    = 100;
    modalFlexBLog.style.visibility        = 'visible';
}
cardFlexBLog.addEventListener("click", abrirFlexBLog);

// Fechar modal
function fecharFlexBLog(){
    camadaPretaPMa.style.visibility = 'hidden';
    camadaPretaPMa.style.opacity    = 0;
    modalFlexBLog.style.visibility        = 'hidden';
}
esconderFlexBLog.addEventListener("click", fecharFlexBLog);


// Modal (Projeto Maiores) - Eduadro Brito (Freelance)
const cardEduadroBrito     = document.querySelectorAll(".containerProjetos div")[3];
const modalEduadroBrito    = document.querySelectorAll(".modalProjeto")[3];
const esconderEduadroBrito = document.querySelectorAll(".icon-x")[3];

// Abrir modal
function abrirEduadroBrito(){
    camadaPretaPMa.style.visibility = 'visible';
    camadaPretaPMa.style.opacity    = 100;
    modalEduadroBrito.style.visibility    = 'visible';
}
cardEduadroBrito.addEventListener("click", abrirEduadroBrito);

// Fechar modal
function fecharEduadroBrito(){
    camadaPretaPMa.style.visibility = 'hidden';
    camadaPretaPMa.style.opacity    = 0;
    modalEduadroBrito.style.visibility    = 'hidden';
}
esconderEduadroBrito.addEventListener("click", fecharEduadroBrito);


// Modal (Projeto Maiores) - Prevent Elevadores (Freelance)
const cardPreventElevadores     = document.querySelectorAll(".containerProjetos div")[4];
const modalPreventElevadores    = document.querySelectorAll(".modalProjeto")[4];
const esconderPreventElevadores = document.querySelectorAll(".icon-x")[4];

// Abrir modal
function abrirPreventElevadores(){
    camadaPretaPMa.style.visibility   = 'visible';
    camadaPretaPMa.style.opacity      = 100;
    modalPreventElevadores.style.visibility = 'visible';
}
cardPreventElevadores.addEventListener("click", abrirPreventElevadores);

// Fechar modal
function fecharPreventElevadores(){
    camadaPretaPMa.style.visibility   = 'hidden';
    camadaPretaPMa.style.opacity      = 0;
    modalPreventElevadores.style.visibility = 'hidden';
}
esconderPreventElevadores.addEventListener("click", fecharPreventElevadores);


// Variável com a camada preta para PROJETOS MAIORES
const camadaPretaMenor = document.querySelectorAll('.camadaPreta')[1];


// Modal (Projeto Menores) - Tela de Login
const cardTelaDeLogin     = document.querySelectorAll(".containerProjetos div")[5];
const modalTelaDeLogin    = document.querySelectorAll(".modalProjeto")[5];
const esconderTelaDeLogin = document.querySelectorAll(".icon-x")[5];

// Abrir modal
function abrirTelaDeLogin(){
    camadaPretaMenor.style.visibility = 'visible';
    camadaPretaMenor.style.opacity    = 100;
    modalTelaDeLogin.style.visibility = 'visible';
}
cardTelaDeLogin.addEventListener("click", abrirTelaDeLogin);

// Fechar modal
function fecharTelaDeLogin(){
    camadaPretaMenor.style.visibility = 'hidden';
    camadaPretaMenor.style.opacity    = 0;
    modalTelaDeLogin.style.visibility = 'hidden';
}
esconderTelaDeLogin.addEventListener("click", fecharTelaDeLogin);


// Modal (Projeto Menores) - Sobre Mim
const cardSobreMim     = document.querySelectorAll(".containerProjetos div")[6];
const modalSobreMim    = document.querySelectorAll(".modalProjeto")[6];
const esconderSobreMim = document.querySelectorAll(".icon-x")[6];

// Abrir modal
function abrirSobreMim(){
    camadaPretaMenor.style.visibility = 'visible';
    camadaPretaMenor.style.opacity    = 100;
    modalSobreMim.style.visibility    = 'visible';
}
cardSobreMim.addEventListener("click", abrirSobreMim);

// Fechar modal
function fecharSobreMim(){
    camadaPretaMenor.style.visibility = 'hidden';
    camadaPretaMenor.style.opacity    = 0;
    modalSobreMim.style.visibility    = 'hidden';
}
esconderSobreMim.addEventListener("click", fecharSobreMim);


// Modal (Projeto Menores) - Calculadora de IMC
const cardCalculadoraIMC     = document.querySelectorAll(".containerProjetos div")[7];
const modalCalculadoraIMC    = document.querySelectorAll(".modalProjeto")[7];
const esconderCalculadoraIMC = document.querySelectorAll(".icon-x")[7];

// Abrir modal
function abrirCalculadoraIMC(){
    camadaPretaMenor.style.visibility    = 'visible';
    camadaPretaMenor.style.opacity       = 100;
    modalCalculadoraIMC.style.visibility = 'visible';
}
cardCalculadoraIMC.addEventListener("click", abrirCalculadoraIMC);

// Fechar modal
function fecharCalculadoraIMC(){
    camadaPretaMenor.style.visibility    = 'hidden';
    camadaPretaMenor.style.opacity       = 0;
    modalCalculadoraIMC.style.visibility = 'hidden';
}
esconderCalculadoraIMC.addEventListener("click", fecharCalculadoraIMC);


// Modal (Projeto Menores) - Conversor de Moedas
const cardConversorMoedas     = document.querySelectorAll(".containerProjetos div")[8];
const modalConversorMoedas    = document.querySelectorAll(".modalProjeto")[8];
const esconderConversorMoedas = document.querySelectorAll(".icon-x")[8];

// Abrir modal
function abrirConversorMoedas(){
    camadaPretaMenor.style.visibility     = 'visible';
    camadaPretaMenor.style.opacity        = 100;
    modalConversorMoedas.style.visibility = 'visible';
}
cardConversorMoedas.addEventListener("click", abrirConversorMoedas);

// Fechar modal
function fecharConversorMoedas(){
    camadaPretaMenor.style.visibility     = 'hidden';
    camadaPretaMenor.style.opacity        = 0;
    modalConversorMoedas.style.visibility = 'hidden';
}
esconderConversorMoedas.addEventListener("click", fecharConversorMoedas);


// Modal (Projeto Menores) - Card Review
const cardCardReview     = document.querySelectorAll(".containerProjetos div")[9];
const modalCardReview    = document.querySelectorAll(".modalProjeto")[9];
const esconderCardReview = document.querySelectorAll(".icon-x")[9];

// Abrir modal
function abrirCardReview(){
    camadaPretaMenor.style.visibility = 'visible';
    camadaPretaMenor.style.opacity    = 100;
    modalCardReview.style.visibility  = 'visible';
}
cardCardReview.addEventListener("click", abrirCardReview);

// Fechar modal
function fecharCardReview(){
    camadaPretaMenor.style.visibility = 'hidden';
    camadaPretaMenor.style.opacity    = 0;
    modalCardReview.style.visibility  = 'hidden';
}
esconderCardReview.addEventListener("click", fecharCardReview);


// Modal (Projeto Menores) - Hora do Dia
const cardHoraDia     = document.querySelectorAll(".containerProjetos div")[10];
const modalHoraDia    = document.querySelectorAll(".modalProjeto")[10];
const esconderHoraDia = document.querySelectorAll(".icon-x")[10];

// Abrir modal
function abrirHoraDia(){
    camadaPretaMenor.style.visibility = 'visible';
    camadaPretaMenor.style.opacity    = 100;
    modalHoraDia.style.visibility     = 'visible';
}
cardHoraDia.addEventListener("click", abrirHoraDia);

// Fechar modal
function fecharHoraDia(){
    camadaPretaMenor.style.visibility = 'hidden';
    camadaPretaMenor.style.opacity    = 0;
    modalHoraDia.style.visibility     = 'hidden';
}
esconderHoraDia.addEventListener("click", fecharHoraDia);


// Modal (Projeto Menores) - Calcular Idade
const cardCalcularIdade     = document.querySelectorAll(".containerProjetos div")[11];
const modalCalcularIdade    = document.querySelectorAll(".modalProjeto")[11];
const esconderCalcularIdade = document.querySelectorAll(".icon-x")[11];

// Abrir modal
function abrirCalcularIdade(){
    camadaPretaMenor.style.visibility   = 'visible';
    camadaPretaMenor.style.opacity      = 100;
    modalCalcularIdade.style.visibility = 'visible';
}
cardCalcularIdade.addEventListener("click", abrirCalcularIdade);

// Fechar modal
function fecharCalcularIdade(){
    camadaPretaMenor.style.visibility   = 'hidden';
    camadaPretaMenor.style.opacity      = 0;
    modalCalcularIdade.style.visibility = 'hidden';
}
esconderCalcularIdade.addEventListener("click", fecharCalcularIdade);



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
const PMaSetaEsquerda = document.querySelectorAll(".setas")[0];
const PMaSetaDireita  = document.querySelectorAll(".setas")[1];
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
const PMeSetaEsquerda = document.querySelectorAll(".setas")[2];
const PMeSetaDireita  = document.querySelectorAll(".setas")[3];
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