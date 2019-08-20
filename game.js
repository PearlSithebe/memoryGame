var flip = document.getElementsByClassName("card")
var flippedArray= createArray()
var card1, card2;
var match = [];
var flipped = false;

function createArray (){
let newArray= [...flip]
  return newArray;
}

function matching (card1,card2) {
    card1.removeEventListener("click", cardFlipper);
    card2.removeEventListener("click", cardFlipper);
    return "removed"
}
function cardFlipper() {
this.classList.add("open")
 // flip cards to show the front 
    if(!flipped){
        flipped = true;
        card1 = this;
    }else {
        flipped = false;
        card2 = this;
        // check matching cards and keep them flipped
        if(card1.dataset.deck === card2.dataset.deck){
            matching(card1,card2)
            match.push(card1)
        // alert the user if they have matched all cards withing the given tim e
            setTimeout(()=>{
                if (match.length == 6){
                    if(alert("You Won")){}else{
                        window.location.reload()
                    }}
            },500)
            
            
        }else {
            setTimeout(()=>{
                card1.classList.remove("open");
                card2.classList.remove("open")
            },500)}
    }}
// flip back unmatched cards 
for ( let i =0; i < flippedArray.length; i++) {
    flippedArray[i].addEventListener("click", cardFlipper)
}
// shuffles the cards randomly
function shuffle () {
    flippedArray.forEach(function(flip){
        let shuffled = Math.floor(Math.random()*12)
        flip.style.order = shuffled;
    })
    return "shuffled"
}
    // timer to set how long the game can be played 

 var time = 40;
 var timer = setInterval(function(){
     if(time == 0){
         clearInterval(timer)
         // alert when the given time to play the game is over
         if(alert("Time's up")){}else{
             window.location.reload()
         }
     }
     // countdown of the given time to play the game
     time--;
     document.getElementById("timers").innerHTML = time
 },1000)

 function start (){
     shuffle(flippedArray)
}
     window.onload = start();
 
module.exports = {
    shuffle,
    createArray
}