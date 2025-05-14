// Variáveis globais
const linhasVertical   = document.querySelectorAll(".linhaVertical");
const iconCertificado  = document.querySelectorAll(".icon-certificado");
const cardCertificados = document.querySelectorAll(".cardCertificados");

/* Media query */
const telaMin_1089 = window.matchMedia('(min-width: 1089px)');

// Formação - ADS
// Faz com que a altura da linha seja sempre 25px a mais que a altura do card respectivo
function ajustarLinhaADS() {
    const alturaADS     = cardCertificados[0].offsetHeight;
    const alturaIconADS = iconCertificado[0].offsetHeight;

    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[0].style.height = (alturaADS - alturaIconADS + 25 ) + 'px';
    }
}
// Garante que o JavaScript só vá medir e ajustar a altura depois que toda a página ser carregada
window.addEventListener('load', ajustarLinhaADS);
// Recalcula automaticamente sempre que a janela for redimensionada
window.addEventListener('resize', ajustarLinhaADS);

// Certificado - Conferência
function ajustarLinhaConferencia() {
    const alturaConferencia     = cardCertificados[1].offsetHeight;
    const alturaIconConferencia = iconCertificado[1].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[1].style.height = (alturaConferencia - alturaIconConferencia + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaConferencia);
window.addEventListener('resize', ajustarLinhaConferencia);

// Certificado - IA na Gestão
function ajustarLinhaIAGestao() {
    const alturaIAGestao     = cardCertificados[2].offsetHeight;
    const alturaIconIAGestao = iconCertificado[2].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[2].style.height = (alturaIAGestao - alturaIconIAGestao + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaIAGestao);
window.addEventListener('resize', ajustarLinhaIAGestao);

// Certificado - Flexbox
function ajustarLinhaFlexbox() {
    const alturaFlexbox     = cardCertificados[3].offsetHeight;
    const alturaIconFlexbox = iconCertificado[3].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[3].style.height = (alturaFlexbox - alturaIconFlexbox + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaFlexbox);
window.addEventListener('resize', ajustarLinhaFlexbox);

// Certificado - Excel
function ajustarLinhaExcel() {
    const alturaExcel     = cardCertificados[4].offsetHeight;
    const alturaIconExcel = iconCertificado[4].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[4].style.height = (alturaExcel - alturaIconExcel + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaExcel);
window.addEventListener('resize', ajustarLinhaExcel);

// Certificado - UX Unibra
function ajustarLinhaUX_Unibra() {
    const alturaUX_Unibra     = cardCertificados[5].offsetHeight;
    const alturaIconUX_Unibra = iconCertificado[5].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[5].style.height = (alturaUX_Unibra - alturaIconUX_Unibra + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaUX_Unibra);
window.addEventListener('resize', ajustarLinhaUX_Unibra);

// Certificado - UX Google
function ajustarLinhaUX_Google() {
    const alturaUX_Google     = cardCertificados[6].offsetHeight;
    const alturaIconUX_Google = iconCertificado[6].offsetHeight;
    
    // Quando o carrossel não aparece a Linha Vertical fica na vertical, quando aparece então fica na horizontal
    if(telaMin_1089.matches){
        linhasVertical[6].style.height = (alturaUX_Google - alturaIconUX_Google + 25 ) + 'px';
    }
}
window.addEventListener('load', ajustarLinhaUX_Google);
window.addEventListener('resize', ajustarLinhaUX_Google);


/* CARROSSEL */
const setaEsquerda = document.querySelectorAll(".carrosselSetas")[0];
const setaDireita  = document.querySelectorAll(".carrosselSetas")[1];
const cardExperiencia    = document.querySelectorAll(".cardExperiencia");
const containerCarrossel = document.querySelector("#Experiencia section");
const scrollMax = containerCarrossel.scrollWidth - containerCarrossel.clientWidth;


// Mover para direita
function carrosselMoverDireita(){ 
    // Se estiver no último card e então clicar para mover para direita, será mostrado o 1º card do carrossel
    if (containerCarrossel.scrollLeft >= scrollMax) {
        containerCarrossel.scrollLeft = 0;
    } 
    // Se não for o último card, será mostrado o card seguinte
    else {
        containerCarrossel.scrollLeft += 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
    }
}
setaDireita.addEventListener('click', carrosselMoverDireita);

// Mover para esquerda
function carrosselMoverEsquerda(){ 
    // Se estiver no 1º card e então clicar para mover para esquerda, será mostrado o último card do carrossel
    if (containerCarrossel.scrollLeft <= 0) {
        containerCarrossel.scrollLeft = containerCarrossel.scrollWidth - containerCarrossel.clientWidth;
    } 
    // Se não for o 1º card, será mostrado o card anterior
    else {
        containerCarrossel.scrollLeft -= 620; // Esse nº vem do width do card + gap entre os cards, então ele avançará um card
    }
}
setaEsquerda.addEventListener('click', carrosselMoverEsquerda);