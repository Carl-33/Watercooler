const db = require("../models/company.js");

module.exports = {
    findAll: function(req, res) {
        db.Workplace
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findByID: function(req, res) {
        db.Workplace
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Workplace
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Workplace 
            .findOneAndUpdate({ _id: req.params.id}, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));            
    },
    remove: function(req, res) {
        db.Workplace
            .findById({_id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel = res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};