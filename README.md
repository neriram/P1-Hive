# P1-Hive Game

This is a simplified, computerized version of the award winning game Hive. The object of the game is to surround your opponent's queen bee using creature pieces that move in unique ways. 

## About the Game
The game is played with two people. Each player has 7 hexagon-shaped pieces with the following creatures: 1 queen bee, 2 beetles, 2 ants and 2 grasshoppers. Pieces are displayed face up on the board. 

### Playing the game
The game begins when the a player places a piece on the gamespace (the hive). The next player places a piece touching the edge of the first piece played. Players alternate turns and can either place a new piece or move an existing piece. The queen bee must be placed by the fourth move. The game ends when a queen bee is surrounded on all 6 sides by pieces of any color.

### Rules

* When a player places a bug onto the hive it must be placed touching another piece.
* The hive must NEVER be broken

The creatures move in specific ways:

Queen bee: can move in any direction, one space at a time

Beetle: moves one space per turn

Ant: can move any number of spaces along the perimeter of the pieces placed the hive

Grasshopper: can jump over any number of pieces to any unoccupied space in a straight line



## Wireframe
![](https://i.imgur.com/aKWCpyI.jpg)

## MVP
- [ ] Instructions for playing the game 
- [ ] The game space is rendered as a hive 
- [ ] Game pieces rendered
- [ ] "Zen" game state where one player can drag pieces onto hive
- [ ] The game pieces can be dragged and dropped on gamespace
    - [ ] Add a click event to tile piece where on click, the location of the tile becomes the user's mouse location
    - [ ] If tile is currently being "dragged" by user and there is a click event, "drop" the piece in the matching game board section that the user is trying to drop the piece on
    - [ ] Change the position/xy values of the piece image to now match the gameboard position to achieve this effect
- [ ] Reset button returns game pieces to their original spot

 
## Stretch Goals

- [ ] Two players
- [ ] Game logic function that checks if piece is allowed to be moved in that way or not
- [ ] Illegal moves are detected and denied
- [ ] Sound effect when the queen bee is surrounded
- [ ] Game end state detects when a queen bee is fully surrounded and winner is declared

## Technologies
* HTML/CSS/JavaScript


#### References
https://www.codesmite.com/article/how-to-create-pure-css-hexagonal-grids
https://csshexagon.com/
