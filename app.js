const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");

const clientRoutes = require("./routes/client.route");
const transactionRoutes = require("./routes/transaction.route");

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

/* MANEJADORES DE REQUEST */
app.use("/clients", clientRoutes);
app.use("/transactions", transactionRoutes);

/* MANEJADOR DE ERRORES DE CONSULTA */ 
app.use((req, res, next) => {
    const error = new Error('No se puede realizar esa operacion');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});

module.exports = app;