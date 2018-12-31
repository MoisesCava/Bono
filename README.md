# Bono
Bono de 5ptos sobre el 2do parcial - Ingenieria del software

Rutas disponibles: 

Clientes:

http://mongo:3000/clients

    Peticiones disponibles:

    POST 

    GET

    DELETE

Para ver un cliente especifico:

http://mongo:3000/clients/<Id del cliente> 

    Peticiones disponibles:

    GET

Transacciones:

http://mongo:3000/transactions

    Peticiones disponibles:

    POST 

    GET

    DELETE

Para ver un transacción especifica:

http://mongo:3000/transactions/<Id de la transacion>

    Peticiones disponibles:

    GET


Formato JSON de ejemplo para registrar clientes (Body):

POST:

{
	"name": "nuevo8",
	"lastname": "nuevo8",
	"email": "nuevo8@gmail.com",
	"password": "nuevo8",
	"transactions": "5c2771374741d417d868e422"
}

Nota: El ID de la transaccion perteneciente al cliente debe existir

Formato JSON de ejemplo para registrar Transacciones (Body):

POST:

{
    "client": "nuevo6",
    "mount": "600",
    "date": "2018-12-27T13:12:10.103Z"
}