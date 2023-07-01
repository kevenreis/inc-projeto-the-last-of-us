
    /*OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente*/
   
    
  
   



// - passo 1 - dar um jeito de pegar o elemento HTML dos botões//
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens=document.querySelectorAll('.imagem');

    //- passo 2 - dar um jeito de identificar o clique do usuário no botão//
    botoesCarrossel.forEach((botao,indise) => {
    botao.addEventListener('click',() => {
    const botaoselecionado=document.querySelector('.selecionado');  //- passo 3 - desmarcar o botão selecionado anterior*/
    botaoselecionado.classList.remove('selecionado');


  // passo 4 - marcar o botão clicado como se estivesse selecionada//
    botao.classList.add('selecionado');
//- passo 5 - esconder a imagem ativa de fundo anterior //
const imagemAtiva=document.querySelector('.ativa');
imagemAtiva.classList.remove('ativa');


//passo 6- fazer aparecer a imagem de fundo correspondente ao botão clicado//
imagens[indise].classList.add('ativa')


})
})
   
   
     


/*
const botao1 = document.getElementById('botao1');
botao1.addEventListener('click',()=> {console.log('clicou no botao 1')});

const botao2 = document.getElementById('botao2');
botao2.addEventListener('click',()=> {console.log('clicou no botao 2')});
/*








/*function myFunction() {
    document.getElementById("demo").style="background-image:url(src/imagens/tlou-2.jpg)";}*/