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

    // Create board
    const grid = document.querySelector('.grid');


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src','assets/img/blank.png');
            card.setAttribute('data-id', i);
            //card.addEventListener('click', flipcard());
            grid.appendChild(card);
        }
    }

    createBoard();
});