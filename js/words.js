class Words {
    constructor(){
        this.guessedWords = [[]];
        this.guessedWordCount = 0;
        this.spaceIndex = 1;
        this.solution = "bbbbaaaaaaaaaaaaaaaaaaaaaaa";
    }

    getCurrentWord(guessedWords){
        const numWordsGuessed = this.guessedWords.length;
        return this.guessedWords[numWordsGuessed - 1];
    }

    updateGuessedWord(letter){
        const currentWord = this.getCurrentWord(this.guessedWords);

        if(currentWord && currentWord.length < 27){
            currentWord.push(letter);
            const spaceIndexElement = document.getElementById(String(this.spaceIndex));
            this.spaceIndex = this.spaceIndex + 1;

            spaceIndexElement.textContent = letter;
        }

    }
}