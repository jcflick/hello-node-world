// Contains no exports
console.log(module);

function log(message){
    //Send an http request
    console.log(message);
}

// Exports log function
module.exports.log = log;

// Contains one export
console.log(module);
