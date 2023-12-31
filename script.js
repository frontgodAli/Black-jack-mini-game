let cards=[]
let paraEl=document.getElementById("para-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")
let sum=0;
let message=""
let isAlive=false
let hasBlackJack=false

function randomNumber(){
    let random=Math.floor(Math.random()*13+1)
    if(random>10){
        return 10;
    }else if(random===1){
        return 11;
    }else{
        return random;
    }
}


function startGame(){
    isAlive=true;
    let firstCard=randomNumber()
    let secondCard=randomNumber()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    game();
}

function game(){
    sumEl.textContent="Sum: "+sum;
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    if(sum<21){
        message="Do you want to draw a new card ?"
    }else if(sum===21){
        message="you have a blackjack!"
        hasBlackJack=true
    }else if(sum>21){
        message="you are out of this game."
        isAlive=false;
    }
    paraEl.textContent=message;
}

function drawCard(){
    if(isAlive===true && hasBlackJack===false ){
        let card=randomNumber();
        sum+=card
        cards.push(card);
    game()
    }
}
