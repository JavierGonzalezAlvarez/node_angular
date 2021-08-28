const express =  require("express");
const app = express();
const port = 3001;

/**
 * añadir swagger-ui-express
 */
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Backend en Node",
            description: "Backend Api",
            contact: {
                name: 'node app'
            },
            servers: "http://localhost:3001"
        }
    },
    //apis: ["server.js", "../routes/*.js"]
    apis: ["../routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
//ruta swagger
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * añadir CORS y usar
 */
 var cors = require('cors')
 var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
  }
 app.use(cors(corsOptions))

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
    console.log("Ejecutando node en puerto 3001. http://localhost:3001");
    console.log("CORS enabled");
})

