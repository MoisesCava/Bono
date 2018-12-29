const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");

const clientRoutes = require("./routes/client.route");
const transactionRoutes = require("./routes/transaction.route");

app.use(morgan('dev'));
app.use(parser.urlencoded({extended: false}));
app.use(parser.json());

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
        return res.status(200).json({});
    }
    next();
})*/

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