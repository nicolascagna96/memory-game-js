const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 15;
const hide = document.querySelector('.hide');

playerLivesCount.textContent = playerLives;

//Generate the data
const getData = () => [
    { imgSrc: "assets/images/img-1.png", name: "card1"},
    { imgSrc: "assets/images/img-2.png", name:"card2"},
    { imgSrc: "assets/images/img-3.png", name:"card3"},
    { imgSrc: "assets/images/img-4.png", name:"card4"},
    { imgSrc: "assets/images/img-5.png", name:"card5"},
    { imgSrc: "assets/images/img-6.png", name:"card6"},
    { imgSrc: "assets/images/img-7.png", name:"card7"},
    { imgSrc: "assets/images/img-8.png", name:"card8"},
    { imgSrc: "assets/images/img-1.png", name:"card1"},
    { imgSrc: "assets/images/img-2.png", name:"card2"},
    { imgSrc: "assets/images/img-3.png", name:"card3"},
    { imgSrc: "assets/images/img-4.png", name:"card4"},
    { imgSrc: "assets/images/img-5.png", name:"card5"},
    { imgSrc: "assets/images/img-6.png", name:"card6"},
    { imgSrc: "assets/images/img-7.png", name:"card7"},
    { imgSrc: "assets/images/img-8.png", name:"card8"},
];

//Randomize array

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

cardGenerator = () => {
    const cardData = randomize();

//Genearte HTML in loop
cardData.forEach((item, index) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');
        card.classList = "card";
        face.classList = 'face';
        back.classList = 'back';

        //Attach info to the cards
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
        card.classList.toggle('toggleCard');
        checkCards(e);

        })
    });
};

//Checking Cards
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll(".toggleCard");
    clickedCard.classList.add('flipped');


    //Logic
    
    if (flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute("name") === 
            flippedCards[1].getAttribute("name")
        ) {
            console.log('match');
            flippedCards.forEach((card) => {
             card.classList.remove('flipped');
             card.style.pointerEvents="none";   
            });
        } else {
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');
                card.classList.remove('toggleCard');
                setTimeout(() => card.classList.remove('toggleCard'), 1000)
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart("You lost!");
            }
        }
    }

    if(toggleCard.length === 16){
        restart("You win!");
    }
};
