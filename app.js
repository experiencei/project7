let minMum = 1,
    maxMum = 10,
    winningNum = randomHum(minMum, maxMum),
    guessTime = 3;

const game = document.querySelector('#game'),
      minmUm = document.querySelector('.min-num'),
      maxmUm = document.querySelector('.max-num'),
      guessInput = document.getElementById('guess-input'),
      guessBtn = document.querySelector('#guess-value'),
      message = document.querySelector('.message');

minmUm.textContent = minMum;
maxmUm.textContent = maxMum;

game.addEventListener('mousedown' , playAgain)
function playAgain(e) {
   if (e.target.className === 'play-again') {
       window.location.reload();
   }
}

guessBtn.addEventListener('click', bringGues);
   function bringGues() {
   let guess;
   guess = parseInt(guessInput.value);

   
if (isNaN(guess) || guess < minMum || guess > maxMum ) {
    setMessage(' Input must not greater than maximum or lower than minimum', 'red');
    guessInput.style.borderColor = "red";
} 
if (guess === winningNum) {
    gemeOver( true , `You Won, ${winningNum} is the Accurate value`);
    
}
else{
    guessTime -= 1;
    if (guessTime === 0) {
        gemeOver(false ,`You lost!, ${winningNum} was the winning number` );

    } 
    else {
        setMessage(`Wrong value, you have ${guessTime} of guess left`,'red')

    }
}
 function gemeOver(won , msg) {
    let color;
    won === true? color = 'green' : color = 'red' ;
    setMessage(msg)
    guessInput.disabled = true; 
    guessInput.style.borderColor = color;
    message.style.color = color;

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
 }

 function setMessage(msg,color){
    message.textContent = msg;
    message.style.color = color;
}
 }
function randomHum(minMum, maxMum) {
    return Math.floor(Math.random() * (maxMum-minMum +1)+minMum) 

   }
