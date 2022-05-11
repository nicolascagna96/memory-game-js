# Memory Game
![picture alt](/assets/images/memory-game-responsive.PNG "Game responsive in all devices")


This project is a quick game who has the aim to keep the users entertained but also to improve users' brain functions. Memory games give also space to critical thinking and that helps children nurture their attention to detail.


# Table of Content

1. [UX](#Ux)
   - [User Stories](#user-stories)
   - [User Goals](#user-goals)
   - [Requirements](#requirements)
2. [Features](#features)
   - [Existing Features](#existing-features)
   - [Start screen](#start-screen)
   - [Game Screen](#game-screen)
   - [Features to Implement](#features-left-to-implement)
3. [Technologies used](#technologies-used)
   - [Language Used](#language-used)
   - [Frameworks, Libraries & Tools](#libraries-framework--tools)
4. [Testing](#testing)
   - [Validator Testing](#w3c-html-validation)
   - [Further Testing](#further-testing)
5. [ Deployment](#deployment)
6. [Credits](#credits)
  

# UX 
## User Stories 
- The user wants to have fun and enjoy when playing this game.
- The user wants to win the game.
- The user wants to win the game using a lover number of lives.
## User Goals 
- In order to win the game the user needs to collect all the pairs of cards before that the lives end.
 ## Features
- Responsive in all devices.
- Interactive elements.
- Start Screen.
- Game Screen.
- End game alert.

This memory game is a linear game and when the player presses start the game board is created and shuffled. At the end of the game the user will get an allert message saying either "Win" or "Loss" and the game will automatically restart.
## Existing features

### Start Screen
The start screen consist of a start button and a footer.

- Start button.
  - When the user clicks on the Start button, he will be directed to the main board and the game will start.
- The footer.
  - The footer section includes the link of my GitHub profile. The link will open in a new tab of the browser, this creates a better user's experience.

![picture alt](/assets/images/start-screen.PNG "Start screen")

### Game Screen
Inside the game screen we can find three elements:
- Lives Count paragraph.
  - The user ha 15 lives in order to complete the game and pair all the 16 cards. Once that the Lives Count will be 0, the user will get a Loss message and the game will automatically restart.
- Game Board.
  - At the beginning of the game the 16 cards are shuffled and distribuited across the board. The game starts when the user click on the first card.
- The footer.
  - The footer section includes the link of my GitHub profile. The link will open in a new tab of the browser, this creates a better user's experience.
 
![picture alt](/assets/images/game-screen.PNG "Game screen")

## Features Left to Implement 
- I plan to add a screen after the "start button" with the rules of the game.
- Planning to add an End Game screen to show the Win or Loss message instead of having an alert window like now.

# Technologies Used

## Language Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "HTML5")
- [CSS3](https://en.wikipedia.org/wiki/CSS "CSS")
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript")

## Libraries, Framework & Tools
- [Font Awsome Library](https://fontawesome.com/account "Font Awsome")
- [Google Fonts](https://fonts.google.com/ "google fonts")
- [GitHub](https://github.com/ "GitHub")
- [Gitpod](https://gitpod.io/workspaces "Gitpod")
- [W3C HTML Validation Service](https://validator.w3.org/#validate_by_input "HTML Validator")
- [W3C CSS Validation Service](https://validator.w3.org/#validate_by_input "CSS Validator")
- [JSHint](https://jshint.com/ "JSHint")

# Testing
## W3C HTML Validation

![picture alt](/assets/images/html-validator.PNG "HTML validator")

## W3C CSS Validator

![picture alt](/assets/images/css-validator.PNG "Css Validator")

## JSHint Testing

![picture alt](/assets/images/js-validator.PNG "JavaScript Validator")

## Accessibility
![picture alt](/assets/images/accessibility.PNG "Accessibility")

## Further Testing
- I tested the all the screens works in different browsers: Chrome, Safari, Firefox and Edge.
- I confirmed that this project is responsive, looks good and works on all standard screens using the devtools device toolbar.

# Deployment
- The site was deployed to GitHub pages. The steps to deploy are as follows:
   - In the GitHub repository, navigate to the Settings tab
   - From the source section drop-down menu, select the Master Branch
   - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

   # Credits

   ## Content  

- [DevelopmentByEd](https://developedbyed.com/ "Development by Ed") I found his tutorial on Youtube really helpful, especially in creating the design of my game,
- [Dev Ed GitHub repository](https://github.com/developedbyed/ "Dev Ed GitHub repository") I checked also Ed Repository and his memory game to check his code.
- [Cosing Nepal Memory Quiz](https://www.codingnepalweb.com/build-memory-card-game-html-javascript/ "Coding Nepal") I used the images provided from Coding Nepal for my project.
- [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener "MDN") It helped me to understand the Event Listeners.

## Acknowledgment
- Martina Terlevic. A big thank you to my mentor Martina, who helps me a lot with this project!
