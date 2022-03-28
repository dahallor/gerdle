document.addEventListener("DOMContentLoaded", () => {
    var words = new Words();
    var handles = new Handles();
    var squares = new Squares();
    var modal = new Modals(words);
    var keys = new Keyboard();
    var counter = 0;



    words.setSolution();
    squares.createSquares();
    squares.setCharArray(words);

    modal.help.addEventListener("click", () => {
        modal.outer_modal.style = `background: rgba(0, 0, 0, .5);z-index: 2;`;
        modal.gameBoard.style = `opacity: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 1);z-index:3;`;
        modal.modal_content.innerHTML = modal.helpText;
    });

    modal.stats.addEventListener("click", () => {
        modal.outer_modal.style = `background: rgba(0, 0, 0, .5);z-index: 2;`;
        modal.gameBoard.style = `opacity: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 1);z-index:3;`;
        modal.modal_content.innerHTML = modal.statsText;
    });


    modal.dict.addEventListener("click", () => {
        modal.outer_modal.style = `background: rgba(0, 0, 0, .5);z-index: 2;`;
        modal.gameBoard.style = `opacity: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 1);z-index:3;`;
        var list = document.getElementById("word-ul")
        for(let i = 0; i < modal.dictText.length; i++){
            let li = document.createElement('li');
            li.appendChild(document.createTextNode(modal.dictText[i]));
            list.appendChild(li);
            }
    });

    modal.x.addEventListener("click", () => {
        modal.outer_modal.style = `background: "rgba(0, 0, 0, 0);z-index: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 0);z-index:0;`;
        modal.gameBoard.style = `opacity: 1;`
        modal.modal_content.innerHTML = `<div id = "word-bank"><ul id = "word-ul"></ul></div>`;
    });
    

    var letters = document.querySelectorAll('.keyboard-row');



    for(let i = 0; i < letters.length; i++){
        letters[i].addEventListener("keydown", e => {
            handles.handleInputKeypress(e.key, words, squares, keys);
        })
        letters[i].addEventListener("click", e => {
            if(e.detail >= 1){
                handles.handleInputClick(e.target, words, squares, keys);
            }
        })

    }

    
})
