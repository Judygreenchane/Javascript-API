const btnCard=document.querySelector('#btnCard')
const Output=document.querySelector('#Output')

function getCard(){
   
    
    fetch ('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
    .then (res=>res.json())
    .then(data =>
    {
       
       
  
      data.cards.forEach(post =>{
         let imageUrl=post.image    
            let imgElement=document.createElement('img')

        imgElement.setAttribute('src',imageUrl)
       
         Output.innerHTML=''
         Output.appendChild(imgElement)
         
    })
      
   })
    .catch(err => console.log(err))

}

btnCard.addEventListener('click', getCard)  






