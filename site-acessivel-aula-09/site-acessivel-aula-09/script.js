document.addEventListener('DOMContentLoaded', () => {
  const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const btnAumentarFonte = document.getElementById('aumentar-fonte');
  const btnDiminuirFonte = document.getElementById('diminuir-fonte');
  const btnAlternaContraste = document.getElementById('alterna-contraste');

  let tamanhoFonteAtual = 1; // valor em rem
  const TAMANHO_FONTE_MIN = 0.8;
  const TAMANHO_FONTE_MAX = 2;

  // Toggle menu de acessibilidade (abre/fecha opções)
  botaoAcessibilidade.addEventListener('click', () => {
    const aberto = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';

    botaoAcessibilidade.classList.toggle('rotacao-botao');

    if (aberto) {
      opcoesAcessibilidade.classList.add('apresenta-lista'); // esconde opções
      botaoAcessibilidade.setAttribute('aria-expanded', 'false');
    } else {
      opcoesAcessibilidade.classList.remove('apresenta-lista'); // mostra opções
      botaoAcessibilidade.setAttribute('aria-expanded', 'true');
    }
  });

  // Aumentar fonte com limite máximo
  btnAumentarFonte.addEventListener('click', () => {
    if (tamanhoFonteAtual < TAMANHO_FONTE_MAX) {
      tamanhoFonteAtual = +(tamanhoFonteAtual + 0.1).toFixed(2);
      document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
    }
  });

  // Diminuir fonte com limite mínimo
  btnDiminuirFonte.addEventListener('click', () => {
    if (tamanhoFonteAtual > TAMANHO_FONTE_MIN) {
      tamanhoFonteAtual = +(tamanhoFonteAtual - 0.1).toFixed(2);
      document.body.style.fontSize = `${tamanhoFonteAtual}rem`;
    }
  });

  // Alternar contraste alto (clássico para acessibilidade)
  btnAlternaContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
  });
});

// ScrollReveal nas seções do site
ScrollReveal().reveal('#inicio', { delay: 500, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('#sobre', { delay: 600, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('#galeria', { delay: 700, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('#contato', { delay: 800, distance: '50px', origin: 'bottom' });
