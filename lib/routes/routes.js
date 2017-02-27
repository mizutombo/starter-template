const express  = require('express');
const Router = express.Router;
const router = Router();
const Place = require('../models/place.model.js');
const bodyParser = require('body-parser').json();

router

    .post('/images', bodyParser, (req, res, next) => {
      new Place(req.body).save()
        .then(place => {
          if ( !(req.params.title) || !(req.params.category) || !(req.params.url) ) {
            res.status(400).send({ error: 'image data must include title, category, and url' });
          }
          else {
            res.send(place);
          } 
        })
        .catch(next);
    })

    .get('/images', (req, res, next) => {
      Place.find()
        .then(place => res.send(place))
        .catch(next);
    })

    .get('/images/:id', (req, res, next) => {
      Place.findById(req.params.id)
        .then(place => {
          if (!place) {
            res.status(404).send({ error: `Id ${req.params.id} not found` });
          }
          else {
            res.send(place);
          }
        })
        .catch(next);
    })

    .get('/images?category=places', (req, res, next) => {
      Place.find()
       .then(place => {
         if (`${req.params.category}` !== ('animals' || 'food' || 'places')) {
           res.status(400).send({ error: 'image must be of category; animals, food, or places' });
         }
         else {
           res.send(place);
         }
       })
       .catch(next); 
    });

module.exports = router;    