var fs = require('fs');


function jsonParser(fileName, callback) {
	fs.readFile(fileName, 'utf-8', function (err, data) {

        if (err) {
            throw err;
        }

        var objectarray = JSON.parse(data);
        callback(objectarray);
        // console.log(objectarray);

        });
};

module.exports.jsonParser = jsonParser