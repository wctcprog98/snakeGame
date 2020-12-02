const grid = document.querySelector(".grid");
const startButton = document.getElementById("start");
const score = document.getElementById('score'); 
let squares = []; 
let currentSnake = [2,1,0];
let direction = 1; 
let width = 10;
let height = 10; 

function createGrid() {
     //create 100 divs
    for(let i = 0; i  < 100; i++) {
       //variable to store 100 divs
        const square = document.createElement('div');
         //apply styling to div through css by adding class
        square.classList.add('square');
          //put div's into the grid(.grid)
        grid.appendChild(square); 
         //push into new array
        squares.push(square);
    }
}

createGrid();
currentSnake.forEach(index=> squares[index].classList.add('snake'));

function move() {
    //remove last element from current snake
    const tail = currentSnake.pop();
    
    //remove styling from last element
    squares[tail].classList.remove('snake'); 

    //add square in direction we are moving
    currentSnake.unshift(currentSnake[0] + direction);
    console.log(currentSnake);
    //add styling so we can see it moving
    squares[currentSnake[0]].classList.add('snake');
}

move(); 

//calls a function and runs it until clear is called or window is called
let timerID = setInterval(move, 1000);
// clearInterval(timerID); 

//keycodes for arrow keys for movement
//39 is right
//38 is up arow
//37 is left
//40 is down arrow


function control(e) {
    if(e.keyCode === 39){
        console.log('right pressed');
        direction = 1;  
    }
    else if (e.keyCode === 38) {
        console.log('up pressed');
        direction = -width
        }
    else if(e.keyCode === 37){
        console.log('left pressed'); 
        direction = -1; 
    }
    else if(e.keyCode === 40) {
        console.log("down pressed"); 
        direction = +width; 
    }
}

document.addEventListener('keyup',control)

// control(); 