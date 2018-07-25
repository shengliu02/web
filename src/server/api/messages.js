var db = require('../models');

exports.getMsgs = (req, res) => {
    db.msgModel.find()
    .then( (msgs) => {
        res.json(msgs);
    })
    .catch( (err) => {
        res.send(err);
    })
}

exports.createMsg = (req,res) => {
    db.msgModel.create(req.body)
    .then( (msgs) => {
        res.status(201).json(msgs);
    })
    .catch( (err) => {
        
        console.log(req.body);
        res.send(err);
    })
}

exports.deleteMsg = (req,res) => {
    db.msgModel.findOneAndRemove({_id:req.params.id})
    .then( (msgs) => {
        res.send('Success!')
    })
    .catch( (err) => {
        
        console.log(req.body);
        res.send(err);
    })
}



module.exports = exports;