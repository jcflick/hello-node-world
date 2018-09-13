const stringExtensions = require('./stringExtensions');

function log(message){
    console.log(message);
}

function reverseLog(message)
{
    console.log(stringExtensions.reverseString(message));
}

module.exports.log = log;
module.exports.reverseLog = reverseLog;
