document.addEventListener("DOMContentLoaded", () => {
    createSquares();
    
    let letters = document.querySelectorAll('.keyboard-row button');
    let guessedWords = [[]];
    let guessedWordCount = 0;
    let spaceIndex = 1;
    let word = "aaaaaaaaaaaaaaaaaaaaaaaaaaa";


    function getCurrentWord(){
        const numWordsGuessed = guessedWords.length;
        return guessedWords[numWordsGuessed - 1];
    }

    function updateGuessedWord(letter){
        const currentWord = getCurrentWord();

        if(currentWord && currentWord.length < 27){
            currentWord.push(letter);
            const spaceIndexElement = document.getElementById(String(spaceIndex));
            spaceIndex = spaceIndex + 1;

            spaceIndexElement.textContent = letter;
        }

    }
    function createSquares() {
        const gameBoard = document.getElementById("board");

        for(let index = 0; index < 162; index++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }
    function handleEnteredWord(){
        const currentWord = getCurrentWord();
        const timeInterval = 150;
        const firstLetterId = guessedWordCount * 27 + 1;
        //Errors
        if(currentWord.length !== 27){
            window.alert("Must be 27 characters");
        }


        //Animate Submission
        currentWord.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = "rgb(60, 60, 60)";
                const letterId = firstLetterId + index;
                const letterElement = document.getElementById(letterId);
                letterElement.classList.add("animate__flipInX");
                letterElement.style = `background-color:${tileColor};boarder-color:${tileColor}`;

            }, timeInterval * index);
        });

        guessedWordCount += 1;

        const currentWordString = currentWord.join('');
        if (currentWordString === word){
            window.alert("Wunderbar!");
        }
        if(guessedWords.length === 6){
            window.alert(`Gesundheit. Das Wort war ${word}`);
        }
        guessedWords.push([]);
    }


    for(let i = 0; i < letters.length; i++){
        letters[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if(letter === 'enter'){
                handleEnteredWord();
                return;
            }

            updateGuessedWord(letter);
        }

    }

})