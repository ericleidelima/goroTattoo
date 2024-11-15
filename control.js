function espelharDiv(divId){
      
    const divToMirror = document.getElementById(divId);
    
    const container2 = document.getElementById('containerX');

    container2.innerHTML = divToMirror.innerHTML;

    esconderImagem2()
  };


  function mostrarDiv() {
            const div1 = window.document.getElementById("divInvisivel");
            
            if (div1.style.display === "none" ) {
        
                div1.style.display = "block"; 
            } else {
                div1.style.display = "none";
            }
           
        };


function esconderImagem2() {
            var imagem2 = document.getElementById("divInvisivel");
            imagem2.style.display = "none"; // Esconde a imagem2
        };


function espelharPrimeiroFilho() {
            const div =  document.getElementById("containerX");
            const primeiroFilho = div.querySelector("img");

            const imagem = primeiroFilho;
            
            if (imagem.style.transform === 'scaleX(-1)') {
                imagem.style.transform = 'scaleX(1)'; 
            } else {
            imagem.style.transform = 'scaleX(-1)'; 
            }
}


function rolarParaDiv() {
    document.getElementById("containerX").scrollIntoView({ behavior: "smooth" });
}


//==============================TEXTE RELÂMPAGO=====================
// Array com URLs das imagens
const images = [
    'assets/imagens/img/1.png',
    'assets/imagens/img/2.png',
    'assets/imagens/img/3.png'
  ];

  let currentIndex = 0;

  // Função para ir para a próxima imagem
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // Alterna para a próxima imagem
    document.getElementById('carousel-image').src = images[currentIndex];
  }
