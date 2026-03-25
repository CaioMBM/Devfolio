// Variável com a camada preta de fundo
const camadaPretaPMa = document.querySelector('.camadaPreta');


/* MODAL */
// Modal - Recriando Site
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


// Modal - FlexBLog
const cardFlexBLog     = document.querySelectorAll(".containerProjetos div")[1];
const modalFlexBLog    = document.querySelectorAll(".modalProjeto")[1];
const esconderFlexBLog = document.querySelectorAll(".icon-x")[1];

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


// Modal - Eduadro Brito (Freelance)
const cardEduadroBrito     = document.querySelectorAll(".containerProjetos div")[2];
const modalEduadroBrito    = document.querySelectorAll(".modalProjeto")[2];
const esconderEduadroBrito = document.querySelectorAll(".icon-x")[2];

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


// Modal - Prevent Elevadores (Freelance)
const cardPreventElevadores     = document.querySelectorAll(".containerProjetos div")[3];
const modalPreventElevadores    = document.querySelectorAll(".modalProjeto")[3];
const esconderPreventElevadores = document.querySelectorAll(".icon-x")[3];

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