const http = require("http");
const app = require("./app");
var mongoose = require("mongoose");

const port = process.env.PORT || 2424;

const server = http.createServer(app);

/*CONEXION A BASE DE DATO MONGODB*/

mongoose.connect("mongodb://mongo:27017/bonodb", { useNewUrlParser: true }, (error, response) => {
    if(error){
        throw error;
    }else{
        console.log("Se realizo la conexion a bonodb correctamente");

        app.listen(port, function(){
            console.log("Servidor establecido en http://mongo:"+port)
        })
    }

} );