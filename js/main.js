document.addEventListener("DOMContentLoaded", () => {
    var handles = new Handles();
    var words = new Words();
    var squares = new Squares();
    squares.createSquares();
    
    var letters = document.querySelectorAll('.keyboard-row button');
    var keys = document.querySelectorAll('.keyboard-row button')

    squares.setCharArray(words);


    for(let i = 0; i < letters.length; i++){
        letters[i].onclick = ({ target }) => {
            handles.handleInput(target, words, squares);
        }
    }
    
    for(let key of keys){
        key.onkeydown = ({ target }) => {
            console.log(target)
            handles.handleInput(target, words, squares);
        }
    }

    

})
