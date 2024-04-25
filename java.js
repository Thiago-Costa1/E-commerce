function mostrarPergunta(id)
 {
    var resposta = document.getElementById(id);
    resposta.style.display = "block";
}

function esconderPergunta(id)
{
    var resposta = document.getElementById(id);
    resposta.style.display = "none";

}

const carrossel = document.querySelector('.section-opiniao');
const cards = document.querySelectorAll('.master');
const numCards = cards.length; // Obtém o número total de cards
const cardWidth = cards[0].offsetWidth; // Obtém a largura do primeiro card
const maxWidth = carrossel.offsetWidth; // Obtém a largura do carrossel
let deslocamentoAtual = maxWidth; // Define a posição inicial do deslocamento como a largura total do carrossel, começando do lado direito da tela

function moverCarrossel()
{
    deslocamentoAtual -= 1; // Reduz o deslocamento atual em 1 unidade a cada chamada da função, movendo o carrossel para a esquerda
    if (deslocamentoAtual < -cardWidth * numCards) // Verifica se o deslocamento atual ultrapassou a largura total dos cards
    {
        deslocamentoAtual = maxWidth; // Reinicia do lado direito da tela
    }
    carrossel.style.transform = `translateX(${deslocamentoAtual}px)`; // Aplica a transformação CSS para mover o carrossel horizontalmente
    requestAnimationFrame(moverCarrossel); // Solicita ao navegador que chame novamente a função moverCarrossel na próxima animação disponível
}

requestAnimationFrame(moverCarrossel); // Inicia o ciclo de animação chamando a função moverCarrossel pela primeira vez

