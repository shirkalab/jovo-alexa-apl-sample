// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: false,
 
    intentMap: {
        'AMAZON.StopIntent': 'END',
        'AMAZON.CancelIntent': 'END',
        'AMAZON.HelpIntent': 'HelpIntent',
        'homeIntent': 'Welcome'
    },
 
    db: {
         FileDb: {
             pathToFile: '../db/db.json',
         }
     },
 };
 