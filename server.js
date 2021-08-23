const express =  require("express");
const app = express();
const port = 3001;

/**
 * importar boby parser para json
 * inser data, Post
 */
const bodyParser = require("body-parser");
app.use(
    bodyParser.json({
        limit:'20mb'
    })
)
app.use(
    bodyParser.urlencoded({
        limit:'20mb',
        extended:true
    })
)

/**
 * conexion a BD
 */

const initDB = require('./config/connectDB');
initDB();

/**
 * Rutas de usuarios
 */
const userRouters = require('./app/routes/user')
app.use(userRouters)

/**
 * Rutas de direcciones
 */
 const direccionRouters = require('./app/routes/direccion')
 app.use(direccionRouters)
 
/**
 * ruta principal
 */
app.get('/', (req,res) =>{
    res.send({
        data: "Nodejs - Backend"
    })
})

/**
 * arrancar servidor
 */
app.listen(port, () => {
    console.log("Ejecutando node en puerto 3001. http://localhost:3001")    ;
})

