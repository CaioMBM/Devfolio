// Variáveis globais
const linhasVertical   = document.querySelectorAll(".linhaVertical");
const iconCertificado  = document.querySelectorAll(".icon-certificado");
const cardCertificados = document.querySelectorAll(".cardCertificados");

/* Media query */
const telaMin_1089 = window.matchMedia('(min-width: 1089px)');


// Função para que a linha vertical ultrapasse a parte inferior do card
function ajustarLinhaVertical() {
    // Ajusta a altura da linha vertical de acordo com a altura do card respectivo
    for (let c = 0; c < linhasVertical.length; c++) {
        const alturaCard = cardCertificados[c].offsetHeight;
        const alturaIcon = iconCertificado[c].offsetHeight;

        // Especificado para telas com ou mais de 1089px de largura, pois abaixo disso a linha vertical se torna uma linha horizontal (no carrossel)
        if(telaMin_1089.matches){ 
            linhasVertical[c].style.height = (alturaCard - alturaIcon + 25 ) + 'px'; }
    }
}

// Garante que o JavaScript só vá medir e ajustar a altura depois que toda a página ser carregada
window.addEventListener('load', ajustarLinhaVertical);
// Recalcula automaticamente sempre que a janela for redimensionada
window.addEventListener('resize', ajustarLinhaVertical);