export class UI{
    constructor(){}
    /**
     * 
     * @param {string} text receives the question and show it in index by selecting the question div
     */
    showQuestion(text){
        const title= document.getElementById('question')
        title.innerText= text
    }
    /**
     * 
     * @param {string[]} choices receives all  possible choices
     */
    showOptions (choices,callback){
        const choicesContainer= document.getElementById('choices')
        choicesContainer.innerHTML=''

        for (let i=0;choices.length>i;i++){
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'            
            button.addEventListener('click', () => callback(choices[i]))

            choicesContainer.append(button)
        }
        
    }

      
}