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
		if(cont > 3){
			cont = 1
		}

	// Marca o botão de rádio correspondente à próxima imagem como selecionado
		document.getElementById('radio'+cont).checked = true 

	}

 // Fim do javascript do carrossel //
