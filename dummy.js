const mongoose = require('mongoose');
//const restaurantModel = require('../models/restaurantModel');
// const commentModel = require('../models/comment');
// var passport =require('passport');
// var localStrategy =require('passport-local');
// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const dummyModel = require('../models/dummyModel');

//restaurant/restaurantDetail
router.post('/details', (req,res,next)=>{
    if (!req.body.title || !req.body.description) {
        res.sendStatus(400)
    } else {
        var dummy = new dummyModel({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
           // image: req.body.image,
            description: req.body.description
           // createdAt: new Date(),
            //updatedAt: new Date()
        });

        dummy.save().then(function (result) {
            if (!result) {
                throw "RECORD NOT SAVED"
            } else {
               // res.redirect("restaurantDetails");
               res.send({msg:'success'});
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).send(err)
        })
    }
});

module.exports = router;