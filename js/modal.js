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
        this.helpText = "Welcome to Gerdle! Similair to the Wordle game you all know and Love but with a few twists\n\nFirst off, instead of 6 guess to figure out a 5 letter english word, you have 6 guesses to figure out a 27 letter german word!\n\nDon't speak German? Well, neither do I. So if you need to know what words are accepted, click the 'list' icon in the upper left to bring a dropdown of potential words\n\nSecondly, the color scheme is changed. Instead of gray for a letter not in the word, gold for a letter in the wrong place, and green for correct place; it is now black for letter not in word, yellow for wrong place but in word, and red for letter in correct place.\n\nWhy these colors? Cause it's the german flag silly!\n\nAnd that's about it! Go forth and play a gratitously difficult version of Wordle!\n*Note: some browsers seem to have issues with typing. If this happens try selecting a key by mouse click and then start typing*"
        this.statsText = "Placeholder";
        this.dictText = words.wordBank
    }


    openModal(message){
        console.log("open")
        this.outer_modal.style = `background: "rgba(0, 0, 0, .5); z-index: 1;`;
        this.inner_modal.style = `background: rgba(217, 217, 214, 1);`;
        this.modal_content.innerHTML = message;
    }

    closeModal(){
        console.log("close")
        this.outer_modal.style = `background: "rgba(0, 0, 0, 0); z-index: -1`;
        this.inner_modal.style = `background: rgba(217, 217, 214, 0);`;
        this.modal__content.innerHTML("");
    }


}
