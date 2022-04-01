class Modals{
    constructor(words){
        this.outer_modal = document.getElementById("modal");
        this.inner_modal = document.getElementById("modal__inner");
        this.modal_content = document.getElementById("modal__content");
        this.dict = document.getElementById("dictionary");
        this.help = document.getElementById("help");
        this.stats = document.getElementById("stats");
        this.settings = document.getElementById("settings");
        this.share = document.getElementById("share");
        this.x = document.getElementById("close-x");
        this.gameBoard = document.getElementById("board-container");
        this.helpText = `<p>Welcome to Gerdle! Similair to the Wordle game you all know and love but with a few twists!<br><br>
        
        First off, instead of 6 guesses to figure out a 5 letter english word, you have 6 guesses to figure out a 27 letter german word! Don't speak German? Well, neither do I! So if you need to know what words are accepted, click the 'list' icon in the upper left to bring a dropdown of potential words. For ease, the words in the word list are clickable. Click on a word and it will be autoloaded in the game board for you to submit if you wish<br><br>
        
        Secondly, the color scheme is changed. Instead of gray for a letter not in the word, gold for a letter in the wrong place, and green for correct place; it is now black for the letter not in word, yellow for letter in the wrong place but in the word, and red for the letter in the correct place. Why these colors? Cause it's the german flag silly!<br><br>
        
        Finally, Click on the nodes icon when you complete your game to copy a summary of your game to the clipboard for you to share with your friends.<br><br>
        
        And that's about it! Go forth and play a gratitously difficult version of Wordle!<br><br>
        
        *Note: some browsers seem to have issues with typing. If this happens try selecting a key by mouse click and then start typing*</p>`


        this.dictText = words.wordBank;


    }

    setStats(){
        var statsArray = JSON.parse(localStorage.getItem('stats'));
        var statsText = ["Total Games Played:", statsArray["Total Games Played"], 
        "Total Games Won:", statsArray["Total Games Won"], 
        "Total Games Lost (Like A Loser):", statsArray["Total Games Lost (Like a Loser)"],
        "Won in 1 Guess:", statsArray["Won in 1 Guess"], 
        "Won in 2 Guesses:", statsArray["Won in 2 Guesses"],
        "Won in 3 Guesses:", statsArray["Won in 3 Guesses"],
        "Won in 4 Guesses:", statsArray["Won in 4 Guesses"],
        "Won in 5 Guesses:", statsArray["Won in 5 Guesses"],
        "Won in 6 Guesses:", statsArray["Won in 6 Guesses"]]

        return statsText;
    }

    getShareText(words){
        let emojisString = localStorage.getItem('emojis')
        let emojisArray = JSON.parse(emojisString)
        let emojis = ""

        for(let i = 0; i < emojisArray.length; i++){
            for(let j = 0; j <= 27; j++){
                if(j == 27){
                    emojis += "\n\n"
                }
                else{
                    emojis += String(emojisArray[i][j])
                }
            }
        }
        let word = localStorage.getItem('solution')
        let guesses = words.guessedWordCount
        if(localStorage.getItem('game progress') === "win"){
            var shareTextValidWin = "Gerdle unlimited mode - My word was: " + word + 
            "\n\n"
            + guesses + "/6\n\n"
            + emojis + 
            "\n\nhttps://dahallor.github.io/gerdle"
            return shareTextValidWin
        }
        if(localStorage.getItem('game progress') === "lose"){
            var shareTextValidLose = "Gerdle unlimited mode - My word was: " + word + 
            "\n\nX/6\n\n"
            + emojis + 
            "\n\nhttps://dahallor.github.io/gerdle"
            return shareTextValidLose
        }
    }


}
