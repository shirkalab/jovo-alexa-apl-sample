'use strict';
const apl = require('../lib/apl')

module.exports = {
    textComponent(){
        apl.textComponent.call(this)
        this.ask("Text Component display option.")
    },
    imageComponent(){
        apl.imageComponent.call(this)
        this.ask("Image Component display option.")
    },
    PagerSequence() {
        apl.pagerSequence.call(this)
        this.ask("Let see the difference between a Pager and a sequence")
    },
    SyncAudio(){
        apl.syncAudio.call(this)
        this.ask("Alexa voice should be sync with the Sequence.")
    }

}