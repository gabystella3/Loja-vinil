// Função que gera os resultados de pesquisa
function gerarResultados(dados) {
  let section = document.getElementById('resultados-pesquisa');
  let resultados = "";
  
  for (let dado of dados) {
    resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `;
  }
  
  if (!resultados) {
    resultados = "<p>Nenhum resultado encontrado.</p>";
  }
  
  section.innerHTML = resultados;
}

// Função de pesquisa
function pesquisar() {
  let inputElement = document.querySelector("input");
  let campoPesquisa = inputElement.value.toLowerCase();
  
  let dadosFiltrados = dados.filter(dado =>
    dado.nome.toLowerCase().includes(campoPesquisa) ||
    dado.descricao.toLowerCase().includes(campoPesquisa)
  );
  
  gerarResultados(dadosFiltrados);
}

// Inicializa a página com todos os produtos
gerarResultados(dados);

// Adiciona evento ao campo de pesquisa
document.querySelector("input").addEventListener("input", pesquisar);
