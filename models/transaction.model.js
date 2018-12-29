"use strict"

var mongoose = require("mongoose");

var schema = mongoose.Schema;

/* CREANDO ESQUEMA DE TRANSACCION */

var transactionSchema = schema({
    _id: mongoose.Schema.Types.ObjectId,
    client: {type: String, required: true},
    mount: {type: Number, required: true},
    date: {type: Date, default: Date.now, required: true}
})

module.exports = mongoose.model("Transaction", transactionSchema);