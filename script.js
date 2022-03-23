const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let pontuacao = 0;


function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
}

function jump(){  
    isJumping = true;

    let upInterval = setInterval(() =>{
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else{
                    position -=20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
        else{
        position += 20;
         dino.style.bottom = position + 'px';
        }
   
    }, 20);

}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    background.appendChild(cactus);
    cactus.style.left = 1000 + 'px';
  
    let leftInterval = setInterval(() =>{
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
            alert("Pontuação: " + pontuacao);
        }
        else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        if(cactusPosition > 0 && cactusPosition < 60 && position > 60){
            pontuacao += 10;

        }


    }, 20)

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);