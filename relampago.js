const imagens = [
    'iassets/imagens/img/poss1.jpg',
    'assets/imagens/img/poss2.jpg',
    'assets/imagens/img/poss3.jpg',
    'assets/imagens/img/poss1.jpg',
    'assets/imagens/img/poss1.jpg'
  ];
  
  // Seleciona os elementos da página
  const imagem = document.getElementById('imagem');
  const botao = document.getElementById('botao');
  
  // Variável para controlar a posição da imagem
  let indiceImagem = 0;
  
  // Função para trocar a imagem
  function trocarImagem() {
    // Incrementa o índice para a próxima imagem
    indiceImagem = (indiceImagem + 1) % imagens.length;
  
    // Atualiza o atributo src da imagem
    imagem.src = imagens[indiceImagem];
  }
  
  // Adiciona o evento de clique ao botão
  botao.addEventListener('click', trocarImagem);