const games = [
    {
        id: 1,
        name: 'Memory game',
        url: '/games/memory_game/index.html'
    }
]

let modal               = "";
let modalCard           = "";
let modalCardTitle      = "";
let modalCardBody       = "";
let player              = "";

document.addEventListener('DOMContentLoaded', () => {
    modal           = document.querySelector('.modal');
    modalCard       = document.querySelector('.modal-card');
    modalCardTitle  = document.querySelector('.modal-card-title');
    modalCardBody   = document.querySelector('.modal-card-body'); 
    player          = document.querySelector('#player');
});

function playGame(gameId) {
    let game = games[gameId - 1];
    modalCardTitle.textContent = game.name;
    modal.classList.add('is-active');
    let modalHeight = modal.clientHeight;
    modalCard.style.width = modalHeight+'px';
    modalCard.style.height = modalHeight+'px';
    player.style.width = modalHeight +'px';
    player.style.height = modalHeight +'px';
    player.setAttribute('src', game.url);
}

function closeGame() {
    modalCardTitle.textContent = '';
    player.setAttribute('src', '');
    modal.classList.remove('is-active');
}