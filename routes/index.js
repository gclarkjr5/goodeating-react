`use strict`

const express = require(`express`);
const routes = require(`express`).Router();
const bodyParser = require(`body-parser`);
const _ = require('lodash');

const states = require(`./states`);
const univ = require(`./uniData`);
const yelp = require(`./yelp`);

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

routes.route(`/states`)
    .get((req, res) => {
        states(x => {
            res.status(200).json(x)
        });
    })

routes.route(`/yelp`)
    .post((req, res) => {
        const state = req.body.selected;
        let data = {};
        univ(state, x => {
            data.uniData = x;
            yelp(state, y => {
                data.yelpData = y
                res.status(200).json(data)
            });
        });
    });

module.exports = routes;