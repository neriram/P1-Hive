console.log ('this is my game')


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
        console.log(ev.target.children)
     }
}

//Drag Functions
function dragStart() {
}

function dragEnd() {
}
//Reset game button to clear gameboard
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

//function to detect bug 
// if bug is in div then dont allow move if it is true then allow move

