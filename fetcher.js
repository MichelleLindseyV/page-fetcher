/* Implement a small command line node app called fetcher.js which should 
take a URL as a command-line argument as well as a local file path and 
download the resource to the specified path. */

/* Upon completion, it should print out a message like "Downloaded and 
saved 1235 bytes to ./index.html."

Example:
> node fetcher.js http://www.example.edu/ ./index.html

Downloaded and saved 3261 bytes to ./index.html
*/


const fs = require('fs');

const request = require('request');

let url = process.argv[2];

let filePath = process.argv[3];



// request('http://www.example.edu', (error, response, body) => {
request(url, (error, response, body) => {
    
  fs.writeFile(filePath, body,(error, data) => {
    if (error) {
      console.log(error);
      return;
    } else {
      const stat = fs.statSync(filePath);
      let fileSize  = stat["size"];
      console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    }
  });
});








