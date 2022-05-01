const square        = document.querySelectorAll('.square');
const mole          = document.querySelectorAll('.mole');
const winnerResult  = document.querySelector('.winnerResult');
const timeLeft      = document.querySelector('#time-left');
const restartBtn    = document.querySelector('.restart');
const loader        = document.querySelector('.loader');
const winner        = document.querySelector('.winner');
const modal         = document.querySelector('.modal');
let score           = document.querySelector('#score');
let currentTime     = timeLeft.textContent
let timerId         = setInterval(countDown, 1000);
let result          = 0;
let hitPosition     = 0

// Restart game
restartBtn.addEventListener('click', restart);

(() => {
    // Adjust height of squares
    let width = square[0].clientWidth;
    console.log(width);
    square.forEach( elem => {
        console.log(elem);
        elem.style.height = width+'px';
    });

    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
})();

moveMole();

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomePosition = square[ Math.floor( Math.random() * 5 ) ];
    randomePosition.classList.add('mole');

    hitPosition = randomePosition.id;
}

square.forEach( id => {
    id.addEventListener('click', () => {
        if (id.id === hitPosition ) {
            let elem = square[hitPosition-1]
            hit(elem);
            result = result + 50;
            score.textContent = result;
        } else {
            result = result - 50;
            score.textContent = result;
        }
    });
});

function moveMole() {
    setInterval( randomSquare, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        loader.style.display = 'none';
        modal.style.display = 'flex';
        winnerResult.textContent = result;
        winner.style.display = 'block';
        restartBtn.style.display = 'flex';
    }
}

function hit(elem) {
    elem.classList.add('hit');
    setTimeout( () => {
        elem.classList.remove('hit');
    }, 300);
}

function restart() {
    location.reload();
}

