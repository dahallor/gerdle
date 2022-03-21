document.addEventListener("DOMContentLoaded", () => {
    var handles = new Handles();
    var words = new Words();
    var squares = new Squares();
    squares.createSquares();
    
    var letters = document.querySelectorAll('.keyboard-row button');






    for(let i = 0; i < letters.length; i++){
        letters[i].onclick = ({ target }) => {
            handles.handleInput(target, words, squares);
        }
        /*
        letters[i].onkeypress = ({ target }) => {
            handleInput(target);
        }*/

    }

})





