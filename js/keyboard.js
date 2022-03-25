class Keyboard{
    constructor(){
        this.black = "rgb(10, 10, 10)";
        this.gray = "rgb(129, 131, 132)";
        this.white = "rgb(255, 25, 255)";
        this.yellow = "rgb(255, 205, 0)";
        this.red = "rgb(218, 41, 28)";
        //this.letterElement = document.getAttribute("data-key");
        this.keyboardStates = {
            a:this.gray,
            b:this.gray,
            c:this.gray,
            d:this.gray,
            e:this.gray,
            f:this.gray,
            g:this.gray,
            h:this.gray,
            i:this.gray,
            j:this.gray,
            k:this.gray,
            l:this.gray,
            m:this.gray,
            n:this.gray,
            o:this.gray,
            p:this.gray,
            q:this.gray,
            r:this.gray,
            s:this.gray,
            t:this.gray,
            u:this.gray,
            v:this.gray,
            w:this.gray,
            x:this.gray,
            y:this.gray,
            z:this.gray,
            ä:this.gray,
            ö:this.gray,
            ü:this.gray,
            ß:this.gray
        };
        this.charArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", 
        "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ä", "ö", "ü", "ß"]
    }

    updateKeyboardStatesRed(letter){
        this.keyboardStates[letter] = this.red;
        //const keyboardKey = letter.getAttribute("data-key");
        console.log(letter)
    }

    updateKeyboardStatesYellow(letter){
        if(this.keyboardStates[letter] === this.red){
            return;
        }
        else{
            this.keyboardStates[letter] = this.yellow;
        }
    }
    updateKeyboardStatesBlack(letter){
        if(this.keyboardStates[letter] === this.red){
            return;
        }
        if(this.keyboardStates[letter] === this.yellow){
            return;
        }
        else{
            this.keyboardStates[letter] = this.black;
        }

    }
    updateKeyboard(){
        for(let i = 0; i < 30; i++){
            let letter = this.charArray[i];
            let color = this.keyboardStates[letter];
            let element = document.getElementById(letter);
            element.style = `background-color:${color};`;
            /*
            if(color === this.black){
                element.style = `border:${1};`;
            }
            */
            
        }
    }

}