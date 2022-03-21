
class Handles {
    constructor(){

    }

    handleEnteredWord(words, squares){
        const currentWord = words.getCurrentWord();
        const timeInterval = 150;
        const firstLetterId = words.guessedWordCount * 27 + 1;
        //Errors
        if(currentWord.length !== 27){
            window.alert("Must be 27 characters");
            return;
        }
        //Animate Submission
        currentWord.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = squares.getTileColor(letter, index, words);
                const letterId = firstLetterId + index;
                const letterElement = document.getElementById(letterId);
                letterElement.classList.add("animate__flipInX");
                letterElement.style = `background-color:${tileColor};boarder-color:${tileColor}`;

            }, timeInterval * index);
        });

        words.guessedWordCount += 1;

        const currentWordString = currentWord.join('');
        if (currentWordString === words.solution){
            window.alert("Wunderbar!");
            throw "stop execution";
        }
        if(words.guessedWords.length === 6){
            window.alert(`Gesundheit. Das Wort war ${words.solution}`);
            throw "stop execution";
        }
        words.guessedWords.push([]);
    }

    handleDeletedLetter(words){
        const currentWord = words.getCurrentWord();
        const removedLetter = currentWord.pop();
        const lastLetterElement = document.getElementById(String(words.spaceIndex - 1));
        words.guessedWords[words.guessedWords.length - 1] = currentWord;
        lastLetterElement.textContent = '';
        words.spaceIndex = words.spaceIndex - 1;


    }
    handleInput(target, words, squares){
        const letter = target.getAttribute("data-key");

        if(letter === 'enter'){
            this.handleEnteredWord(words, squares);
            return;
        }
        if(letter === 'del'){
            this.handleDeletedLetter(words);
            return;
        }

        words.updateGuessedWord(letter);
    }
}