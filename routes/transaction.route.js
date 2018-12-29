const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Transaction = require("../models/transaction.model")

router.get("/", (req, res, next) => {
    Transaction.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.post("/", (req, res, next) => {
    const transaction = new Transaction({
        _id: new mongoose.Types.ObjectId(),
        client: req.body.client,
        mount: req.body.mount,
        date: req.body.date
    });

    transaction.save((error, success)=>{
        if(error){
            res.status(500).send({message: "Error al guardar transaccion"});

        }else{
            res.status(200).send({success})
            
        }
    });
});

/* MANEJADORES DE TRANSACCION ESPECIFICA */

router.get("/:transactionId", (req, res, next) => {
    const transactionId = req.params.transactionId;
    Transaction.findById(transactionId)
    .exec()
    .then(doc => {
        console.log(doc);
        if(doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: "No es un ID valido"});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

router.delete("/:transactionId", (req, res, next) => {
    const transactionId = req.params.transactionId;
    Transaction.remove({ _id: transactionId})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;

