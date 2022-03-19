document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    let letters = document.querySelectorAll('.keyboard-row button');
    let guessedWords = [[]];
    let spaceIndex = 1;

    for(let i = 0; i < letters.length; i++){
        letters[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");
            updateGuessedWord(letter);
        }

    }
    function getCurrentWord(){
        const numWordsGuessed = guessedWords.length;
        return guessedWords[numWordsGuessed - 1];
    }

    function updateGuessedWord(letter){
        const currentWord = getCurrentWord();

        if(currentWord && currentWord.length < 27){
            currentWord.push(letter);
            const spaceIndexElement = document.getElementById(String(1));
            spaceIndex = spaceIndex + 1;

            spaceIndexElement.textContent = letter;
        }

    }
    function createSquares() {
        const gameBoard = document.getElementById("board");

        for(let index = 0; index < 162; index++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }



})