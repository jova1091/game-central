document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardArray = [
        {
            name:   'img1',
            img:    'assets/img/img1.png'
        },
        {
            name:   'img1',
            img:    'assets/img/img1.png'
        },
        {
            name:   'img2',
            img:    'assets/img/img2.png'
        },
        {
            name:   'img2',
            img:    'assets/img/img2.png'
        },
        {
            name:   'img3',
            img:    'assets/img/img3.png'
        },
        {
            name:   'img3',
            img:    'assets/img/img3.png'
        },
        {
            name:   'img4',
            img:    'assets/img/img4.png'
        },
        {
            name:   'img4',
            img:    'assets/img/img4.png'
        },
        {
            name:   'img5',
            img:    'assets/img/img5.png'
        },
        {
            name:   'img5',
            img:    'assets/img/img5.png'
        },
        {
            name:   'img6',
            img:    'assets/img/img6.png'
        },
        {
            name:   'img6',
            img:    'assets/img/img6.png'
        }
    ]

    const grid          = document.querySelector('.grid');
    const result        = document.querySelector('#result');
    const restartBtn    = document.querySelector('.restart');
    let cardsChoosen    = [];
    let cardsChoosenId  = [];
    let cardsWon        = [];
    
    // Restart game
    restartBtn.addEventListener('click', restart);
    
    // Randomize cards
    cardArray.sort( () => 0.5 -Math.random() );
    
    // Create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src','assets/img/blank.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }

        // Adjust height of images
        let cards = document.querySelectorAll('img');
        let width = cards[0].clientWidth;
        cards.forEach( imgElem => {
            imgElem.height = width;
        });

        setTimeout(() => {
            let modal = document.querySelector('.modal');
            modal.style.display = 'none';
        }, 300);
    }
    createBoard();

    // Check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChoosenId[0];
        const optionTwoId = cardsChoosenId[1];
        if (cardsChoosen[0] === cardsChoosen[1]) {
            cards[optionOneId].setAttribute('src', 'assets/img/white.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/img/white.jpg');
            cardsWon.push(cardsChoosen);
        } else {
            cards[optionOneId].setAttribute('src', 'assets/img/blank.jpg');
            cards[optionTwoId].setAttribute('src', 'assets/img/blank.jpg');
        }
        cardsChoosen    = [];
        cardsChoosenId  = [];
        result.textContent = cardsWon.length * 100;
        if (cardsWon.length === cardArray.length/2) {
            let modal = document.querySelector('.modal');
            let loader = document.querySelector('.loader');
            let winnerImg = document.querySelector('.winner');
            loader.style.display = 'none';
            modal.style.display = 'flex';
            winnerImg.style.display = 'block';
            restartBtn.style.display = 'flex';
        }
    }

    // Flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChoosen.push(cardArray[cardId].name);
        cardsChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChoosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function restart() {
        location.reload();
    }
});