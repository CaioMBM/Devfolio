// Modal (Projeto Maior) - Recriando Site
const cardRecriandoSite  = document.querySelectorAll(".containerProjetos div")[0];
const modalRecriandoSite = document.querySelectorAll(".modalProjeto")[0];
const modalFechar        = document.querySelectorAll(".icon-x")[0];
const camadaPreta        = document.querySelectorAll('.camadaPreta')[0];


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