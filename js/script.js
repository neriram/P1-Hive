
//Global Variables
var draggables = document.getElementById('gamepieces');

//Drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(event) {

    event.dataTransfer.setData('text', event.target.id);
}
function drop(ev) {
    console.log(ev.target);
    ev.preventDefault();
     if (ev.target.classList.contains('hexagon')){
        var data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data))
        //console.log(ev.target.children)
     }
}

//Drag Functions
function dragStart() {
}

function dragEnd() {
}
//Reset game button to clear gameboard and return pieces to their div
 document.getElementById('button').addEventListener('click', resetGame);
 function resetGame() {
     var player1Bugs = document.querySelectorAll('.player1');
     player1Bugs.forEach(bug => {
        document.querySelector('#gamepieces').appendChild(bug);
     });
     var player2Bugs = document.querySelectorAll('.player2');
     player2Bugs.forEach(bug => {
        document.querySelector('#redGamepieces').appendChild(bug);
     });
 }

 //function to detect placement of bee piece
v
//function to detect loser

//player 1 bee surrounded 
// const bee1 = document.getElementById('item one')
// //player 2 bee surrounded
// const bee2 = document.getElementById('item two one')

// if (bee1 = )
// //