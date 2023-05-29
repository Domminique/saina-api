const { object } = require('joi');
var xlsx = require('node-xlsx');
const fs = require('fs');

var obj = xlsx.parse(__dirname + '/marketPrices.xls'); // parses a file

var obj1 = xlsx.parse(fs.readFileSync(__dirname + '/marketPrices.xls')); // parses a buffer



var marketPrices = JSON.stringify(obj)
console.log(marketPrices)


fs.writeFile('marketPrices.json', marketPrices, err => {
  if (err) {
    console.error(err);
  }


  // file written successfully
  console.log("Success!!!!")
});


