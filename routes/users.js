const express = require('express');
const router = express.Router();
const db = require('../config/sequalize')
const User = require('../models/user');

// router.get('/', (req, res) => res.send('USERS'));
// get users
router.get('/', (req, res) => 
  User.findAll()
    .then(users => {
      res.send(users);
    })
    .catch(error => console.log(error))
);

// Create a user
router.post('/add', (req,res)=>{
  let {name, email, password, dni, phone} = req.body;
  let errors=[]
  if(!name) {
    errors.push({text:'please add title'});
  }
  if(!email) {
    errors.push({text:'please add email'});
  }
  if(!password) {
    errors.push({text:'please add password'});
  }
  if(!dni) {
    errors.push({text:'please add dni'});
  }
  if(!phone) {
    errors.push({text:'please add phone'});
  }
  if(errors.length > 0) {
    // res.render('add', {
    //   errors,
    //   name,
    //   email,
    //   password,
    //   dni,
    //   phone
    // })
    console.log(errors)
  } else {
    // insert into table
    User.create({
      name,
      email,
      password,
      dni,
      phone
    })
      .then(user => res.redirect('/hello'))
      .catch(error=>console.log(error))
  }
})

// user login request
router.get('/login', (req, res) => {
  let {email} = req.query;
  let errors=[]
  if(!email) {
    errors.push({text:'please add email'});
  }
  if(errors.length == 0) {
    let myUser = null
    User.findAll()
      .then(users => {
        myUser = users.find(user => user.email == email)
        if(myUser) {
          res.send(myUser)
        } else {
          res.send('fail')
        }
      })
      .catch(error => console.log(error))
  } else {
    res.send(errors)
  }
}
);


module.exports = router;