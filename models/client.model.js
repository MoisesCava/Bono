"use strict"

var mongoose = require("mongoose");

var schema = mongoose.Schema;

/* CREANDO ESQUEMA DE CLIENTE */

var clientSchema = schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, unique: true, lowercase: true, required: true},
    password: {type: String, required: true},
    transactions: {type:mongoose.Schema.Types.ObjectId, ref: "Transaction", required: true }

})

module.exports = mongoose.model("Client", clientSchema);