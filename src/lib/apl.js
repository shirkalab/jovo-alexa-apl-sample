'use strict';
const jsonfile = require('jsonfile')

module.exports = {
    displayHome(){
        this.$alexaSkill.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'category',
            version: '1.0',
            document: jsonfile.readFileSync("./apl/welcome.json"),
            datasources:  jsonfile.readFileSync("./apl/data.json")
        });
    },
    textComponent(){
        let dataSource=jsonfile.readFileSync("./apl/data.json")
        dataSource.data.properties.title="Text Component"
        this.$alexaSkill.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'category',
            version: '1.0',
            document: jsonfile.readFileSync("./apl/text.json"),
            datasources:  dataSource
        });
    },
    imageComponent(){
        let dataSource=jsonfile.readFileSync("./apl/data.json")
        dataSource.data.properties.title="Image Component"
        this.$alexaSkill.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'category',
            version: '1.0',
            document: jsonfile.readFileSync("./apl/image.json"),
            datasources:  dataSource
        });
    },

    pagerSequence(){
        let dataSource=jsonfile.readFileSync("./apl/data.json")
        dataSource.data.properties.title="Pager vs Sequence"
        this.$alexaSkill.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'category',
            version: '1.0',
            document: jsonfile.readFileSync("./apl/PagerSequence.json"),
            datasources:  dataSource
        });
    },
    syncAudio(){
        let dataSource=jsonfile.readFileSync("./apl/data.json")
        dataSource.data.properties.title="synchronize text and Sequence with SpeakItem or SpeakList"
        let directiveSequential = {
            "type": "Alexa.Presentation.APL.ExecuteCommands",
            "token": "syncaudio",
            "commands": [{
                "type": "Sequential",
                "repeatCount": 0,
                "commands": []
            }]
        }


        for(let index=0;index<dataSource.data.properties.listItems.length;index++){
            directiveSequential.commands[0].commands.push({
                "type": "SpeakItem",
                "align": "left",
                "highlightMode": "line",
                "componentId": "ItemText"+dataSource.data.properties.listItems[index].id,
            })
            if(index%2 == 1 && index<dataSource.data.properties.listItems.length-1){
                directiveSequential.commands[0].commands.push({
                    "type": "Scroll",
                    "align": "visible",
                    "componentId": "mySequence"
                })
            }
        }

        directiveSequential.commands[0].commands.push({
            "type": "Scroll",
            "distance": -10000,
            "componentId": "mySequence"
        })

        directiveSequential.commands[0].commands.push({
            "type": "SpeakList",
            "count":dataSource.data.properties.listItems.length-1,
            "start":0,
            "componentId": "mySequence",
        })



        console.log(directiveSequential.commands[0].commands)
        this.$alexaSkill.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'syncaudio',
            version: '1.0',
            document: jsonfile.readFileSync("./apl/syncAudio.json"),
            datasources:  dataSource
        });
        this.$alexaSkill.addDirective(directiveSequential)

    }
}