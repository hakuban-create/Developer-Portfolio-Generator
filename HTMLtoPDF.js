var fs = require('fs');
var pdf = require('html-pdf');


function convertToPDF(){
var html = fs.readFileSync('./htmlProfile.html', 'utf8');
var options = { format: 'letter' };
pdf.create(html, options).toFile('./Profile.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log("File has successfully converted to PDF.");
  console.log(res); 
});

}

module.exports.convertToPDF=convertToPDF;