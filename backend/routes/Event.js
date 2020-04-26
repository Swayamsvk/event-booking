const router= require('express').Router();
let Event=require('../models/Event.model');
const passport = require('passport');
const JWT = require('jsonwebtoken');

router.route('/').get((req,res)=>{
    Event.find()
    .then(events => res.json(events))
    .catch(err=>res.status(400).json('Error:'+err));
});

router.route('/add').post(passport.authenticate('jwt',{session : false}),(req,res)=>{
    const name = req.body.name;
    const date = req.body.date;
    const time = req.body.time;
    const price = Number(req.body.price);
    const place = req.body.place;

    const newEvent = new Event({
        name,
        date,
        time,
        price,
        place
    });
    newEvent.save()
    .then(() => res.json('Event Added'))
    .catch(err => res.status(400).json('Error:'+err));
});

router.route('/:id').get(passport.authenticate('jwt',{session : false}),(req,res)=>{
    Event.findById(req.params.id)
    .then(event =>res.json(event))
    .catch(err => res.status(400).json('Error:' + err));

});

router.route('/:id').delete(passport.authenticate('jwt',{session : false}),(req,res) =>{
    Event.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Event deleted'))
    .catch(err => res.status(400).json('Error:'+err));
})

router.route('/update/:id').post(passport.authenticate('jwt',{session : false}),(req,res)=>{
    Event.findById(req.params.id)
    .then(event => {
        event.name = req.body.name;
        event.date = req.body.date;
        event.time = req.body.price;
        event.place = req.body.place;
        
        event.save()
        .then(() => res.json('Event updated'))
        .catch(err => res.status(400).json('Error:'+err));

    })
    .catch(err => res.status(400).json('Error'+err));

})

module.exports = router;