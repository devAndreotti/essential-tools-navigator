document.addEventListener('DOMContentLoaded', function() {
  const botaoTema = document.getElementById('botao-tema');
  const iconeBtn = botaoTema.querySelector('i');
  const corpo = document.body;

  function alternarTema() {
    corpo.classList.toggle('tema-escuro');
    const temaEscuro = corpo.classList.contains('tema-escuro');
    
    iconeBtn.className = temaEscuro ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('tema', temaEscuro ? 'tema-escuro' : 'tema-claro');
  }

  botaoTema.addEventListener('click', alternarTema);

  // Aplicar tema salvo
  if (localStorage.getItem('tema') === 'tema-escuro') {
    alternarTema();
  }
});