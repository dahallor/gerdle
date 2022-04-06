class Modals{
    constructor(words){
        this.outer_modal = document.getElementById("modal");
        this.inner_modal = document.getElementById("modal__inner");
        this.modal_content = document.getElementById("modal__content");
        this.modal_top = document.getElementById("modal__top");
        this.dict = document.getElementById("dictionary");
        this.help = document.getElementById("help");
        this.stats = document.getElementById("stats");
        this.settings = document.getElementById("settings");
        this.share = document.getElementById("share");
        this.x = document.getElementById("close-x");
        this.gameBoard = document.getElementById("board-container");
        this.helpText = `<p>Welcome to Gerdle! Similair to the Wordle game you all know and love but with a few twists!<br><br>
        
        First off, let's show you the way around:<br><br>

        >Question Mark Icon: Help Menu. Brings this message up<br>
        >List Icon: Word list. Click on a word to auto import it into the squares (no need to type them out if you don't want to!)<br>
        >Bar Chart Icon: Stats page. Click here to see a record of your wins and loses<br>
        >Gear Icon: Settings Menu. Let's you toggle game modes<br>
        >Nodes Icon: Share feature. Upon completion of a round; click this to copy an emoji representation of your game to the clip board, a la the original Wordle. Paste into your social media feeds to show your friends!<br><br>
        
        
        Secondly, the (minor) gameplay changes:<br><br>
        
        >Instead of 6 guesses to figure out a 5 letter english word, you have 6 guesses to figure out a 27 letter german word! <br>
        >>>Why such long words? I don't know, I just thought it'd be funny.<br>
        >The color scheme is changed. Instead of gray, gold, and green for not in word, in word but wrong place, and in word respectively; It is now black, yellow, and red for the same criteria.><br>
        >>>Why these colors? Because they're the German Flag silly goose!<br><br>
        
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
