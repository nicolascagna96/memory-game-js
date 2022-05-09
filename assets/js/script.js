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
