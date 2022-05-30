export class Question{

    /**
     * 
     * @param {string} text text of the question
     * @param {string[]} choises those are choises
     * @param {string} answer answer
     */

    constructor(text,choices,answer){
        this.text= text;
        this. choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choise choise to answer
     * @returns {boolean} true if choise is right
     */

    correctAnswer(choice) {
        return choice === this.answer;        
    }
}

//const question=new Question()