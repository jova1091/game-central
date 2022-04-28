const square    = document.querySelectorAll('.square');
const mole      = document.querySelectorAll('.mole');
const timeLeft  = document.querySelector('#time-left');
let score       = document.querySelector('#score');
let result      = 0;
let timerId     = null;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    });

    let randomePosition = square[ Math.floor( Math.random() * 9 ) ];
    randomePosition.classList.add('mole');

    hitPosition = randomePosition.id;
}

square.forEach( id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition ) {
            result = result + 100;
            score.textContent = result;
        }
    });
});

function moveMole() {
    timerId = setInterval( randomSquare, 1000);
}

moveMole();

function countDown() {
    let currentTime = 0;
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

timerId = setInterval(countDown, 1000);