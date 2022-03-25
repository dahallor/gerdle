document.addEventListener("DOMContentLoaded", () => {
    var handles = new Handles();
    var words = new Words();
    var squares = new Squares();
    var keys = new Keyboard();

    words.setSolution();
    squares.createSquares();
    squares.setCharArray(words);

/*
    for(let i = 0; i < 30; i++){
        var letter = document.getElementById(squares.charArray[i]);
        letter.addEventListener("click", handles.handleInput);
        letter.addEventListener("keypress", handles.handleInput);
    }

    function sendInput(event, handles, words, squares, keys){
        console.log('here')
        handles.handleInput(event.target, words, squares, keys)
    }*/

    var letters = document.querySelectorAll('.keyboard-row');

    for(let i = 0; i < letters.length; i++){
        letters[i].addEventListener("keydown", e => {
            handles.handleInputKeypress(e.key, words, squares, keys);
        })
        letters[i].addEventListener("click", e => {
            console.log("clicked")
            console.log(e)
            handles.handleInputClick(e.target, words, squares, keys);
        })

    }

    
})
