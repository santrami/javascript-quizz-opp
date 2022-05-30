//@ts-check
import { UI } from "./models/UI.js";
import { questions } from "./data/questions.js";
import { Quizz } from "./models/Quizz.js";



/**
 * 
 * @param {UI} ui userInterface object
 * @param {Quizz} quizz Quizz object
 */
const renderPage= (ui, quizz) => {
    if(quizz.isEnded() ){
        const final=document.getElementById('quizz');
        final.innerHTML =` <h3>Quizz Ended</h3> your score is ${quizz.score} <br> <button class="button" onclick="window.location.reload();" >regresar</input>`
        //quizz.begin()
        //console.log(quizz.getQuestionIndex().text)
        //console.log(quizz.getQuestionIndex().choices)
        //quizz.beginAgain(ui,quizz)
        //quizz.beginAgain()
    } else{
        ui.showQuestion(quizz.getQuestionIndex().text)
        ui.showOptions( quizz.getQuestionIndex().choices, ( currentChoice ) => {
            quizz.guess(currentChoice)
            renderPage(ui,quizz)
        })    
    }
}    

function main(){
    const quizz = new Quizz(questions)
    const ui = new UI();
    
    renderPage(ui,quizz)

    if(quizz.isEnded()){
        
        //beginAgain(ui,quizz)
    }
};

main();