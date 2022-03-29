class Keyboard{
    constructor(){


    }

    updateKeyboardStatesRed(letter, states, color){
        states.keyboardStates[letter] = color.red;
        let currentColor = color.red
        this.updateLocalStorage(letter, currentColor)
    }

    updateKeyboardStatesYellow(letter, states, color){
        console.log(states.keyboardStates[letter])
        if(states.keyboardStates[letter] === color.red){
            return;
        }
        else{
            console.log("yellow")
            states.keyboardStates[letter] = color.yellow;
            let currentColor = color.yellow
            this.updateLocalStorage(letter, currentColor)
        }
    }
    updateKeyboardStatesBlack(letter, states, color){
        if(states.keyboardStates[letter] === color.red){
            return;
        }
        if(states.keyboardStates[letter] === color.yellow){
            return;
        }
        else{
            states.keyboardStates[letter] = color.black;
            let currentColor = color.black
            this.updateLocalStorage(letter, currentColor)
        }

    }
    updateKeyboard(words, states){
        for(let i = 0; i < 30; i++){
            let letter = words.charArray[i];
            if(localStorage.getItem('refresh') === 'false'){
                let color = states.keyboardStates[letter];
                let element = document.getElementById(letter);
                element.style = `background-color:${color};`;
            }
            else{
                let colorStored = localStorage.getItem('keyboard state')
                let colorArray = JSON.parse(colorStored)
                let color = colorArray[letter]
                let element = document.getElementById(letter);
                element.style = `background-color:${color};`;
            
            }
            
        }
    }

    updateLocalStorage(letter, color){
        var keyboard = localStorage.getItem('keyboard state')
        var keyboardStatesLocal = JSON.parse(keyboard)
        keyboardStatesLocal[letter] =  color
        localStorage.setItem('keyboard state', JSON.stringify(keyboardStatesLocal))
    }

}