var fs = require('fs');
var pdf = require('html-pdf');


function convertToPDF(){
var html = fs.readFileSync('./htmlProfile.html', 'utf8');
var options = { format: 'letter' };
pdf.create(html, options).toFile('./Profile.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log("File has successfully converted to PDF.");
  console.log(res); 
  deleteFile("./htmlProfile.html");
});

}

function deleteFile(filePath){
  console.log("Deleting "+filePath);
  try {
      fs.unlinkSync(filePath)
    } catch(err) {
      console.error(err)
    }
 }

module.exports.convertToPDF=convertToPDF;