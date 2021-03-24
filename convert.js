const fs = require('fs');


function convertHTML (html) {
  fs.writeFile('./dist/index.html', html, err =>{
  if (err) {
    throw err
  }
  console.log("Wrote to File")
})
}
module.exports = convertHTML;