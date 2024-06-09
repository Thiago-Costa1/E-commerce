// Smooth scroll
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

// Redirection for search
function redirecionar() {
    const query = document.getElementById('inp_pesquisar').value.toLowerCase();
    if (query === "") {
        alert("Por favor, digite o modelo do notebook que deseja buscar.");
    } else {
        window.location.href = `pesquisa.html?query=${query}`;
    }
}

// Toggle login options
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

// Carousel
var cont = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    proximaImg();
}, 5000);

function proximaImg() {
    cont++;
    if (cont > 3) cont = 1;

    document.getElementById('radio' + cont).checked = true;
}

// Phone number formatting
function formatarTelefone(input) {
    var numero = input.value.replace(/\D/g, '');
    if (numero.length >= 2) numero = '(' + numero.substring(0, 2) + ')' + numero.substring(2);
    if (numero.length >= 8) numero = numero.substring(0, 8) + '-' + numero.substring(8);
    input.value = numero;
}

// Modal functions
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

// Countdown timers
var timers = document.querySelectorAll('.countdown-timer');
var deadlines = [
    new Date("June 31, 2024 23:59:59").getTime(),
    new Date("June 23, 2024 23:59:59").getTime(),
    new Date("June 20, 2024 23:59:59").getTime(),
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

// FAQ toggle
function mostrarPergunta(id) {
    var resposta = document.getElementById(id);
    resposta.style.display = "block";
}

function esconderPergunta(id) {
    var resposta = document.getElementById(id);
    resposta.style.display = "none";
}

// Navbar toggle for mobile
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
