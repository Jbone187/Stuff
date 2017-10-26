var Not = require('./notify');
var fsmonitor = require('fsmonitor');
var winston = require('./winston');
var fs = require('fs.extra');

fsmonitor.watch('\wtest', null, function(change) {

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

//Run Associated Module
    Not();
 
              //Copy Files
   /* fs.copyRecursive('/nodetest/wtest', '/nodetest/rfile2', function (err) {
        if (err) {
          throw err;
        }
       
        console.log("Copied");
      });
    */
   } else {
         console.log("Error");
    };
});


var monitor = fsmonitor.watch('.', {
    // include files
    matches: function(relpath) {
        return relpath.match(/\.txt$/i) !== null;
    },
    // exclude directories
    excludes: function(relpath) {
        return relpath.match(/^\.git$/i) !== null;
    }
});

monitor.on('change', function(changes) {
    console.log(changes);
});



