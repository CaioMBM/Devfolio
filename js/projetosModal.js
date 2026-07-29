// Variável com a camada preta de fundo
const camadaPretaPMa = document.querySelector('.camadaPreta');


/* MODAL */
const cardProjeto  = document.querySelectorAll(".containerProjetos div");  // nodelist com todos os cards
const modalProjeto = document.querySelectorAll(".modalProjeto");           // nodelist com todos os modais
const modalIconFechar    = document.querySelectorAll(".icon-x");           // nodelist com todos os ícones de fechar modal


// Loop para a pegar o índice do elemento clicado e sofrer ação no elemento respectivo, ou seja, se clicar no primeiro card, ent será aberto o primeiro modal.
for (let c = 0; c < cardProjeto.length; c++){
    // Abrir modal
    function abrirModal(){
        camadaPretaPMa.style.visibility = 'visible';
        camadaPretaPMa.style.opacity    = 100;
        modalProjeto[c].style.visibility = 'visible';
    }

    // Fechar modal
    function fecharModal(){
        camadaPretaPMa.style.visibility = '';
        camadaPretaPMa.style.opacity    = 0;
        modalProjeto[c].style.visibility = 'hidden';
    }

    cardProjeto[c].addEventListener('click', abrirModal);
    modalIconFechar[c].addEventListener('click', fecharModal);
}