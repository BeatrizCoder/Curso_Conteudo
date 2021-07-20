
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 

elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiraImg'){
        elementoImg.src="./img/reflexivo.jpeg"
        elementoSituacao.innerText="Refletindo(Nao devia ter latido pro carteiro... mamae ficou sem a encomenda.. de novo"
        elementoBtn.value='segundaImg'
    }
     else if(elementoBtn.value == 'segundaImg') { 
        elementoImg.src="./img/surpreso (2).jpeg"
        elementoSituacao.innerText="Surpreso(quando o babado é forte)"
        elementoBtn.value='terceiraImg'
    }

    else if(elementoBtn.value == 'terceiraImg') { 
        elementoImg.src="img/bravo.jpeg"
        elementoSituacao.innerText="Bravo, porém not dangerous"
        elementoBtn.value='primeiraImg'
    }



})
