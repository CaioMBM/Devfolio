// Modal (Projeto Maior) - Recriando Site
const cardRecriandoSite  = document.querySelectorAll(".containerProjetos div")[0];
const modalRecriandoSite = document.querySelectorAll(".modalProjeto")[0];
const modalFechar        = document.querySelectorAll(".icon-x")[0];
const camadaPreta        = document.querySelector('.camadaPreta');


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