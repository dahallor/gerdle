
class Squares {
    constructor(){
        this.total = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
        ä:0,
        ö:0,
        ü:0,
        ß:0
    };

    this.tally = {
        a:0,
        b:0,
        c:0,
        d:0,
        e:0,
        f:0,
        g:0,
        h:0,
        i:0,
        j:0,
        k:0,
        l:0,
        m:0,
        n:0,
        o:0,
        p:0,
        q:0,
        r:0,
        s:0,
        t:0,
        u:0,
        v:0,
        w:0,
        x:0,
        y:0,
        z:0,
        ä:0,
        ö:0,
        ü:0,
        ß:0
        };
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

    setColorStates(currentWord, words, keys, states, color){
        if(localStorage.getItem('refreshed') === 'false'){
            //assigns red values first
            currentWord.forEach((letter, index) => {
                const letterPosition = words.solution.charAt(index);
                const isCorrectPosition = (letter === letterPosition);
                if(isCorrectPosition){
                    this.tally[letter] += 1;
                    states.gameboardColorStates[index] = color.red;
                    keys.updateKeyboardStatesRed(letter, states, color)
                    
                }
            });
            //distribute remainder
            currentWord.forEach((letter, index) => {
                const letterPosition = words.solution.charAt(index);
                const isCorrectPosition = (letter === letterPosition);
                const isLetterInWord = words.solution.includes(letter);

                if(isLetterInWord && !isCorrectPosition){
                    console.log(letter)
                    console.log(this.tally)
                    console.log(this.total)
                    this.tally[letter] += 1;
                    if(this.tally[letter] <= this.total[letter]){
                        states.gameboardColorStates[index] = color.yellow;
                        console.log(states.gameboardColorStates[index])
                        keys.updateKeyboardStatesYellow(letter, states, color)
                        
                    }
                }
                if(!isLetterInWord){
                    
                keys.updateKeyboardStatesBlack(letter, states, color)
                    
                }
            });
            keys.updateKeyboard(words, states);
            states.setGameboardStatesCurrent();
            states.setGameboardStatesAll(words.guessedWordCount)
        }

    }


    getTileColor(index, states){
        let color = states.gameboardColorStates[index];

        return color;
    }

    resetTally(words){
        for(let i = 0; i < 30; i++){
            let value = words.charArray[i];
            this.tally[value] = 0;
        }
    }

    resetStates(states, color){
        for(let i = 0; i < 27; i++){
            states.gameboardColorStates[i] = color.gray;
        }
    }

    setCharArray(words){
        for(let i = 0; i < words.solution.length; i++){
            let value = words.solution[i];
            this.total[value] += 1;
        }
    }
}