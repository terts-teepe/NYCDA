
var jsonFileReader = require('./jsonFileReader')


function countryFinder (objectarray) {
	for (i=0; i<objectarray.length; i++) {
			if (process.argv[2] === objectarray[i].name) {
				console.log("Country name: " + objectarray[i].name + " Top Level Domain: " + objectarray[i].topLevelDomain);
			}
		}
}


var fileName = "countries.json"
// module.jsonParser("countries.json", countryFinder)

jsonFileReader.jsonParser("./countries.json", countryFinder)
// function theContainingFunction(callback){
// 	callback(module.jsonParser())
// }
//Requiring file system library
// var fs = require('fs');

//                            [0]      [1]        [2]
//Format terminal command: node node.js "Germany"
//Assiging 3rd value of terminal input to variable consoleInput
// var consoleInput = process.argv[2];

//Test-Log to test if consoleInput works
// console.log("Console input test: "+consoleInput);

//Function countryInformation is storing the country-name (handed over through variable commadInput)
//Then it is reading the file countries.json and looking for the value 'commandInput', e.g. Germany
//Then it is returning the object 'Germany' as a string
//Then it is logging countryname (= consoleInput) and countryinformation (from json file)

// var countryinformation = function () {

    //STEP 01: Read file countries.json
    //STEP 02: Parse file, so that string will turn into array of objects
    //STEP 03: Access properties 'name' and 'topLevelDomain' from objects, and assign values to variables 'output1' and 'output2'
    //STEP 04: Console log output1 and output2

    // fs.readFile('./countries.json', 'utf-8', function (err, data) {

    //     if (err) {
    //         throw err;
    //     }

    //     var objectarray = JSON.parse(data);
    //     // console.log(objectarray);

// 		for (i=0; i<objectarray.length; i++) {
// 			if (consoleInput === objectarray[i].name) {
// 				console.log("Country name: " + objectarray[i].name + " Top Level Domain: " + objectarray[i].topLevelDomain);
// 			}
// 		}

//     // });
// }

// countryinformation();


// // Test-Variable to get country output
//console.log(JSON.topLevelDomain);





