
class Squares {
    constructor(){
        this.black = "rgb(0, 0, 0)";
        this.gray = "rgb(40, 40, 40)";
        this.yellow = "rgb(255, 205, 0)";
        this.red = "rgb(218, 41, 28)";
        this.states = [this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray, this.gray]

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
    this.charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ä", "ö", "ü", "ß"]
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

    setColorStates(currentWord, words, keys){
        //assigns red values first
        currentWord.forEach((letter, index) => {
            const letterPosition = words.solution.charAt(index);
            const isCorrectPosition = (letter === letterPosition);
            if(isCorrectPosition){
                this.tally[letter] += 1;
                this.states[index] = this.red;
                keys.updateKeyboardStatesRed(letter)
            }
        });
        //distribute remainder
        currentWord.forEach((letter, index) => {
            const isLetterInWord = words.solution.includes(letter);
            if(isLetterInWord){
                this.tally[letter] += 1;
                if(this.tally[letter] <= this.total[letter]){
                    this.states[index] = this.yellow;
                    keys.updateKeyboardStatesYellow(letter);
                }
                else{
                    keys.updateKeyboardStatesBlack(letter);
                }
            }
        });
        console.log(keys.keyboardStates)

    }
    

    getTileColor(index){
        let color = this.states[index];
        return color;
    }

    resetTally(){
        for(let i = 0; i < 30; i++){
            let value = this.charArray[i];
            this.tally[value] = 0;
        }
    }

    resetStates(){
        for(let i = 0; i < 27; i++){
            this.states[i] = this.gray;
        }
    }

    setCharArray(words){
        for(let i = 0; i < words.solution.length; i++){
            let value = words.solution[i];
            this.total[value] += 1;
        }
    }
}