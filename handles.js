
class Handles {
    constructor(){
        this.status = "continue"
        
    }

    handleEnteredWord(words, squares, keys, states, color){
        const currentWord = words.getCurrentWord();
        const timeInterval = 50;
        const firstLetterId = words.guessedWordCount * 27 + 1;
        const currentWordString = currentWord.join('');
        //Errors

        if(currentWord.length !== 27){
            window.alert("Must be 27 characters");
            return;
        }
        //Checks to make sure input is a real word. Comment out for easier debugging

        if(!words.wordBankLowercase.includes(currentWordString)){
            window.alert("Word Not In Word List")
            return;

       }



        //Animate Submission

        if(localStorage.getItem('refreshed') === 'false'){ 
            squares.resetStates(states, color);
            squares.setColorStates(currentWord, words, keys, states, color); 
            for(let index = 0; index < 27; index++){
                setTimeout(() => {
                    const tileColor = squares.getTileColor(index, states);
                    const letterId = firstLetterId + index;
                    const letterElement = document.getElementById(letterId);
                    letterElement.classList.add("animate__flipInX");
                    letterElement.style = `background-color:${tileColor};boarder-color:${tileColor}`;

                }, timeInterval * index);
            };

        };
        if(localStorage.getItem('refreshed') === 'true'){
            //Previous Gameboard Session
            var count = 0;
            const storedStatesString = localStorage.getItem('gameboard state all');
            const storedStatesArray = JSON.parse(storedStatesString);

            for(let i = 0; i < 6; i++){
                if(storedStatesArray[i].length > 1){
                    count += 1;
                }
            }
            for(let i = 0; i < count; i++){
                var firstLetterId2 = i * 27 + 1;
                for(let j = 0; j < 27; j++){
                    var tileColor = storedStatesArray[i][j];
                    var letterId = firstLetterId2 + j;
                    var letterElement = document.getElementById(letterId);
                    letterElement.classList.add("animate__flipInX");
                    letterElement.style = `background-color:${tileColor};boarder-color:${tileColor}`;
                }
            }
            //Previous Keyboard Session
            keys.updateKeyboard(words, states)

        }

        squares.resetTally(words);
        states.setGuesses(words)
        words.guessedWordCount += 1;
        localStorage.setItem('game progress', "in progress")

        //Endgame Messages
        if (currentWordString === localStorage.getItem('solution')){
            localStorage.setItem('game progress', "win")
            window.alert("Wunderbar!");
            let statsString = localStorage.getItem('stats')
            let stats = JSON.parse(statsString)
            stats["Total Games Played"] += 1
            stats["Total Games Won"] += 1
            if(words.guessedWordCount === 1){
                stats["Won in 1 Guess"] += 1
            }
            if(words.guessedWordCount === 2){
                stats["Won in 2 Guesses"] += 1
            }
            if(words.guessedWordCount === 3){
                stats["Won in 3 Guesses"] += 1
            }
            if(words.guessedWordCount === 4){
                stats["Won in 4 Guesses"] += 1
            }
            if(words.guessedWordCount === 5){
                stats["Won in 5 Guesses"] += 1
            }
            if(words.guessedWordCount === 6){
                stats["Won in 6 Guesses"] += 1
            }
            localStorage.setItem('stats', JSON.stringify(stats))
            this.status = "halt"
            return;
        }

        if(words.guessedWords.length === 6){
            localStorage.setItem('game progress', "lose")
            let solution = localStorage.getItem('solution')
            window.alert(`Gesundheit. Das Wort war ${solution}`);
            let statsString = localStorage.getItem('stats')
            let stats = JSON.parse(statsString)
            stats["Total Games Played"] += 1
            stats["Total Games Lost (Like a Loser)"] += 1
            localStorage.setItem('stats', JSON.stringify(stats))
            this.status = "halt"
            return;
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
    handleInputClick(target, words, squares, keys, states, colors){
        if(this.status === "continue"){
            const letter = target.getAttribute("data-key");

            if(letter === 'enter'){
                this.handleEnteredWord(words, squares, keys, states, colors);
                return;
            }
            if(letter === 'del'){
                this.handleDeletedLetter(words);
                return;
            }

            words.updateGuessedWord(letter);
        }
    }

    handleInputKeypress(key, words, squares, keys, states, colors){
        if(this.status === "continue"){
            if(key === 'Enter'){
                this.handleEnteredWord(words, squares, keys, states, colors);
                return;
            }
            if(key === 'Delete' || key === 'Backspace'){
                this.handleDeletedLetter(words);
                return;
            }
            let lower_letter = key.toLowerCase();
            let test = words.charArray.includes(lower_letter);
            if(test === false){
                return;
            }

            words.updateGuessedWord(key);
        }
    }
}