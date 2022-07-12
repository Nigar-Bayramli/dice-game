const current0 =  document.querySelector('.score-0')
const current1 =  document.querySelector('.score-1')
const btnRoll = document.querySelector('.roll')
const btnAgain = document.querySelector('.again')
const diceEl = document.querySelector('.dice-1')
const diceEl2 = document.querySelector('.dice-2')
const rules = document.querySelector('.rules')

const okay = document.querySelector('.okay')
let currentScore = 0
let currentScore2 = 0
let active = 0
let scores = [0, 0]
let dice = 0
let dice2 = 0
btnRoll.addEventListener('click', function() {


    dice = Math.trunc(Math.random() * 6) + 1
    dice2 = Math.trunc(Math.random() * 6) + 1
  diceEl.src = `dice-${dice}.png`
  diceEl2.src = `dice-${dice2}.png`
      
   

    if(dice !== 1 && dice2 !== 1 ) {
        currentScore += (dice + dice2) 
        currentScore2 += (dice + dice2) 
// active = (Math.random() >= 0.5) ? 1 : 0

        document.querySelector (`.score-${active}`).textContent = currentScore
    
    
    }
    else {
scores[active] += currentScore

        document.querySelector(`.total-${active}`).textContent =
        scores[active]
        document.querySelector(`.score-${active}`).textContent = 0
     
    currentScore = 0
    currentScore2 = 0
        if (active == 1) {
            active = 0
        }
        else {
            active = 1
        }
        
      
    }
  

    
       document.querySelector (".dice-1").style.display = "block"
       document.querySelector (".dice-2").style.display = "block"
   


 
})

const againPlay = function() {

    current0 = 0
    current1 = 0

    scores = [0, 0]
  currentScore = 0
  active = 0
}

btnAgain.addEventListener('click', againPlay)

rules.addEventListener('click', function() {
    document.querySelector (".rules-window").style.display = "block"
})

okay.addEventListener('click', function(){

    document.querySelector (".rules-window").style.display = "none"
   
})
// if (scores[active] >= 30) {
// document.querySelector('.player-1').textContent = 'Winner'
   
// }
