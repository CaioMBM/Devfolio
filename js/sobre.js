// Variáveis globais
const linhasVertical   = document.querySelectorAll(".linhaVertical");
const iconCertificado  = document.querySelectorAll(".icon-certificado");
const cardCertificados = document.querySelectorAll(".cardCertificados");

// Faz com que a altura da linha seja sempre 25px a mais que a altura do card respectivo
function ajustarLinhaADS() {
    const alturaADS     = cardCertificados[0].offsetHeight;
    const alturaIconADS = iconCertificado[0].offsetHeight;
    
    linhasVertical[0].style.height = (alturaADS - alturaIconADS + 25 ) + 'px';
}

// Garante que o JavaScript só vá medir e ajustar a altura depois que toda a página ser carregada
window.addEventListener('load', ajustarLinhaADS);
// Recalcula automaticamente sempre que a janela for redimensionada
window.addEventListener('resize', ajustarLinhaADS);
