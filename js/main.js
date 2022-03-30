document.addEventListener("DOMContentLoaded", () => {
    //Initalization
    var color = new Colors();
    var states = new States(color);
    var words = new Words();
    var handles = new Handles();
    var squares = new Squares();
    var modal = new Modals(words);
    var keys = new Keyboard();

    squares.createSquares();
    setInitialLocalStorage(words, squares, keys, states, color);

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
        let settingsStored = JSON.parse(localStorage.getItem('stats'))
        var list = document.getElementById("word-ul")
        for(let i = 0; i < 18; i += 2){
            let li = document.createElement('li');
            let string = String(modal.statsText[i]) + String(modal.statsText[i+1])
            li.appendChild(document.createTextNode(string));
            list.appendChild(li);
            }
    });

    modal.settings.addEventListener("click", () => {
        modal.outer_modal.style = `background: rgba(0, 0, 0, .5);z-index: 2;`;
        modal.gameBoard.style = `opacity: 0;`;
        modal.inner_modal.style = `background: rgba(217, 217, 214, 1);z-index:3;`;
        modal.modal_content.innerHTML = modal.settingsText;

            
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
        let item = document.getElementsByTagName('li');
        for(let i = 0; i < item.length; i ++){
            let currentItem = item[i].innerHTML
            item[i].addEventListener("click", ()=> {
                for(let j = 0; j < 27; j++){
                    let currentLetter = currentItem.charAt(j)
                    let currentLetterLower = currentLetter.toLowerCase()
                    handles.handleInputKeypress(currentLetterLower, words, squares, keys, states, color)
                    
                }
                modal.outer_modal.style = `background: "rgba(0, 0, 0, 0);z-index: 0;`;
                modal.inner_modal.style = `background: rgba(217, 217, 214, 0);z-index:0;`;
                modal.gameBoard.style = `opacity: 1;`
                modal.modal_content.innerHTML = `<div id = "word-bank"><ul id = "word-ul"></ul></div>`;
            })
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
        words.setLowercase()
        if(!localStorage.getItem('stats')){
            localStorage.setItem('stats', JSON.stringify({"Total Games Played": 0,
            "Total Games Won": 0,
            "Total Games Lost (Like a Loser)": 0,
            "Won in 1 Guess": 0,
            "Won in 2 Guesses": 0,
            "Won in 3 Guesses": 0,
            "Won in 4 Guesses": 0,
            "Won in 5 Guesses": 0,
            "Won in 6 Guesses": 0,  
            }));
        }
        if(!localStorage.getItem('game progress') || localStorage.getItem('game progress') === "win" || localStorage.getItem('game progress') === "lose"){
            localStorage.setItem('refreshed', false)
            localStorage.setItem('gameboard state all', JSON.stringify(states.gameboardColorStatesAll))
            localStorage.setItem('keyboard state', JSON.stringify(states.keyboardStates))
            words.setSolution();
            squares.setCharArray();
        }
        if(localStorage.getItem('game progress') === 'in progress'){
            localStorage.setItem('refreshed', true)
            const storedGuesses = localStorage.getItem('guesses')
            const storedGuessesArray = JSON.parse(storedGuesses)
            let count = 0;
            squares.setCharArray();
            for(let i = 0; i < 6; i++){
                if(storedGuessesArray[i] !== ""){
                    count += 1;
                }
            }
            for(let i = 0; i < count; i++){
                for(let j = 0; j <= 27; j++){
                    if(j < 27){
                        handles.handleInputKeypress(storedGuessesArray[i][j], words, squares, keys, states, color)
                    }
                    else{
                        handles.handleInputKeypress('Enter', words, squares, keys, states, color)
                    }
                }
            }
            localStorage.setItem('refreshed', false)
        }
    }

    
})
