
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
    ev.preventDefault();
     if (ev.target.classList.contains('hexagon')){
        var data = ev.dataTransfer.getData('text');
        ev.target.appendChild(document.getElementById(data))
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
