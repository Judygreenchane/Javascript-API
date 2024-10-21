const btnCard=document.querySelector('#btnCard')
const cardsDrawn=document.querySelector('#cards-drawn')
const gameStatus =document.querySelector('#game-status')


let suitHistory=[]
let drawCount=0

btnCard.addEventListener('click',() => {
    if(drawCount<10){
        drawnCard()
        

    }else{
        gameStatus.innerHTML='Game Over.Please refresh to play again.'
    }

})

async function drawnCard() {
   try{
          const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
          const data = await res.json();
         
          cardsDrawn.innerHTML += `<img src="${data.cards[0].image}"  />`;
         
        suitHistory.push(data.cards[0].suit);
        drawCount++;


   if(suitHistory.length>=3){
    const lastThreeSuits=suitHistory.slice(-3)
    if(lastThreeSuits.every(s=> s===lastThreeSuits[0])){
        gameStatus.innerHTML = 'Congrats! You got three consecutive cards of the same suit!<br>Please refresh to play again.';
        btnCard.disabled = true;
        return
    }
    if(drawCount===10){
        gameStatus.innerHTML = 'Sorry, you did not get three consecutive cards of the same suit. Game over.<br>Please refresh to play again.';
        btnCard.disabled = true;
    }
   }
  

   }
   catch (error) {
    console.error('Error fetching the card:', error);
    gameStatus.innerHTML = 'There was an error fetching the card. Please try again.';
}
    
}
