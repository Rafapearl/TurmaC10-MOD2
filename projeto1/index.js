const elementoNome = document.querySelector('#nome'); 
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem');
let elementoBtn = document.querySelector('#alterar');


elementoBtn.addEventListener('click', () =>{
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './coringafeliz.jpg' 
        elementoNome.innerText = 'Coringa Feliz' 
        elementoSituacao.innerText = 'Feliz' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './coringamc.jpg'  
        elementoNome.innerText = 'Coringa MC' 
        elementoSituacao.innerText = 'Vida LOKA' 
        elementoBtn.value = 'terceiro'  
    } else { 
        elementoImg.src = './coringatriste.jpg' 
        elementoNome.innerText = 'Coringa triste' 
        elementoSituacao.innerText = 'Triste' 
        elementoBtn.value = 'primeiro' 
}})
