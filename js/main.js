document.addEventListener("DOMContentLoaded", () => {
    var handles = new Handles();
    var words = new Words();
    var squares = new Squares();
    squares.createSquares();
    
    var letters = document.querySelectorAll('.keyboard-row button');
    /*
    var keys = document.getElementById("keyboard-container")

    keys.addEventListener("keypress", e => {
        handles.handleInput(e.key, words, squares)
    })*/
    

    squares.setCharArray(words);

    function sendLetter(letter, words, squares, handles){
        handles.handleInput(letter, words, squares)
    }


    for(let i = 0; i < letters.length; i++){/*
        letters[i].onclick = ({ target }) => {
            handles.handleInput(target, words, squares);
        }*/
        letters[i].onkeypress = ({ target }) => {
            console.log(letters[i])
            handles.handleInput(target, words, squares);
        }
    }
    


    

})
