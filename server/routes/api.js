const express = require('express')
const router = express.Router()
const User= require('../models/user.model')

const mongoose = require('mongoose');
const db="mongodb://agoulzi:agoulzi12@ds151586.mlab.com:51586/eventsdb"
mongoose.connect(db, err => {
    if (err)
    {
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
            res.status(200).send(registredUser)
        }
    })
})


router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email, password: userData.password }, (error, user) => {
        if (error) {
            console.log(error)
        } else {
            if (!user)
                res.status(401).send('Invalid chi haja');
            else
                res.status(200).send(user)
        }
    })
})

router.get('/events', (req, res) => {
    let events=[
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

router.get('/special', (req, res) => {
    let special=[
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

module.exports = router;