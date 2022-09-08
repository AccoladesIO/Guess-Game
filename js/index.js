'use strict';

// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct Number!!';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value;

let number = Math.trunc(Math.random()* 20)+1;
// document.querySelector('.number').textContent = number;
let score = 20;
let highScore = 0;
const displayMsg = function(msg){
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
// When there's no input
    if(!guess){
        displayMsg('No Number!');
    }else if(guess === number){
        displayMsg('Correct Number!!');
        // hide secret number
        document.querySelector('.number').textContent = number;

        // when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // Highscore
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }else if(guess !== number){
        if (score > 1) {
            displayMsg(guess > number ? 'Too High!!': 'Too Low!!')
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost The Game!!!';
            document.querySelector('.score').textContent = 0;
        }
    }
    // }else if(guess > number){
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too High!!';
    //         // score--;
    //         // document.querySelector('.score').textContent = score;
    //     }
    
    // }else if (guess < number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low!!';
    //     // score--;
    //     // document.querySelector('.score').textContent = score; 
    //     }
        
    // }


});
document.querySelector('.again').addEventListener('click',  function() {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start Guessing!!';
    score = 20;
    number = Math.trunc(Math.random()* 20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})