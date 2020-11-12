var peopleModel = require('../models/people.js');
 
/**
 * peopleController.js
 *
 * @description :: Server-side logic for managing people.
 */
module.exports = {
 
    /**
     * peopleController.list()
     */
    list: function(req, res) {
        peopleModel.find(function(err, people){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting people.'
                });
            }
            return res.json(people);
        });
    },
 
    /**
     * peopleController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        peopleModel.findOne({_id: id}, function(err, people){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting people.'
                });
            }
            if(!people) {
                return res.status(404).json({
                    message: 'No such people'
                });
            }
            return res.json(people);
        });
    },
 
    /**
     * peopleController.create()
     */
    create: function(req, res) {
        var people = new peopleModel({
            name : req.body.name,
            weight : req.body.weight,
            hairColor : req.body.hairColor,
            homeWorld : req.body.homeWorld
        });
 
        people.save(function(err, people){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving people',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: people._id
            });
        });
    },
 
    /**
     * peopleController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        peopleModel.findOne({_id: id}, function(err, people){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving people',
                    error: err
                });
            }
            if(!people) {
                return res.status(404).json({
                    message: 'No such people'
                });
            }
 
            people.name =  req.body.name ? req.body.name : people.name;
            people.weight =  req.body.weight ? req.body.weight : people.weight;
            people.hairColor =  req.body.hairColor ? req.body.hairColor : people.hairColor;
            people.homeWorld =  req.body.homeWorld ? req.body.homeWorld : people.homeWorld;
            
            people.save(function(err, people){
                if(err) {
                    return res.status(500).json({
                        message: 'Error getting people.'
                    });
                }
                if(!people) {
                    return res.status(404).json({
                        message: 'No such people'
                    });
                }
                return res.json(people);
            });
        });
    },
 
    /**
     * peopleController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        peopleModel.findByIdAndRemove(id, function(err, people){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting people.'
                });
            }
            return res.json(people);
        });
    }
};