class Keyboard{
    constructor(){


    }

    updateKeyboardStatesRed(letter, states, color){
        states.keyboardStates[letter] = color.red;
    }

    updateKeyboardStatesYellow(letter, states, color){
        if(states.keyboardStates[letter] === color.red){
            return;
        }
        else{
            states.keyboardStates[letter] = color.yellow;
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
        }

    }
    updateKeyboard(words, states){
        for(let i = 0; i < 30; i++){
            let letter = words.charArray[i];
            let color = states.keyboardStates[letter];
            let element = document.getElementById(letter);
            element.style = `background-color:${color};`;
            
        }
    }

}