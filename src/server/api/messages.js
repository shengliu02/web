var db = require('../models');

exports.getMsgs = (req, res) => {
    db.msgModel.find()
    .then( (msgs) => {
        res.status(200).json(msgs);
    })
    .catch( (err) => {
        res.status(406).send(err);
    })
}

exports.createMsg = (req,res) => {
    db.msgModel.create(req.body)
    .then( (msgs) => {
        res.status(201).json(msgs);
    })
    .catch( (err) => {
        
        res.status(406).send(err.errors);
    })
}

exports.deleteMsg = (req,res) => {
    db.msgModel.findOneAndRemove({_id:req.params.id})
    .then( (msgs) => {
        console.log(typeof(msgs));
        if(msgs === null){
            res.status(404).json({"status":"param can not be found!"});
        }
        else{
            res.status(200).json(msgs);
        }
    })
    .catch( (err) => {
        
        res.status(406).json(msgs);
    })
}



module.exports = exports;