var http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app  = express();
const port = 8045;
// routes
const users = require('./routes/users')
const categories = require('./routes/categories')
const products = require('./routes/products')

const db = require('./config/sequalize');
const server = app.listen(port, () => { 
  const {address, port } = server.address();
  console.log('We are live on ' + address + port);
});

app.get('/hello',(req,res)=>
  res.send('heloooo everybody')
)
// sequalize conecction
db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.log('ERROR: ' + error))

app.use(bodyParser.json())
// routes
app.use('/users', users)
app.use('/categories', categories)
app.use('/products', products)
