const express = require('express');
const app=express();
const PORT= process.env.PORT || 8000;
const fs = require('fs');
app.use(express.json());

app.get('/',(req,res)=>{
  res.send(fs.readFileSync("file.txt","utf8"));
})

app.post('/git',(req,res)=>{
  fs.appendFileSync(req.body,'file.txt');
  res.end();
})

app.listen(PORT);
