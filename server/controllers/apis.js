const mongoose = require('mongoose');
var Api = mongoose.model('Api');

module.exports ={
    //root route
    show: function (req, res) {
        Api.find({}, function (err, apis) {
            if (err) {
                console.log("Error on getting datas")
            }
            res.json({ apis });
        })
    },
    //finding data
    find: function (req, res) {
        Api.find({ _id: req.params.id }, function (err, apis) {
            if (err) {
                console.log('Error with retriving information.');
            }
            res.json({ apis: apis })
        })
    },
     //Create
    create: function (req, res) {
        var api = new Api({ title: req.body.title, description: req.body.description, completed: req.body.completed })
        api.save(function (err) {
            if (err) {
                console.log("Something went wrong");
            }
            else {
                console.log("Successfully added a user!");
                res.redirect("/api")
            }
        })
    },
    //Update
    update: function (req, res) {
        var toBeUpdated = {};
        if (req.body.title !== undefined) {
            toBeUpdated.title = req.body.title;
        }
        if (req.body.description !== undefined) {
            toBeUpdated.description = req.body.description;
        }
        if (req.body.completed !== undefined) {
            toBeUpdated.completed = req.body.completed;
        }
        Api.update({ _id: req.params.id }, { $set: toBeUpdated }, function (err) {

            if (err) {
                console.log("Somehting wrong with updating!");
            }
            res.json('Successe updating')

        })
    },
    //Delete
    destroy: function (req, res) {
        console.log(req.params.id);
        Api.remove({ _id: req.params.id }, function (err) {
            if (err) {
                console.log("Something wrong with deleting!");
            }
            // res.redirect('/api')
            // res.render('/api')
            res.json("Successe");
        })
    }
}