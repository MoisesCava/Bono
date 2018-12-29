const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Client = require("../models/client.model");
const Transaction = require("../models/transaction.model");



router.get("/", (req, res, next) => {
    Client.find()
    .populate('transactions')
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
    const idTransaction = req.body.transactions;
    Transaction.findById(idTransaction)
    .exec()
    .then(transaction => {
        const client = new Client({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            transactions: req.body.transactions
        });
    
        return client.save()
        
    })
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: "El ID de la transaccion es invalido",
            error: err
        });
    })
});

/* MANEJADORES DE CLIENTE ESPECIFICA */

router.get("/:clientId", (req, res, next) => {
    const clientId = req.params.clientId;
    Client.findById(clientId)
    .populate('transactions')
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

router.delete("/:clientId", (req, res, next) => {
    const clientId = req.params.clientId;
    Client.remove({ _id: clientId})
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

