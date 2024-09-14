function pesquisar() {
        // Obtém a seção HTML onde os resultados serão exibidos
        let section = document.getElementById("resultados-pesquisa");
    
        let campoPesquisa = document.getElementById("campo-pesquisa").value

        // se campoPesquisa for uma string sem nada
        if (!campoPesquisa) {
            section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme/série, onde assistir ou gênero"
            return 
        }
    
        campoPesquisa = campoPesquisa.trim().toLowerCase()
    
        // Inicializa uma string vazia para armazenar os resultados
        let resultados = "";
        let titulo = ""; 
        let sinopse = "";
        let ondeAssistir = "";
        let genero = "";
    
        // Itera sobre cada dado da lista de dados
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase()
            sinopse = dado.sinopse.toLowerCase()
            ondeAssistir = dado.ondeAssistir.toLowerCase()
            genero = dado.genero.toLowerCase()
            // se titulo includes campoPesquisa
            if (titulo.includes(campoPesquisa) || sinopse.includes(campoPesquisa)
                || ondeAssistir.includes(campoPesquisa) || genero.includes(campoPesquisa) ) {
                // cria um novo elemento
                resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta"> Sinopse: ${dado.sinopse}</p>
                    <p class="descricao-meta"> Nome da(s) Personsagem(ns):${dado.nomeDaPersonagem}</p>
                    <p class="descricao-meta"> Direção: ${dado.direcao}</p>
                    <p class="descricao-meta"> Ano de Lançamento: ${dado.anoDeLancamento}</p>
                    <p class="descricao-meta"> Onde Assistir: ${dado.ondeAssistir}</p>
                    <p class="descricao-meta"> Gênero: ${dado.genero}</p>
                </div>
            `;
            }
        }
        
        
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>"
        }
    
        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
}
