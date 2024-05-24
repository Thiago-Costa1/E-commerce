// Início da lógica das miniaturas para trocar a imagem grande
document.addEventListener('DOMContentLoaded', function()
{
    const mainImage = document.getElementById('img-grande');
    const zoomImg = document.getElementById('zoom-img');
    const thumbnails = document.querySelectorAll('.imagem-pequena');

    thumbnails.forEach(thumbnail =>
        {
        thumbnail.addEventListener('mouseover', function()
        {
            const newSrc = this.src;
            mainImage.src = newSrc; // Substitui a imagem principal pela imagem em miniatura
            zoomImg.src = newSrc; // Atualiza a imagem de zoom também
        });
    });
});
// Fim da lógica das miniaturas para trocar a imagem grande

// Início da lógica para aplicar o zoom quando o mouse estiver sob a imagem grande

document.addEventListener("DOMContentLoaded", () =>
    {
    const box = document.getElementById("box");
    const img = document.getElementById("img-grande");
    const zoomContainer = document.getElementById("zoom-container");
    const zoomImg = document.getElementById("zoom-img");

    box.addEventListener("mousemove", (e) =>
        {
        zoomContainer.style.display = "block";

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Posiciona o contêiner de zoom ao lado da imagem principal
        zoomContainer.style.top = `${rect.top}px`;
        zoomContainer.style.left = `${rect.right}px`; // Adicionar margem

        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;

        const zoomWidth = zoomContainer.offsetWidth;
        const zoomHeight = zoomContainer.offsetHeight;

        const zoomX = (x / imgWidth) * zoomImg.width - (zoomWidth / 2);
        const zoomY = (y / imgHeight) * zoomImg.height - (zoomHeight / 2);

        zoomImg.style.left = `-${zoomX}px`;
        zoomImg.style.top = `-${zoomY}px`;
    });

    box.addEventListener("mouseleave", () =>
    {
        zoomContainer.style.display = "none";
    });
});

// Fim da lógica para aplicar o zoom quando o mouse estiver sob a imagem grande

/* Início da tabela */ 
document.getElementById('parcelas-button').onclick = function() {
    const parcelasTable = document.getElementById('parcelas-table');
    const tbody = parcelasTable.querySelector('tbody');
    const dropdownIcon = this.querySelector('.dropdown-icon');

    // Função auxiliar para formatar o número
    function formatNumber(num) {
        return num.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    if (parcelasTable.style.display === 'block') {
        parcelasTable.style.display = 'none';
        dropdownIcon.classList.remove('rotate');
    } else {
        tbody.innerHTML = ''; // Limpar linhas anteriores

        const precoFinal = 10799.10;
        const parcelas = [
            { num: 2, valorParcela: 5399.55 },
            { num: 3, valorParcela: 3599.70 },
            { num: 4, valorParcela: 2699.775 }, 
            { num: 5, valorParcela: 2159.82 },
            { num: 6, valorParcela: 1799.85 },
            { num: 7, valorParcela: 1542.728571428571 }, // Ajustado
            { num: 8, valorParcela: 1349.8875 }, // Ajustado
            { num: 9, valorParcela: 1199.90 },
            { num: 10, valorParcela: 1079.91 },
            { num: 11, valorParcela: parseFloat(((precoFinal * 1.05) / 11).toFixed(2)) }, // com juros
            { num: 12, valorParcela: parseFloat(((precoFinal * 1.09) / 12).toFixed(2)) }  // com juros
        ];

        parcelas.forEach(parcela => {
            const valorTotalParcelado = parseFloat((parcela.valorParcela * parcela.num).toFixed(2));
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${parcela.num}x</td><td>R$ ${formatNumber(parcela.valorParcela)}</td><td>R$ ${formatNumber(valorTotalParcelado)}</td>`;
            tbody.appendChild(tr);
        });

        parcelasTable.style.display = 'block';
        dropdownIcon.classList.add('rotate');   
    }
};








/* Fim da tabela */