
class Handles {
    constructor(){
        //this.checkpoints = [1, 28, 55, 82, 109, 136]
        
    }

    handleEnteredWord(words, squares, keys){
        const currentWord = words.getCurrentWord();
        const timeInterval = 50;
        const firstLetterId = words.guessedWordCount * 27 + 1;
        const currentWordString = currentWord.join('');
        //Errors

        if(currentWord.length !== 27){
            window.alert("Must be 27 characters");
            return;
        }
        /*
        Uncomment this part when finished debugging. Checks to make sure input is a real word


        if(!words.wordBank.includes(currentWordString)){
            window.alert("Word Not In Word List")
            return;
        }
        */



        //Animate Submission
        squares.resetStates();
        squares.setColorStates(currentWord, words, keys);

        for(let index = 0; index < 27; index++){
            setTimeout(() => {
                const tileColor = squares.getTileColor(index);
                const letterId = firstLetterId + index;
                const letterElement = document.getElementById(letterId);
                letterElement.classList.add("animate__flipInX");
                letterElement.style = `background-color:${tileColor};boarder-color:${tileColor}`;

            }, timeInterval * index);
        };

        squares.resetTally();
        


        words.guessedWordCount += 1;

        //Endgame Messages
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
        let index = words.guessedWordCount
        if(words.guessedWords[index].length === 0){
            return;
        }
        const currentWord = words.getCurrentWord();
        const removedLetter = currentWord.pop();
        const lastLetterElement = document.getElementById(String(words.spaceIndex - 1));

        words.guessedWords[words.guessedWords.length - 1] = currentWord;
        lastLetterElement.textContent = '';
        words.spaceIndex = words.spaceIndex - 1;



    }
    handleInputClick(target, words, squares, keys){
        const letter = target.getAttribute("data-key");

        if(letter === 'enter'){
            this.handleEnteredWord(words, squares, keys);
            return;
        }
        if(letter === 'del'){
            this.handleDeletedLetter(words);
            return;
        }

        words.updateGuessedWord(letter);
    }

    handleInputKeypress(key, words, squares, keys){

        if(key === 'Enter'){
            this.handleEnteredWord(words, squares, keys);
            return;
        }
        if(key === 'Delete' || key === 'Backspace'){
            this.handleDeletedLetter(words);
            return;
        }
        let lower_letter = key.toLowerCase();
        let test = squares.charArray.includes(lower_letter);
        if(test === false){
            return;
        }

        words.updateGuessedWord(key);
    }
}