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

// Início da formatação do X para abrir e fechar o modal

function fecharModal(event) {
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
    // Verificar se o clique ocorreu fora do modal
    if (event.target === fundoEscuro) {
        modal.style.display = 'none';
        fundoEscuro.style.display = 'none';
    }
}

function exibirModal() {
    var modal = document.querySelector('.container_modal');
    var fundoEscuro = document.getElementById('fundo_escuro');
    modal.style.display = 'block';
    fundoEscuro.style.display = 'block';
}

function impedirPropagacao(event) {
    // Impedir que o evento seja propagado para o fundo escuro
    event.stopPropagation();
}


// Fim da formatação do X para fechar o modal

