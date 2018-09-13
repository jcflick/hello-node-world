const path = require('path');
const os = require('os');
const fs = require('fs');
const logger = require('./logger');


function logFilePath(){
    var pathObj = path.parse(__filename);
    logger.log(pathObj);
}

function logMemoryUsage(){
    var totalMemory = os.totalmem();
    var freeMemory = os.freemem();
    
    logger.log(`Total Memory: ${totalMemory}`);
    logger.log(`Free Memory: ${freeMemory}`);
}

function logFilesInCurrentFolderSync(){
    const files = fs.readdirSync('./');
    logger.log(files);
}

function logFilesInCurrentFolderAsync(){    
    fs.readdir('./', function(err, files){
        if (err) logger.log(`Error : ${err}`);
        else logger.log(`Result : ${files}`);
    });
}

logFilePath();
logMemoryUsage();
logFilesInCurrentFolderSync();
logFilesInCurrentFolderAsync();