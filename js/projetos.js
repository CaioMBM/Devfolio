const camadaPreta = document.querySelector('.camadaPreta');

// Modal (Projeto Maior) - Recriando Site
const cardRecriandoSite  = document.querySelectorAll(".containerProjetos div")[0];
const modalRecriandoSite = document.querySelectorAll(".modalProjeto")[0];
const modalFechar        = document.querySelectorAll(".icon-x")[0];


// Abrir modal
function abrirRecriandoSite(){
    camadaPreta.style.visibility        = 'visible';
    camadaPreta.style.opacity           = 100;
    modalRecriandoSite.style.visibility = 'visible';
}
cardRecriandoSite.addEventListener("click", abrirRecriandoSite);

// Fechar modal
function fecharRecriandoSite(){
    camadaPreta.style.visibility        = 'hidden';
    camadaPreta.style.opacity           = 0;
    modalRecriandoSite.style.visibility = 'hidden';
}
modalFechar.addEventListener("click", fecharRecriandoSite);


// Modal (Projeto Maior) - Portifólio 1
const cardPortifolio     = document.querySelectorAll(".containerProjetos div")[1];
const modalPortifolio    = document.querySelectorAll(".modalProjeto")[1];
const esconderPortifolio = document.querySelectorAll(".icon-x")[1];

// Abrir modal
function abrirPortifolio(){
    camadaPreta.style.visibility     = 'visible';
    camadaPreta.style.opacity        = 100;
    modalPortifolio.style.visibility = 'visible';
}
cardPortifolio.addEventListener("click", abrirPortifolio);

// Fechar modal
function fecharPortifolio(){
    camadaPreta.style.visibility     = 'hidden';
    camadaPreta.style.opacity        = 0;
    modalPortifolio.style.visibility = 'hidden';
}
esconderPortifolio.addEventListener("click", fecharPortifolio);


// Modal (Projeto Maior) - FlexBLog
const cardFlexBLog     = document.querySelectorAll(".containerProjetos div")[2];
const modalFlexBLog    = document.querySelectorAll(".modalProjeto")[2];
const esconderFlexBLog = document.querySelectorAll(".icon-x")[2];

// Abrir modal
function abrirFlexBLog(){
    camadaPreta.style.visibility   = 'visible';
    camadaPreta.style.opacity      = 100;
    modalFlexBLog.style.visibility = 'visible';
}
cardFlexBLog.addEventListener("click", abrirFlexBLog);

// Fechar modal
function fecharFlexBLog(){
    camadaPreta.style.visibility   = 'hidden';
    camadaPreta.style.opacity      = 0;
    modalFlexBLog.style.visibility = 'hidden';
}
esconderFlexBLog.addEventListener("click", fecharFlexBLog);


// Modal (Projeto Maior) - Eduadro Brito (Freelance)
const cardEduadroBrito     = document.querySelectorAll(".containerProjetos div")[3];
const modalEduadroBrito    = document.querySelectorAll(".modalProjeto")[3];
const esconderEduadroBrito = document.querySelectorAll(".icon-x")[3];

// Abrir modal
function abrirEduadroBrito(){
    camadaPreta.style.visibility       = 'visible';
    camadaPreta.style.opacity          = 100;
    modalEduadroBrito.style.visibility = 'visible';
}
cardEduadroBrito.addEventListener("click", abrirEduadroBrito);

// Fechar modal
function fecharEduadroBrito(){
    camadaPreta.style.visibility       = 'hidden';
    camadaPreta.style.opacity          = 0;
    modalEduadroBrito.style.visibility = 'hidden';
}
esconderEduadroBrito.addEventListener("click", fecharEduadroBrito);


// Modal (Projeto Maior) - Prevent Elevadores (Freelance)
const cardPreventElevadores     = document.querySelectorAll(".containerProjetos div")[4];
const modalPreventElevadores    = document.querySelectorAll(".modalProjeto")[4];
const esconderPreventElevadores = document.querySelectorAll(".icon-x")[4];

// Abrir modal
function abrirPreventElevadores(){
    camadaPreta.style.visibility            = 'visible';
    camadaPreta.style.opacity               = 100;
    modalPreventElevadores.style.visibility = 'visible';
}
cardPreventElevadores.addEventListener("click", abrirPreventElevadores);

// Fechar modal
function fecharPreventElevadores(){
    camadaPreta.style.visibility            = 'hidden';
    camadaPreta.style.opacity               = 0;
    modalPreventElevadores.style.visibility = 'hidden';
}
esconderPreventElevadores.addEventListener("click", fecharPreventElevadores);