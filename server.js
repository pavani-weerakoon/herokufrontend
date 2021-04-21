//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the angularapp directory
app.use(express.static(__dirname + '/dist/SDGP'));

const testFolder = './tests/';
const fs = require('fs');



fs.readdir(path.join(__dirname+'/dist/SDGP'), (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

fs.readdir(path.join(__dirname+'/src'), (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/SDGP/index.html'));
  // res.sendFile('./index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);


