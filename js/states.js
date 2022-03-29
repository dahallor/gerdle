class States {
    constructor(color){
        this.gameboardColorStatesAll = [[], [], [], [], [], []]
        this.gameboardColorStates = [color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray, color.gray]
        this.keyboardStates = {
            a:color.lightGray,
            b:color.lightGray,
            c:color.lightGray,
            d:color.lightGray,
            e:color.lightGray,
            f:color.lightGray,
            g:color.lightGray,
            h:color.lightGray,
            i:color.lightGray,
            j:color.lightGray,
            k:color.lightGray,
            l:color.lightGray,
            m:color.lightGray,
            n:color.lightGray,
            o:color.lightGray,
            p:color.lightGray,
            q:color.lightGray,
            r:color.lightGray,
            s:color.lightGray,
            t:color.lightGray,
            u:color.lightGray,
            v:color.lightGray,
            w:color.lightGray,
            x:color.lightGray,
            y:color.lightGray,
            z:color.lightGray,
            ä:color.lightGray,
            ö:color.lightGray,
            ü:color.lightGray,
            ß:color.lightGray
        };
    }

    setGuesses(words){
        const index = words.guessedWordCount;
        const currentWord = words.getCurrentWord();
        const guessArrayString = localStorage.getItem('guesses');
        const guessArray = JSON.parse(guessArrayString);
        guessArray[index] = currentWord
        localStorage.setItem('guesses', JSON.stringify(guessArray))
        
    }

    setGameboardStatesCurrent(){
        localStorage.setItem('gameboard state current', this.gameboardColorStates)
    }

    
    setGameboardStatesAll(currentWordIndex){
        const gameStateString = localStorage.getItem('gameboard state all')
        const gameStateArray = JSON.parse(gameStateString)
        gameStateArray[currentWordIndex] = this.gameboardColorStates
        localStorage.setItem('gameboard state all', JSON.stringify(gameStateArray))
    }

    getGamboardStates(size){
        const gameStateString = localStorage.getItem('gameboard state all')
        const gameStateArray = JSON.parse(gameStateString)
        for(let i = 0; i < size; i++){

        }
    }

    setKeyboardStates(){
        localStorage.setItem('keyboard state', this.keyboardStates)
    }

    getKeyboardStates(){
        const keyboardStatesString = localStorage.getItem('keyboard state');
        const keyboardStatesHash = JSON.parse(keyboardStatesString);
        return keyboardStatesHash
    }

}