// controla rolagem da página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetID = this.getAttribute('href');
        if (targetID && targetID !== "#") {
            const target = document.querySelector(targetID);
            if (target) {
                const offset = target.offsetTop - (window.innerHeight - target.offsetHeight) / 2;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// redireciona a barra de pesquisa
function redirecionar() {
    const query = document.getElementById('inp_pesquisar').value.toLowerCase();
    if (query === "") {
        alert("Por favor, digite o modelo do notebook que deseja buscar.");
    } else {
        window.location.href = `pesquisa.html?query=${query}`;
    }
}

// alternar para as opcoes de login
document.addEventListener('DOMContentLoaded', () => {
    const iconeLogin = document.getElementById('icone_login');
    const optionsBox = document.getElementById('options-box');

    iconeLogin.addEventListener('click', (event) => {
        event.preventDefault();
        optionsBox.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!iconeLogin.contains(event.target) && !optionsBox.contains(event.target)) {
            optionsBox.classList.add('hidden');
        }
    });
});

// Carrossel
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;
    if (cont > 3) 
    cont = 1;

    document.getElementById('radio' + cont).checked = true;
}
// Fim do carrossel



// função de formatadar a máscara do número de telefone  e do horário, além de exibir e esconder os modais

document.getElementById('txtTelefone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

document.getElementById('txtHora').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 3) {
        value = value.substring(0, 2) + ':' + value.substring(2, 4);
    }
    e.target.value = value;
});

function exibirModal() {
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
    modal.style.display = 'block';
    fundoEscuro.style.display = 'block';
}

function fecharModal(event) {
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
    event.preventDefault();
    if (event.target.classList.contains('fechar_modal')) {
        modal.style.display = 'none';
        fundoEscuro.style.display = 'none';
    }
}

function exibirModal2() {
    var modal2 = document.querySelector('.container_modal2');
    var fundoEscuro2 = document.getElementById('fundo_escuro2');
    modal2.style.display = 'block';
    fundoEscuro2.style.display = 'block';
}

function fecharModal2(event) {
    var modal2 = document.querySelector('.container_modal2');
    var fundoEscuro2 = document.getElementById('fundo_escuro2');
    event.preventDefault();
    if (event.target.classList.contains('fechar_modal')) {
        modal2.style.display = 'none';
        fundoEscuro2.style.display = 'none';
    }
}

// Contador dos cards
var timers = document.querySelectorAll('.countdown-timer');
var deadlines = [
    new Date("August 31, 2024 23:59:59").getTime(),
    new Date("August 23, 2024 23:59:59").getTime(),
    new Date("August 20, 2024 23:59:59").getTime(),
];

timers.forEach(function (timer, index) {
    var deadline = deadlines[index];
    if (!isNaN(deadline)) {
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = deadline - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

            if (distance < 0) {
                clearInterval(x);
                timer.innerHTML = "EXPIRADO";
            }
        }, 1000);
    }
});

// FAQ alternador
function isMobile() {
    return window.innerWidth <= 768; // largura que considero como mobile
}

function mostrarPergunta(id) {
    if (!isMobile()) {
        var resposta = document.getElementById(id);
        resposta.style.display = "block";
    }
}

function esconderPergunta(id) {
    if (!isMobile()) {
        var resposta = document.getElementById(id);
        resposta.style.display = "none";
    }
}

function togglePergunta(id) {
    if (isMobile()) {
        var resposta = document.getElementById(id);
        if (resposta.style.display === "block" || resposta.style.display === "") {
            resposta.style.display = "none";
        } else {
            resposta.style.display = "block";
        }
    }
}

// Adiciona um listener para ajustar quando a tela for redimensionada
window.addEventListener('resize', function() {
    var respostas = document.querySelectorAll('.resposta');
    respostas.forEach(function(resposta) {
        if (isMobile()) {
            resposta.style.display = "none"; // Oculta todas as respostas no mobile por padrão
        } else {
            resposta.style.display = ""; // Reseta o estilo no desktop para depender do mouseover/mouseout
        }
    });
});
// Navbar para o mobile
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
}


function showDropdown() {
    const dropdownContainer = document.querySelector('.services .drop-down-container');
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) { // Verifica se a tela é grande
        dropdownContainer.style.display = 'flex';
    }
}

function hideDropdown() {
    const dropdownContainer = document.querySelector('.services .drop-down-container');
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) { // Verifica se a tela é grande
        dropdownContainer.style.display = 'none';
    }
}

function toggleDropdown(event) {
    event.preventDefault(); // Prevenir comportamento padrão do link
    const dropdownContainer = document.querySelector('.services .drop-down-container');
    const dropdownIcon = document.querySelector('.services .dropdown-icon');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) { // Verifica se a tela é pequena
        const isVisible = dropdownContainer.style.display === 'block';
        dropdownContainer.style.display = isVisible ? 'none' : 'block';

        // Alterna a rotação do ícone
        if (isVisible) {
            dropdownIcon.style.transform = 'rotate(0deg)';
        } else {
            dropdownIcon.style.transform = 'rotate(180deg)';
        }
    }
}

document.querySelector('.nav-link.services a').addEventListener('click', toggleDropdown);

// lógica para obrigar o usuário a digitar o número e digitar um horário
function enviarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    var telefone = document.getElementById("txtTelefone").value;
    var hora = document.getElementById("txtHora").value;
    
    if (telefone.trim() === "" && hora.trim() === "") {
        alert("Por favor, digite o seu número de telefone e escolha um horário.");
    } else if (telefone.trim() === "") {
        alert("Por favor, digite o seu número de telefone.");
    } else if (hora.trim() === "") {
        alert("Por favor, escolha um horário.");
    } else {
        alert("Enviado com sucesso, logo entraremos em contato com você, aguarde!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao_enviar").onclick = enviarFormulario;
});

// fim lógica para obrigar o usuário a digitar o número e digitar um horário

// lógica do modal 'suporte' //

function enviarFormulario2(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    var nome = document.getElementById("modal_nome").value;
    var email = document.getElementById("modal_email").value;
    var assunto = document.getElementById("modal_assunto").value;
    var mensagem = document.getElementById("txtArea").value;
    
    if (nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Enviado com sucesso, logo entraremos em contato com você, aguarde!");
        
        // Limpar os campos do formulário
        document.getElementById("modal_nome").value = "";
        document.getElementById("modal_email").value = "";
        document.getElementById("modal_assunto").value = "";
        document.getElementById("txtArea").value = "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao_enviar2").onclick = enviarFormulario2;
});




