//@ts-check
import { Question } from "./Question.js";


export class Quizz{

    questionIndex=0
    score=0
    /**
     * 
     * @param {Question[]} questions actual question
     */
    constructor(questions){
        this.questions=questions;
    }
    /**
     * 
     * @returns {Question} the actual question
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    /**
     * 
     * @param {string} answer the choice for the question
     */

    guess(answer){
        
        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++;
        }
        this.questionIndex++
    }

    /**
     * 
     * @returns {boolean} end of quizz
     */

    isEnded(){
        if(this.questions.length===this.questionIndex){
            //this.questionIndex=0
            return true
        }
    }

    begin(){
        this.questionIndex=0;
        this.score=0;
        console.log(this.score)
        console.log(this.questionIndex)
    }

   

} 