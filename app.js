const path = require('path');
const os = require('os');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('Hello, world!');
        res.end();
    }
    if (req.url === '/api/fruit'){
        res.write(JSON.stringify(['Apple','Pomegranate','Orange']));
        res.end();
    }
});

server.on('connection', (socket) => {
    logger.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...');


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