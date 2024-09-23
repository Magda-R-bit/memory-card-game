# Memory Cards 

Memory Cards Game is a fun and interactive web-based game designed for anyone looking to improve their memory skills. By matching pairs of cards, players can challange themselves and enhance their concentration while enjoying an engaging experience. 
The game consists of 18 cards (9 pairs). Before starting, players can read the rules by clicking the "How to Play" button.

Players have the option to start the game by clicking the "Start" button or simply flipping any card. Once the first pair of cards is clicked, a timer begins, and moves are tracked. Players can pause the game or restart it at any time, making it easy to take breaks and try again.

![Screenshot of Responsive Mockup](/assets/images/readMe/websiteMockup.png)

[Project live view](https://magda-r-bit.github.io/memory-card-game/)



## Contents
* [User Experience (UX)](#user-experience-ux) 
* [Features](#features)
* [Design](#design)
* [Technologies Used](#technologies-used)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## User Experience (UX)

-   ### User Stories:
      1. As a player, I want to read the game rules.
      2. As a player, I want to start a new game and pause at any time.
      3. As a player, I want to click on card to easily flip it, to see what image is on the other side.
      4. As a player, I want to match two cards, to remove them from the board.
      5. As a player, I want to restart the game at any time, so I can try again with a fresh start.
      6. As a player I want to see a congratulatory message when I match all the cards, so I know I have completed the game, with tracked moves and time.
      7. As a player, I want to see a game over message when I exceed the time limit, so that I know the game has ended.

      
## Features

#### Existing Features

* Title with logo and How To Play button
  - By clicking this button user can open and read the game rules.

  ![Screenshot of How to play button](/assets/images/readMe/howToPlay.png)

  - Icon with Instructions can be easily closed by clicking anywhere on the screen or on the close button.

  ![Screenshot of rules](/assets/images/readMe/rules.png)

* Home Page
  - The landing page features a clean and simple design including a logo, the game title, and 18 unflipped cards arranged in a grid.
  Player can interact with the game using four buttons: "How To Play", "Start", "Pause" and "Reset". 

  ![Screenshot of Home Page](/assets/images/readMe/homePage.png)

* Control Panel
  - The game includes a control panel with three buttons:"Start", "Pause" and "Reset". Additionally, the panel displays the recorded number of moves and elapsed time during gameplay.

  ![Screenshot of Control Panel](/assets/images/readMe/controlPanel.png)

* Winner Icon
  - When the player wins, the winner icon appears, displaying the tracked time and number of moves along with a celebratory confetti animation.

  ![Screenshot of winner icon](/assets/images/readMe/winnerIcon.png)

* Game Over Icon
  - If the player exceeds the time limit of 100 seconds, a game over icon appears, signaling the end of the game.

  ![Screenshot of game over icon](/assets/images/readMe/gameOver.png)


#### Future Features:
  1. Sound effect.
     - Introduce background music to make the experience more immersive.
  2. Multiple difficulty levels.
     - Add different difficulty modes with varying grid size.
  3. Themes.
     - Allow players to choose from different card themes (sports, fruits).
  4. Progressive gameplay.
     - Add levels, where the number of cards grows.



## Design

* Layout:
  - The game features are simple, grid-based with 18 cards, unflipped at the start of the game.
* Color:
  - The game uses a pink, purple, and blue shades promoting positive atmosphere.

  ![Screenshot of colors](/assets/images/readMe/colors.png)

* Title:
  - "Yeseva" font family from Google Fonts, is chosen to create the title, and rules for this game. 

* Logo and cards images:  
  - Icons from Flaticon are used to create both, the game logo, and the images on the cards.

### Wireframes

![Screenshot of desktop](/assets/images/readMe/desktopWireframe.png)
![Screenshot of tablet](/assets/images/readMe/tabletWireframe.png)
![Screenshot of mobile](/assets/images/readMe/mobileWireframe.png)


## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)


## Content
### Frameworks, Libraries & Programs Used



-   [Git:](https://git-scm.com/)
-   [GitHub:](https://github.com/)
-   [Flaticon](https://www.flaticon.com/) Images for cards, logo and favicon.
-   [Pattern Monstera](https://pattern.monster/zebra) Crads background. 
-   [Figma:](https://www.figma.com/) 
-   [Favicon:](https://favicon.io/favicon-converter/)
-   [Confetti](https://www.cssscript.com/confetti-falling-animation/)
-   [Google Fonts:](https://fonts.google.com/)
-   Chrome dev tools to troubleshoot, test and check responsiveness of features.
    
## Testing

### Manual Test Cases and Results
* Testing completed on the below browser:
  - Chrome
  - DuckDuckGo
  - Edge
  - FireFox


 ### Automated Validator Testing

- [HTML Validator](https://validator.w3.org/)

![Screenshot of html test](/assets/images/readMe/htmlTest.png)

- [CSS Validator](https://jigsaw.w3.org/css-validator/)

![Screenshot of css test](/assets/images/readMe/cssTest.png)

- [JSHint Validator](https://jshint.com/)

![Screenshot of js test](/assets/images/readMe/jsTest.png)

- [PageSpeed](https://pagespeed.web.dev/)

![Screenshot of web speed](/assets/images/readMe/webMobileTest.png)

![Screenshot of desktop test](/assets/images/readMe/desktopTest.png)

## Bugs
* Images not loading with URL.
  - In earlier versions of the project, images for the cards were loaded from the a json file. However, after deploying my project, I have noticed, that cards appear blank when flipped. The images failed to load.

* Solution.
  - To fix this bug, I verified the path in json file and ensure was correct.
  - I have moved data folder with json file into assets folder and changed the path in json file. 

### Unfixed Bugs
* No unfixed bugs.

## Deployment

### Version Control
 - The site was developed using Gitpod editor and pushed to GitHub, to the remote repository memory-card-game.
 - Git commands were utilized to push the code to the repository.

### Deployment to Github Pages
 - This website was deployed to GitHub Pages with the following steps:
  - Navigate to the repository on GitHub
  - Go to the settings tab in repository
  - Scroll down to the "Pages" section
  - Select the branch
  - Under "Source" select the branch to deploy ('main')
  - Save the settings
 - Link to the website: [Memory Cards Game](https://magda-r-bit.github.io/memory-card-game/)

### How to clone the repository
 - Go to the https://magda-r-bit.github.io/memory-card-game/ repository on GitHub
 - Click on the Code button located above the project file
 - Click on HTTPS and copy the repository link
 - Open the IDE and paste the copied git url into the IDE terminal
 - Project is created as a local clone


## Credits
 - **Special Thanks**:
   - **Spencer Barriball**- For your mentorship. Your insights and advices were crucial to the success of this project.


### Inspiration
- [JavaScript Academy](https://www.youtube.com/watch?v=xWdkt6KSirw)
- [CodeCreative](https://www.youtube.com/watch?v=mohIQB_70Xk)
- [CodingNepal](https://www.youtube.com/watch?v=DABkhfsBAWw)
- [PortEXE](https://www.youtube.com/watch?v=3uuQ3g92oPQ&t=0s)
- [w3schools](https://www.w3schools.com/howto/howto_css_modals.asp) Modal Box for rules icon.
- [stackoverflow](https://stackoverflow.com/) Used to fix the bug.
- [Louibens](https://louibens.github.io/PP2-The-World-Quiz/) Used to create README file structure. 





