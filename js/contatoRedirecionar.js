const btnVoltar = document.querySelector("#btn-voltar")

/* Leva o usuário para contato.html */
function redirecionar(){
    window.open('../pages/contato.html', '_self')
}
btnVoltar.addEventListener("click", redirecionar);