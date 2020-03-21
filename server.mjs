import bodyParser from 'body-parser';
import express from 'express';
import fs from 'fs';

fs.readFile('./dbffiles/CLIENTES.DBF','utf8', function(error,data){
  console.log(data);
})

const app = express(); 


const port = 7441;
app.listen(port, () => {  console.log('We are live on ' + port);});


