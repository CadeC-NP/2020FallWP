const express = require('express');
const users = require('../models/users');

const router = express.Router();

router.get('/', (req, res, next) => {
    
    users.getAll().then(x=> res.send( x ))
    .catch(next);
    console.log("finished get users")
  })

  .get('/search', (req, res, next) => {
    res.send(users.search(req.query.q).then.res.send( x ))
    .catch(next);
  })

  .post('/',  (req, res, next) => {
    users.add(req.query.name, req.query.age ).then(newUser => {
      res.send( newUser );
    }).catch(next);
  })

  .get('/rand', (req, res, next)=> {
    const someVal = users.rand();
    res.send({someVal});
  })

module.exports = router;