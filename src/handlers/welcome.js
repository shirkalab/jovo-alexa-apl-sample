'use strict';
const apl = require('../lib/apl')


module.exports = {
    LAUNCH() {
       this.toIntent('Welcome');
    },
    Welcome() {
        apl.displayHome.call(this)
        this.ask("Welcome on APL sample project.Which feature do you want to see ?")
    },
    Help(){
        this.ask("Do you really need help ?")
    },
    ON_ELEMENT_SELECTED() {
        let selectedElement = this.getSelectedElementId();
        if(this.isAlexaSkill()){
            selectedElement=String(selectedElement[0])
        }
        console.log('ON_ELEMENT_SELECTED',selectedElement)
        switch (selectedElement) {
            case 'menu':
                this.toIntent("Welcome")
                break;
            case "1":
                this.toIntent("PagerSequence")
                break;
            case "2":
                this.toIntent("SyncAudio")
                break;
            case "3":
                this.toIntent("textComponent")
                break;
            case "4":
                this.toIntent("imageComponent")
                break;
            default:
                this.toIntent("Unhandled")
                break;
        }


        //this.ask("you have click on item "+ selectedElement)

    },
    Unhandled() {
        this.ask("can you repeat")
    },
    END(){
        this.ask("Bye bye")

    }
}