const stringExtensions = require('./stringExtensions');

const EventEmitter = require('events');
var emitter = new EventEmitter();

class Logger extends EventEmitter {
    log(message){
        console.log(message);
        this.emit('messageLogged', {id : 1, url: 'http://'});
    }
    reverseLog(message)
    {
        console.log(stringExtensions.reverseString(message));
        this.emit('messageLogged', {id : 2, url: 'http://'});
    }
}
module.exports = Logger;