const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Story = mongoose.model('stories'); 
const {ensureAuthenticated,ensureGuest} = require('../helpers/auth');
var ObjectId = require('mongodb').ObjectID;

router.get('/',ensureGuest, (req, res) => {
res.render('index/welcome');
});

router.get('/dashboard',ensureAuthenticated, (req, res) => {

  Story.find({user : ObjectId(req.user.id)})
  .then(stories => {
    
    res.render('index/dashboard',{
      stories:stories
    })
  })

});

  router.get('/about', (req, res) => {
    res.render('index/about');
    });


module.exports = router;