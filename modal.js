class Modals{
    constructor(words){
        this.outer_modal = document.getElementById("modal");
        this.inner_modal = document.getElementById("modal__inner");
        this.modal_content = document.getElementById("modal__content");
        this.dict = document.getElementById("dictionary");
        this.help = document.getElementById("help");
        this.stats = document.getElementById("stats");
        this.settings = document.getElementById("settings");
        this.x = document.getElementById("close-x");
        this.gameBoard = document.getElementById("board-container");
        this.helpText = `<p>Welcome to Gerdle! Similair to the Wordle game you all know and love but with a few twists!<br><br>
        
        First off, instead of 6 guess to figure out a 5 letter english word, you have 6 guesses to figure out a 27 letter german word! Don't speak German? Well, neither do I. So if you need to know what words are accepted, click the 'list' icon in the upper left to bring a dropdown of potential words. For ease, the words in the word list are clickable. Click on a word and it will be autoloaded in the game board for you to submit if you wish<br><br>
        
        Secondly, the color scheme is changed. Instead of gray for a letter not in the word, gold for a letter in the wrong place, and green for correct place; it is now black for letter not in word, yellow for wrong place but in word, and red for letter in correct place. Why these colors? Cause it's the german flag silly!<br><br>
        
        And that's about it! Go forth and play a gratitously difficult version of Wordle!<br><br>
        
        *Note: some browsers seem to have issues with typing. If this happens try selecting a key by mouse click and then start typing*</p>`
        this.statsArray = JSON.parse(localStorage.getItem('stats'));
        this.statsText = ["Total Games Played:", this.statsArray["Total Games Played"], 
        "Total Games Won:", this.statsArray["Total Games Won"], 
        "Total Games Lost (Like A Loser):", this.statsArray["Total Games Lost (Like a Loser)"],
        "Won in 1 Guess:", this.statsArray["Won in 1 Guess"], 
        "Won in 2 Guesses:", this.statsArray["Won in 2 Guesses"],
        "Won in 3 Guesses:", this.statsArray["Won in 3 Guesses"],
        "Won in 4 Guesses:", this.statsArray["Won in 4 Guesses"],
        "Won in 5 Guesses:", this.statsArray["Won in 5 Guesses"],
        "Won in 6 Guesses:", this.statsArray["Won in 6 Guesses"]]

        this.dictText = words.wordBank;
        this.settingText = `<ul><li>Unlimited Mode (Current Mode)</li><li>Traditional Mode (Coming Soon)</li></ul>`
    }



}
