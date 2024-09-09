document.addEventListener('DOMContentLoaded', function() {
  // Seleciona o campo de pesquisa, o botão de pesquisa e a seção de ferramentas
  const campoPesquisa = document.getElementById('campo-pesquisa');
  const botaoPesquisa = document.getElementById('botao-pesquisa');
  const secaoFerramentas = document.getElementById('ferramentas');

  // Função para pesquisar ferramentas com base no termo inserido
  function pesquisar() {
      // Obtém o termo de pesquisa e converte para minúsculas
      const termoPesquisa = campoPesquisa.value.toLowerCase();
      let resultados = "";

      // Itera sobre as ferramentas e adiciona as que atendem ao termo de pesquisa
      for (let ferramenta of ferramentas) {
          if (ferramenta.titulo.toLowerCase().includes(termoPesquisa) ||
              ferramenta.descricao.toLowerCase().includes(termoPesquisa) ||
              ferramenta.tags.some(tag => tag.toLowerCase().includes(termoPesquisa))) {
              
              resultados += `
                  <div class="ferramenta">
                      <div class="ferramenta-header">
                          <h3>${ferramenta.titulo}</h3>
                          <a href="${ferramenta.link}" target="_blank" rel="noopener noreferrer" class="btn-saber-mais">Saber mais</a>
                      </div>
                      <p class="ferramenta-descricao">${ferramenta.descricao}</p>
                      <div class="ferramenta-plataformas">
                          ${gerarIconesPlataformas(ferramenta.plataformas)}
                      </div>
                      <div class="ferramenta-info">
                          <span class="info-item"><i class="fas fa-chart-line"></i> <span class="info-text">Dificuldade:&nbsp;</span>${ferramenta.dificuldade}</span>
                          <span class="info-item"><i class="fas fa-tag"></i> <span class="info-text">Preço:&nbsp;</span>${ferramenta.preco}</span>
                          <span class="info-item"><i class="fas fa-star"></i> <span class="info-text">Avaliação:&nbsp;</span>${ferramenta.popularidade}</span>
                          <span class="info-item"><i class="fas fa-file-contract"></i> <span class="info-text">Licença:&nbsp;</span>${ferramenta.licenca}</span>
                      </div>
                  </div>
              `;
          }
      }

      // Depois da div ferramentas-info existia:
      // <div class="tags">
      //    ${ferramenta.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      // </div>
      // Ela foi tirada de visualização, porém as tags estão funcionais

      // Se não houver resultados, exibe uma mensagem
      if (resultados === "") {
          resultados = "<p>Nenhuma ferramenta encontrada.</p>";
      }

      // Carrega os resultados na seção de ferramentas
      secaoFerramentas.innerHTML = resultados;
  }

  // Função para gerar ícones de plataformas
  function gerarIconesPlataformas(plataformas) {
      const icones = {
          "Web": "fas fa-globe",
          "Windows": "fab fa-windows",
          "Mac": "fab fa-apple",
          "Linux": "fab fa-linux",
          "iOS": "fab fa-app-store-ios",
          "Android": "fab fa-android"
      };

      return plataformas.map(plataforma => {
          const icone = icones[plataforma] || "fas fa-desktop";
          return `<span class="plataforma" title="${plataforma}"><i class="${icone}"></i></span>`;
      }).join('');
  }

  // Adiciona eventos para o botão de pesquisa e para o campo de pesquisa (ao pressionar Enter)
  botaoPesquisa.addEventListener('click', pesquisar);
  campoPesquisa.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
          pesquisar();
      }
  });

  // Inicialmente, a seção de ferramentas está vazia
  secaoFerramentas.innerHTML = "";
});