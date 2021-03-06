const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
const db = "mongodb://agoulzi:agoulzi12@ds151586.mlab.com:51586/eventsdb"
mongoose.connect(db, err => {
  if (err) {
    console.log('error connecting to db')
  } else {
    console.log('connected to db')
  }
})
router.get('/', (req, res) => {
  res.send('hello from api')
})

router.post('/register', (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registredUser) => {
    if (error) {
      console.log(error)
    } else {
      let payload = { subject: registredUser._id }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token })
    }
  })
})


router.post('/login', (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email, password: userData.password }, (error, user) => {
    if (error) {
      console.log(error)
    } else {
      if (!user) {
        res.status(401).send('Invalid chi haja');
      }
      else {
        let payload = { subject: user._id }
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({ token })
      }
    }
  })
})

router.get('/events', (req, res) => {
  let events = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }]
  res.json(events)
})

router.get('/special', verifyToken, (req, res) => {
  let special = [
    {
      "_id": "1",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "2",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "3",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "4",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "5",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    },
    {
      "_id": "6",
      "name": "Auto Expo",
      "description": "lorem ipsum",
      "date": "2012-04-23T18:25:43.511Z"
    }]
  res.json(special)
})


function verifyToken(req, res, next) {
  if (!req.headers.autorization) {
    return res.status(401).send('unauthorized request')
  }

  let token = req.headers.autorization.split(' ')[1];
  if (token === 'null') {
    console.log('hnaaaaaa');
    return res.status(401).send('unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  console.log('lheeeh');
  if (!payload) {

    return res.status(401).send('unauthorized request')
  }
  req.userId = payload.subject;
  next();


}



module.exports = router;