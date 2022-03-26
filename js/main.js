document.addEventListener("DOMContentLoaded", () => {
    var words = new Words();
    var handles = new Handles();
    var squares = new Squares();
    var modal = new Modals(words);
    var keys = new Keyboard();


    words.setSolution();
    squares.createSquares();
    squares.setCharArray(words);
    modal.help.addEventListener("click", () => {
        console.log("debug")
        modal.outer_modal.style = `background: rgba(0, 0, 0, .5);z-index: 2;`;
        modal.gameBoard.style = `opacity: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 1);z-index:3;`;
        modal.modal_content.innerHTML = modal.helpText;
    });

    modal.x.addEventListener("click", () => {
        console.log("debug")
        modal.outer_modal.style = `background: "rgba(0, 0, 0, 0);z-index: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 0);z-index:0;`;
        modal.gameBoard.style = `opacity: 1;`
        modal.modal_content.innerHTML = "";
    });
    

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
            if(e.detail === 1){
                handles.handleInputClick(e.target, words, squares, keys);
            }
        })

    }

    
})
