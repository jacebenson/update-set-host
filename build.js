var fs = require('fs');
var path = require('path');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;

// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

var moveFrom = "./src";
var moveTo = "./update_sets"

// Loop through all the files in the moveFrom directory
fs.readdir(moveFrom, function (err, files) {
    console.log('starting readdir');
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach(function (file, index) {
        console.log('starting files.forEach = "' + file + '"')
        // Make one pass and make the file complete
        var fromPath = path.join(moveFrom, file);
        var toPath = path.join(moveTo, file);

        fs.stat(fromPath, function (error, stat) {
            if (error) {
                console.error("Error stating file.", error);
                return;
            }

            if (stat.isFile()) {
                console.log("'%s' is a file.", fromPath);

                fs.readFile(fromPath, {encoding: 'utf-8'}, function(err,data){
                    if (!err) {
                        //console.log('received data: ' + data);
                        var doc = new dom().parseFromString(data);
                        var nodes = xpath.select("//sys_id", doc);
                        console.log(nodes[0].localName + ": " + nodes[0].firstChild.data)
                        console.log("Node: " + nodes[0].toString())
                        console.log(fromPath);
                        var newFile = 'sys_remote_update_set_' + nodes[0].firstChild.data + '.xml';
                        toPath = path.join(moveTo, newFile)
                        console.log(toPath);
                        fs.copyFile(fromPath, toPath, function (error) {
                            if (error) {
                                console.error("File copy error.", error);
                            } else {
                                console.log("Copied file '%s' to '%s'.", fromPath, toPath);
                            }
                        });
                    } else {
                        console.log(err);
                    }
                });


            } else if (stat.isDirectory()) {
                console.log("'%s' is a directory.", fromPath);
            }
        });
    });
});
// get the xml's //sys_id
// copy the file to ./update_sets/
// with a name of sys_remote_update_set_<<SYSID>>