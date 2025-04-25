const btnAbrirMenu  = document.querySelectorAll(".icon-menuHeader")[0];
const btnFecharMenu = document.querySelectorAll(".icon-menuHeader")[1];
const navItens      = document.querySelector(".nav-containerItens")


// Abrir menu
function abrirMenu(){
    navItens.style.display      = 'block';
    btnFecharMenu.style.display = 'block';
    btnAbrirMenu.style.display  = 'none';
}
btnAbrirMenu.addEventListener("click", abrirMenu);

// Fechar menu
function fecharrMenu(){
    navItens.style.display      = 'none';
    btnFecharMenu.style.display = 'none';
    btnAbrirMenu.style.display  = 'block';
}
btnFecharMenu.addEventListener("click", fecharrMenu);