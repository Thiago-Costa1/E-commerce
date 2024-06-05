document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query')?.toLowerCase().trim();
    const resultsContainer = document.getElementById('results-container');

    if (!query) {
        document.getElementById('search-query').textContent = `Por favor, digite o modelo do notebook para realizar a busca.`;
        resultsContainer.innerHTML = '<p>Nenhum modelo foi pesquisado.</p>';
        return;
    }

    document.getElementById('search-query').textContent = `Trazendo o resultado da pesquisa: "${query}"`;


    const products = [
        {
            id: 1,
            name: "rog strix g16",
            category: "gaming",
            price: 10799.10,
            html: `
                    <div class="card" id="card-1">
                        <img src="./img/rog_asus.png" alt="notebook">
                        <h3>ROG Strix G16</h3>
                        <ul class="card-ul">
                            <li>RTX4060</li>
                            <li>Intel Core I9 13980HX</li>
                            <li>Memória RAM 16 GB</li>
                        </ul>
                        <h4>APENAS: R$ 10.799,10</h4>
                        <div class="fundo">
                            <p>À Vista: R$ 9.719,19</p>
                            <h5>10% DE DESCONTO</h5>
                        </div>
                        <a href="./cards/card1.html"><button id="botao-card">Comprar</button></a>
                    </div>
            `
        },

        {
            id: 2,
            name: "asus tuf f15",
            category: "gaming",
            price: 2999.99,
            html: `
                <div class="card" id="card-2">
                    <img src="./img/tuf_asus.png" alt="notebook">
                    <h3>ASUS TUF F15</h3>
                    <ul class="card-ul">
                        <li>RTX3050 4GB</li>
                        <li>Intel Core I7 12700H </li>
                        <li>Memória RAM 16 GB</li>
                    </ul>
                    <h4>APENAS: R$ 6.749,99</h4>
                    <div class="fundo">
                        <p>À Vista: R$ 6.075,00</p>
                        <h5>10% DE DESCONTO</h5>
                    </div>
                    <a href="./cards/card2.html"><button id="botao-card">Comprar</button></a>
                </div>
            `
        },

        {
            id: 3,
            name: "nitro 5",
            category: "gaming",
            html: `
                <div class="card" id="card-3">
                    <img src="./img/nitro_acer.png" alt="notebook">
                    <h3>Nitro 5</h3>
                    <ul class="card-ul">
                        <li>RTX 3050 4GB</li>
                        <li>Intel Core I7 11ª ger.</li>
                        <li>Memória RAM 16 GB</li>
                    </ul>
                    <h4>APENAS: R$ 5.444,76</h4>
                    <div class="fundo">
                        <p>À Vista: R$ 4.900,28</p>
                        <h5>10% DE DESCONTO</h5>
                    </div>
                    <a href="./cards/card3.html"><button id="botao-card">Comprar</button></a>
                </div>
            `
        },

        {
            id: 4,
            name: "predator triton",
            category: "gaming",
            html: `
                <div class="card" id="card-4">
                    <img src="./img/triton_acer.png" alt="notebook">
                    <h3>Predator Triton</h3>
                    <ul class="card-ul">
                        <li>RTX 3060 6GB</li>
                        <li>Intel Core i7-12700H </li>
                        <li>Memória RAM 16 GB</li>
                    </ul>
                    <h4>APENAS: R$ 7.299,00</h2>
                        <div class="fundo">
                            <p>À Vista: R$ 6.569,10 </p>
                            <h5>10% DE DESCONTO</h5>
                        </div>
                        <a href="./cards/card4.html"><button id="botao-card">Comprar</button></a>
                </div>
            `
        },

        {
            id: 5,
            name: "hp 256 g9",
            category: "cheapest",
            html: `
                <div class="card" id="card-5">
                    <img src="./img/hp.png" alt="notebook">
                    <h3>HP 256 G9</h3>
                    <ul class="card-ul">
                        <li>Intel UHD Graphics</li>
                        <li>Intel I5-1235U </li>
                        <li>Memória RAM 8GB</li>
                    </ul>
                    <h4>APENAS: R$ 2.859,00</h4>
                    <div class="fundo">
                        <p>À Vista: R$ 2.573,10 </p>
                        <h5>10% DE DESCONTO</h5>
                    </div>
                    <a href="./cards/card5.html"><button id="botao-card">Comprar</button></a>
                </div>
            `
        },

        {
            id: 6,
            name: "positivo vision i15",
            category: "cheapest",
            html: `
            <div class="card" id="card-6">
            <img src="./img/positivo2.png" alt="notebook">
            <h3>Positivo Vision i15</h3>
            <ul class="card-ul">
                <li>Placa Integrada</li>
                <li>Core i3-1115G4E </li>
                <li>Memória RAM 8GB</li>
            </ul>            
            <h4>APENAS: R$ 2.089,05</h4>
            <div class="fundo">
                <p>À Vista: R$ 1.880,14 </p>
                <h5>10% DE DESCONTO</h5>
            </div>
            <a href="./cards/card6.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },

        {
            id: 7,
            name: "lenovo ideapad i5",
            category: "cheapest",
            html: `
            <div class="card" id="card-7">
            <img src="./img/lenovo_asus.png" alt="notebook">
            <h3>Lenovo Ideapad i5</h3>
            <ul class="card-ul">
                <li>Placa Integrada</li>
                <li>Core i5-1235U</li>
                <li>Memória RAM 8GB</li>
            </ul>
            <h4>APENAS: R$ 2.549,90</h4>
            <div class="fundo">
                <p>À Vista: R$ 2.294,91 </p>
                <h5>10% DE DESCONTO</h5>
            </div>
            <a href="./cards/card7.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        }, 

        {
            id: 8,
            name: "vaio fe15",
            category: "cheapest",
            html: `
            <div class="card" id="card-8">
            <img src="./img/vaio.png" alt="notebook">
            <h3>VAIO FE15</h3>
            <div class="icones_card">
                <img src="./img/placa-de-video.png" alt="placa de vídeo" class="placa-video">
                <img src="./img/processador.png" alt="processador" class="processador">
                <img src="./img/memoria-ram.png" alt="memoria-ram" class="memoria-ram">
            </div>
            <ul class="card-ul">
                <li>Placa Integrada</li>
                <li>Core I3 1115G4 </li>
                <li>Memória RAM 8GB</li>
            </ul>
            <h4>APENAS: R$ 2.336,93</h2>
                <div class="fundo">
                    <p>À Vista: R$ 2.103,24 </p>
                    <h5>10% DE DESCONTO</h5>
                </div>
                <a href="./cards/card8.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },

        {
            id: 9,
            name: "alienware m16",
            category: "working",
            html: `
            <div class="card" id="card-9">
            <img src="./img/alienware.png" alt="notebook">
            <h3>Alienware m16</h3>
            <ul class="card-ul">
                <li>RTX 4070</li>
                <li>Intel Core i9 13ª ger. </li>
                <li>Memória RAM 32GB</li>
            </ul>
            <h4>APENAS: R$ 16.949,00</h4>
            <div class="fundo">
                <p>À Vista: R$ 15.254,10 </p>
                <h5>10% DE DESCONTO</h5>
            </div>
            <a href="./cards/card9.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },

        {
            id: 9,
            name: "macbook pro",
            category: "working",
            html: `
            <div class="card" id="card-10">
            <img src="./img/MackBook_apple.png" alt="notebook">
            <h3>MacBook Pro</h3>
            <ul class="card-ul">
                <li>Placa Integrada</li>
                <li>M2</li>
                <li>Memória RAM 8GB</li>
            </ul>
            <h4>APENAS: R$ 15.299,00</h4>
            <div class="fundo">
                <p>À Vista: R$ 13.769,10 </p>
                <h5>10% DE DESCONTO</h5>
            </div>
            <a href="./cards/card10.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },

        {
            id: 10,
            name: "legion 5",
            category: "working",
            html: `
            <div class="card" id="card-11">
            <img src="./img/legion_lenovo.png" alt="notebook">
            <h3>Legion 5</h3>
            <ul class="card-ul">
                <li>RTX 3050 4GB</li>
                <li>Ryzen 7 5800H</li>
                <li>Memória RAM 16 GB</li>
            </ul>
                <h4>APENAS: R$ 8.941,16</h4>
            <div class="fundo">
                <p>À Vista: R$ 8.047,04 </p>
                <h5>10% DE DESCONTO</h5>
            </div>
            <a href="./cards/card11.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },

        {
            id: 11,
            name: "predator helios neo",
            html: `
            <div class="card" id="card-12">
            <img src="./img/predator_helios.png" alt="notebook">
            <h3>Predator Helios Neo</h3>
            <ul class="card-ul">
                <li>RTX 4060 8GB</li>
                <li>Intel Core i7 13700HX</li>
                <li>Memória RAM 16GB</li>
            </ul>
            <h4>APENAS: R$ 7.299,00</h2>
                <div class="fundo">
                    <p>À Vista: R$ 6.569,10 </p>
                    <h5>10% DE DESCONTO</h5>
                </div>
                <a href="./cards/card12.html"><button id="botao-card">Comprar</button></a>
        </div>
            `
        },


    ];

    function displayProducts(filteredProducts) {
        resultsContainer.innerHTML = '';
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                resultsContainer.innerHTML += product.html;
            });
        } else {
            resultsContainer.innerHTML = '<p>Modelo não encontrado</p>';
        }
    }

    const filteredProducts = products.filter(product => product.name.includes(query));
    displayProducts(filteredProducts);

    window.filterResults = function(filter) {
        let filteredProducts;
        if (filter === 'cheapest') {
            filteredProducts = products.filter(product => product.category === 'cheapest').slice(0, 6);
        } else if (filter === 'gaming') {
            filteredProducts = products.filter(product => product.category === 'gaming').slice(0, 6);
        } else if (filter === 'working') {
            filteredProducts = products.filter(product => product.category === 'working').slice(0, 6);
        }
         else {
            filteredProducts = products.filter(product => product.name.includes(query));
        }
        displayProducts(filteredProducts);
    }

});


