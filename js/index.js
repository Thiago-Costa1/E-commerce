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

// Início da formatação do "X" para abrir e fechar o modal

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



// Fim da formatação do X para fechar o modal


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