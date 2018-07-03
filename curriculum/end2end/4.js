//Create an express server that sends all the users(not you) wrapped in <h3> user </h3> tag when you visit XXXX.garagescript.org/users

const express = require('express');
const app = express();
app.listen(5550);
const fs = require('fs');

const printNames=(err, files)=>{
  let allNames= " ";
  files.forEach((oneName)=>{
    if (oneName!='sya') { allNames = allNames + ' ' +oneName; }
  });
  app.get('/users', (req, res)=> {
    res.send(allNames);
  });
};

fs.readdir('/home', printNames);
