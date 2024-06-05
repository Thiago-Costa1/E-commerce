// Início da rolagem suave e centraliza o conteúdo clicado

document.querySelectorAll('a[href^="#"]').forEach(anchor =>
    {
    anchor.addEventListener('click', function (e)
    {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        // Calcula a posição para centralizar verticalmente na janela do navegador
        const offset = target.offsetTop - (window.innerHeight - target.offsetHeight) / 2;

        window.scrollTo(
        {
            top: offset,
            behavior: 'smooth'
        });
    });
});

function redirecionar()
{
        const query = document.getElementById('inp_pesquisar').value.toLowerCase();
        if (query === "")
        {
            alert("Por favor, digite o modelo do notebook que deseja buscar.");
        } else
        window.location.href = `pesquisa.html?query=${query}`;

}


// Fim da rolagem suave e centralização do conteúdo clicado

document.addEventListener('DOMContentLoaded', () => {
    const iconeLogin = document.getElementById('icone_login');
    const optionsBox = document.getElementById('options-box');

    iconeLogin.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir ação padrão do link
        optionsBox.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!iconeLogin.contains(event.target) && !optionsBox.contains(event.target)) {
            optionsBox.classList.add('hidden');
        }
    });
});


// Início do javascript do carrossel //

	var radio = document.querySelector('.manual-btn')
	var cont = 1

	document.getElementById('radio1').checked = true 	

	setInterval(() =>
    {
		proximaImg()
	}, 5000)

function proximaImg()
    {
	cont++
	if(cont > 3)
		cont = 1
	
	document.getElementById('radio'+cont).checked = true  // Marca o botão de rádio correspondente à próxima imagem como selecionado
	}

// Fim do javascript do carrossel //


// Início da formatação do número do usuário no model

function formatarTelefone(input)
{
	
	var numero = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

	if (numero.length >= 2)
	    numero = '(' + numero.substring(0, 2) + ')' + numero.substring(2);
	if (numero.length >= 8)
	    numero = numero.substring(0, 8) + '-' + numero.substring(8);

	input.value = numero;  // Atualizar o valor do input
}
	
// Fim da formatação do número do usuário no model

// Início da formatação do "X" para abrir e fechar o 1º modal

function exibirModal()
{
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
    modal.style.display = 'block';
    fundoEscuro.style.display = 'block';
}

function fecharModal(event)
{
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
  
    event.preventDefault();   // Evitar o comportamento padrão do botão ir para o início da página
  
    if (event.target.classList.contains('fechar_modal'))
    {
        modal.style.display = 'none';
        fundoEscuro.style.display = 'none';
    }
}

// Fim da formatação do "X" para abrir e fechar o 1º modal

// Início da formatação do "X" para abrir e fechar o 2º modal

function exibirModal2()
{
    var modal2 = document.querySelector('.container_modal2');
    var fundoEscuro2 = document.getElementById('fundo_escuro2');
    modal2.style.display = 'block';
    fundoEscuro2.style.display = 'block';
}

function fecharModal2(event)
{
    var modal2 = document.querySelector('.container_modal2');
    var fundoEscuro2 = document.getElementById('fundo_escuro2');
    
    event.preventDefault(); // Evitar o comportamento padrão do botão ir para o início da página

    if (event.target.classList.contains('fechar_modal'))
    {
        modal2.style.display = 'none';
        fundoEscuro2.style.display = 'none';
    }
}


// Fim da formatação do X para fechar o 2º modal

// Início da formatação do timer de alguns cards

var timers = document.querySelectorAll('.countdown-timer');
var deadlines =
[
    new Date("May 31, 2024 23:59:59").getTime(), 
    new Date("May 28, 2024 23:59:59").getTime(),
    new Date("May 29, 2024 23:59:59").getTime(),
 
];

// Altera sobre cada timer
timers.forEach(function(timer, index)
{
    // Obtem a data de expiração correspondente
    var deadline = deadlines[index];
    
    // Inicializa o timer para este elemento apenas se houver uma data de expiração definida
    if (!isNaN(deadline))
        {
        var x = setInterval(function()
        {
            var now = new Date().getTime();
    
            var distance = deadline - now;
            
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
            if (distance < 0)
            {
                clearInterval(x);
                timer.innerHTML = "EXPIRADO";
            }
        }, 1000);
    }
});

// Fim da formatação do timer de alguns cards

// Início da formatação para mostrar e esconder as respostas

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

// Fim da formatação para mostrar e esconder as respostas

