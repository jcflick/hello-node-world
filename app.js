const path = require('path');
const os = require('os');
const fs = require('fs');
const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',function(arg){
    console.log('Message logged from ' + arg.id + '\r\n\r\n')
});

function logFilePath(){
    var pathObj = path.parse(__filename);
    logger.log(`Path Object : ${pathObj}\r\n\r\n`);
}

function logMemoryUsage(){
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();
    
    logger.log(`Total Memory : ${totalMemory}`);
    logger.log(`Free Memory : ${freeMemory}\r\n\r\n`);
}

function logFilesInCurrentFolderSync(){
    const files = fs.readdirSync('./');
    logger.log(`Files in this directory : ${files}\r\n\r\n`);
}

function logFilesInCurrentFolderAsync(){    
    fs.readdir('./', function(err, files){
        if (err) logger.log(`Error : ${err}`);
        else logger.reverseLog(`\n\r\n\rFiles in this directory : ${files}`);
    });
}

logFilePath();
logMemoryUsage();
logFilesInCurrentFolderSync();
logFilesInCurrentFolderAsync();