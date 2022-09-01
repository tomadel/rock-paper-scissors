let getUserMove = prompt("Please enter your move:","Rock, Paper or Scissors").toLowerCase();


let userMove = getUserMove.charAt(0).toUpperCase() + getUserMove.slice(1);

alert(userMove);

function getComputerMove (){
    if (Math.floor(Math.random()*3) === 0){
        return "Rock";
    }else if (Math.floor(Math.random()*3) ===1 ){
        return "Paper";
    }else{
        return "Scissors";
    }
    
    
}

let computerMove = getComputerMove();
alert(computerMove);


function whoWin (){
    if ( userMove === computerMove){
        return "Tie";

    }else if( computerMove === "Rock" ){
        if ( userMove === "Scissors"){
            return "Computer Wins!";
        }else{
            return "You Win!";
        }
    }else if (computerMove === "Paper"){
        if (userMove === "Rock"){
            return "Computer Wins!";
        }else{
            return "You Win!";
        }
    }else if ( computerMove === "Scissors" ){
        if ( userMove === "Paper" ){
            return "Computer Wins!";
        }else{
            return "You Win!";
        }
    }else{
        return "Something went so wrong!";
    }
}

let gameResult = whoWin();

alert(gameResult);