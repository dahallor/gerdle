
class Squares {
    constructor(){

    }
    
    createSquares() {
        const gameBoard = document.getElementById("board");

        for(let index = 0; index < 162; index++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }
    getTileColor(letter, index, words){
        const isLetterInWord = words.solution.includes(letter);
        const letterPosition = words.solution.charAt(index);
        const isCorrectPosition = (letter === letterPosition);

        if (!isLetterInWord){
            //returns black
            return "rgb(40, 40, 40)";
        }

        if(isCorrectPosition){
            //returns red
            return "rgb(218, 41, 28)";
        }
        if(isLetterInWord && !isCorrectPosition){
            return "rgb(255, 205, 0)";
        }

    }
}