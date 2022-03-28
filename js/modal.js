class Modals{
    constructor(words){
        this.outer_modal = document.getElementById("modal");
        this.inner_modal = document.getElementById("modal__inner");
        this.modal_content = document.getElementById("modal__content");
        this.dict = document.getElementById("dictionary");
        this.help = document.getElementById("help");
        this.stats = document.getElementById("stats");
        this.x = document.getElementById("close-x");
        this.gameBoard = document.getElementById("board-container");
        this.helpText = `<p>Welcome to Gerdle! Similair to the Wordle game you all know and love but with a few twists!<br><br>
        
        First off, instead of 6 guess to figure out a 5 letter english word, you have 6 guesses to figure out a 27 letter german word! Don't speak German? Well, neither do I. So if you need to know what words are accepted, click the 'list' icon in the upper left to bring a dropdown of potential words. <br><br>
        
        Secondly, the color scheme is changed. Instead of gray for a letter not in the word, gold for a letter in the wrong place, and green for correct place; it is now black for letter not in word, yellow for wrong place but in word, and red for letter in correct place. Why these colors? Cause it's the german flag silly!<br><br>
        
        And that's about it! Go forth and play a gratitously difficult version of Wordle!<br><br>
        
        *Note: some browsers seem to have issues with typing. If this happens try selecting a key by mouse click and then start typing*</p>`
        this.statsText = "Stats Section Coming Soon!";
        this.dictText = words.wordBank;
    }



}
