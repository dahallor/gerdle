document.addEventListener("DOMContentLoaded", () => {
    //Initalization
    var color = new Colors();
    var states = new States(color);
    var words = new Words();
    var handles = new Handles();
    var squares = new Squares();
    var modal = new Modals(words);
    var keys = new Keyboard();

    setInitialLocalStorage(words, squares, keys, states, color);
    squares.createSquares();
    squares.setCharArray(words);

    //set modal event listners
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
    

    //Run program
    var letters = document.querySelectorAll('.keyboard-row');

    for(let i = 0; i < letters.length; i++){
        letters[i].addEventListener("keydown", e => {
            handles.handleInputKeypress(e.key, words, squares, keys, states, color);
        })
        letters[i].addEventListener("click", e => {
            if(e.detail >= 1){
                handles.handleInputClick(e.target, words, squares, keys, states, color);
            }
        })

    }

    function setInitialLocalStorage(words, squares, keys, states, color){
        if(!localStorage.getItem('game progress') || localStorage.getItem('game progress') === "win" || localStorage.getItem('game progress') === "lose"){
            words.setSolution();
        }
        if(localStorage.getItem('game progress') === 'in progress'){
            const storedGuesses = localStorage.getItem('guesses')
            const storedGuessesArray = JSON.parse(storedGuesses)
            let count = 0;
            for(let i = 0; i < 6; i++){
                if(storedGuessesArray[i] !== ""){
                    count += 1;
                }
            }
            words.spaceIndex = count + 1
            console.log(words.spaceIndex)
            console.log(count)
            for(let i = 0; i < count; i++){
                for(let j = 0; j <= 27; j++){
                    console.log(storedGuessesArray[i][j])
                    if(j < 27){
                        handles.handleInputKeypress(storedGuessesArray[i][j], words, squares, keys, states, color)
                    }
                    else{
                        handles.handleInputKeypress('Enter', words, squares, keys, states, color)
                    }
                }
            }
        }
    }

    function getInitialLocalStorage(handles, words){
        for(let i = 0; i < words.guessWords.length; i++){
            handles.HandleEnter
        }

    }
    
})
