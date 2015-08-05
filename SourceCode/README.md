## Introduction

The Side Scroller was developed as a team project for the JavaScript UI & DOM course in Telerik Academy by the "Rusty Nail" team.

## Team Members

| Name              | Username      |
|-------------------|---------------|
|Zhenya Racheva     |zhenia.racheva |
|Pavel Dobranov     |Pavel_Dobranov |
|Stoyan	Uzunov      |suzunov        |
|Petar Metodiev     |Twick          |
|Galin Ivanov       |reddog         |
|Georgi Petrov      |BladeScar      |
|Petar Dimanov      |pdimanov       |

## Game Description

###  Gameplay

The player controls soldier. He can move left and right, jump, squat and shoot. The player's objective is to destroy all the enemies and reaches the teleport. The teleport will take player to the next level.

### Controls

<kbd>↑</kbd> `Jump`

<kbd>↓</kbd> `Squat`

<kbd>←</kbd> `Move Left`

<kbd>→</kbd> `Move Right`

<kbd>Space</kbd> `Fire`

### Programming Details

#### Built-in Modules
  - Scenes
  - Sprites
  - 2D
  - Input
  - Touch
  - TMX
  - UI
  - Anim

#### Custom Modules

  - Objects
    - Player
    - Marine
    - Mummy
    - Grinder
    - Bullet
  - Components
    - creature
    - enemy
    - weapon
    - teleport
    - aiPatrool
  - Scenes
    - startGameScene
    - playFactoryScene
    - levelCompleteScene
    - gameOverScenes

### Running the project on local machine

  - install [Node.js](https://nodejs.org/)
  - install [Bower](http://bower.io/)
    - Open CMD/Terminal and run `npm install -g bower`
  - Checkout the repository
  - Open CMD/Terminal and navigate to the "SourceCode" folder
    - Run `npm install`
    - Run `bower install`
    - Run `node server.js`

  - Open a new browser tab, and navigate to the following url: `http://localhost:3030/`
