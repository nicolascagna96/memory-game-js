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

        });
    });
};

//Checking Cards
const checkCards = (e) => {
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
             flippedCards.forEach((card) => {
             card.classList.remove('flipped');
             card.style.pointerEvents="none";   
            });
    } else {
            flippedCards.forEach((card) => {
            card.classList.remove('flipped');
            card.classList.remove('toggleCard');
            setTimeout(() => card.classList.remove('toggleCard'), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if(playerLives === 0) {
                restart("You've lost! Try Again!");
            };
        };
    };

    if(toggleCard.length === 16){
        restart("Congratulations! You have won!");
    };
};

//Restart the Game
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');

    setTimeout(() => {
    cards[index].style.pointerEvents = 'all';
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    section.stylepointerEvents = 'all';
       }, 1000);

    });

    playerLives = 15;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text), 1000);
};

 cardGenerator();

 //start button

 const startButton = document.getElementById('start-btn');
 startButton.addEventListener('click', startGame);

 function startGame() {
    startButton.classList.add('hide');
    section.classList.remove('hide');
    hide.classList.remove('hide');
    
  };