document.addEventListener("DOMContentLoaded", () => {
    var handles = new Handles();
    var words = new Words();
    var squares = new Squares();
    squares.createSquares();
    
    var letters = document.querySelectorAll('.keyboard-row button');

    squares.setCharArray(words);




    for(let i = 0; i < letters.length; i++){
        letters.addEventListener("click", () => {
            handles.handleInput(letters[i], words, squares);
        })
        letters.removeEventLister();
        letters.addEventListener("keydown", () => {
            handles.handleInput(letters[i], words, squares);
        })
        letters.removeEventLister()

    }

})
