const player1 = {
    point:0,
    button: document.querySelector('#p1Btn'),
    display:document.querySelector('#p1points')
}

const player2 = {
    point:0,
    button: document.querySelector('#p2Btn'),
    display:document.querySelector('#p2points')
}

const resetBtn = document.querySelector('#reset');
const playTillPoint = document.querySelector('#uptoPoint');
let scoreOfWinner = 4;
let isGameOver = false;

function updatePoints(player, opponent){
    if(!isGameOver) {
        player.point += 1;
   if (player.point === scoreOfWinner){
     isGameOver = true;
     player.display.classList.add('winner');
     opponent.display.classList.add('loser');
     player.button.disabled = true;
     opponent.button.disabled = true;
   }
   player.display.textContent = player.point;
    }
}

player1.button.addEventListener('click', function(){
    updatePoints(player1,player2);
})

player2.button.addEventListener('click', function(){
    updatePoints(player2,player1);
})

playTillPoint.addEventListener('change', function (){
   scoreOfWinner = parseInt(this.value);
   reset();
})

resetBtn.addEventListener('click',reset)

function reset() {
   isGameOver = false;
   for (let p of [player1,player2]) {
       p.point = 0;
       p.display.textContent = 0;
       p.display.classList.remove('winner','loser');
       p.button.disabled = false;
   }
}



