// Variável com a camada preta para PROJETOS MAIORES
const camadaPretaProjMaior = document.querySelectorAll('.camadaPreta')[0];


// Modal (Projeto Maiores) - Recriando Site
const cardRecriandoSite  = document.querySelectorAll(".containerProjetos div")[0];
const modalRecriandoSite = document.querySelectorAll(".modalProjeto")[0];
const modalFechar        = document.querySelectorAll(".icon-x")[0];

// Abrir modal
function abrirRecriandoSite(){
    camadaPretaProjMaior.style.visibility = 'visible';
    camadaPretaProjMaior.style.opacity    = 100;
    modalRecriandoSite.style.visibility   = 'visible';
}
cardRecriandoSite.addEventListener("click", abrirRecriandoSite);

// Fechar modal
function fecharRecriandoSite(){
    camadaPretaProjMaior.style.visibility = 'hidden';
    camadaPretaProjMaior.style.opacity    = 0;
    modalRecriandoSite.style.visibility  = 'hidden';
}
modalFechar.addEventListener("click", fecharRecriandoSite);


// Modal (Projeto Maiores) - Portifólio 1
const cardPortifolio     = document.querySelectorAll(".containerProjetos div")[1];
const modalPortifolio    = document.querySelectorAll(".modalProjeto")[1];
const esconderPortifolio = document.querySelectorAll(".icon-x")[1];

// Abrir modal
function abrirPortifolio(){
    camadaPretaProjMaior.style.visibility = 'visible';
    camadaPretaProjMaior.style.opacity    = 100;
    modalPortifolio.style.visibility      = 'visible';
}
cardPortifolio.addEventListener("click", abrirPortifolio);

// Fechar modal
function fecharPortifolio(){
    camadaPretaProjMaior.style.visibility = 'hidden';
    camadaPretaProjMaior.style.opacity    = 0;
    modalPortifolio.style.visibility      = 'hidden';
}
esconderPortifolio.addEventListener("click", fecharPortifolio);


// Modal (Projeto Maiores) - FlexBLog
const cardFlexBLog     = document.querySelectorAll(".containerProjetos div")[2];
const modalFlexBLog    = document.querySelectorAll(".modalProjeto")[2];
const esconderFlexBLog = document.querySelectorAll(".icon-x")[2];

// Abrir modal
function abrirFlexBLog(){
    camadaPretaProjMaior.style.visibility = 'visible';
    camadaPretaProjMaior.style.opacity    = 100;
    modalFlexBLog.style.visibility        = 'visible';
}
cardFlexBLog.addEventListener("click", abrirFlexBLog);

// Fechar modal
function fecharFlexBLog(){
    camadaPretaProjMaior.style.visibility = 'hidden';
    camadaPretaProjMaior.style.opacity    = 0;
    modalFlexBLog.style.visibility        = 'hidden';
}
esconderFlexBLog.addEventListener("click", fecharFlexBLog);


// Modal (Projeto Maiores) - Eduadro Brito (Freelance)
const cardEduadroBrito     = document.querySelectorAll(".containerProjetos div")[3];
const modalEduadroBrito    = document.querySelectorAll(".modalProjeto")[3];
const esconderEduadroBrito = document.querySelectorAll(".icon-x")[3];

// Abrir modal
function abrirEduadroBrito(){
    camadaPretaProjMaior.style.visibility = 'visible';
    camadaPretaProjMaior.style.opacity    = 100;
    modalEduadroBrito.style.visibility    = 'visible';
}
cardEduadroBrito.addEventListener("click", abrirEduadroBrito);

// Fechar modal
function fecharEduadroBrito(){
    camadaPretaProjMaior.style.visibility = 'hidden';
    camadaPretaProjMaior.style.opacity    = 0;
    modalEduadroBrito.style.visibility    = 'hidden';
}
esconderEduadroBrito.addEventListener("click", fecharEduadroBrito);


// Modal (Projeto Maiores) - Prevent Elevadores (Freelance)
const cardPreventElevadores     = document.querySelectorAll(".containerProjetos div")[4];
const modalPreventElevadores    = document.querySelectorAll(".modalProjeto")[4];
const esconderPreventElevadores = document.querySelectorAll(".icon-x")[4];

// Abrir modal
function abrirPreventElevadores(){
    camadaPretaProjMaior.style.visibility   = 'visible';
    camadaPretaProjMaior.style.opacity      = 100;
    modalPreventElevadores.style.visibility = 'visible';
}
cardPreventElevadores.addEventListener("click", abrirPreventElevadores);

// Fechar modal
function fecharPreventElevadores(){
    camadaPretaProjMaior.style.visibility   = 'hidden';
    camadaPretaProjMaior.style.opacity      = 0;
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