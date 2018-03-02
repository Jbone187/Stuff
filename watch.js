let Not = require('./notify');
let fsmonitor = require('fsmonitor');
let winston = require('./winston');

fsmonitor.watch('c:/wfolder', null, function (change) {

    if (typeof change === "object") {

        console.log("Change detected:\n" + change);
        winston.winston.log('info', "Change detected:\n" + change);
        winston.winston.log('info', "Added files:   %j", change.addedFiles);
        console.log("Added files:   %j", change.addedFiles);
        console.log("Modified files: %j", change.modifiedFiles);
        console.log("Removed files:  %j", change.removedFiles);

        console.log("Added folders:    %j", change.addedFolders);
        console.log("Modified folders: %j", change.modifiedFolders);
        console.log("Removed folders:  %j", change.removedFolders);

        //Run Associated Modules
        Not();

    } else {
        console.log("Error");
    };
});




let monitor = fsmonitor.watch('.', {
    // include files
    matches: function (relpath) {
        return relpath.match(/\.txt$/i) !== null;
    },
    // exclude directories
    excludes: function (relpath) {
        return relpath.match(/^\.git$/i) !== null;
    }
});

monitor.on('change', function (changes) {
    console.log(changes);
});



