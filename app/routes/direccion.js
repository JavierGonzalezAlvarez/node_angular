// app/routes/direccion.js

const express = require('express');
const router = express.Router();
const path = 'direccion';

const controller_direccion = require('../controllers/direccion');
const controller_query = require('../controllers/query');

/**
 * Ruta: /direccion
 * Método: GET
 * http://localhost:3001/direccion
 */
 router.get(
    `/${path}`,(req,res) =>{    
        res.send({                   
            user: "usuario",
            calle : "cl central"
        })
})

/**
 * Ruta: /direcccion
 * Método: GET
 * http://localhost:3001/get_controller/direccion
 */
/**
 * @swagger
 * /get_controller/direccion:
 *   get:
 *    description: todos las direcciones
 * 
 */
router.get(
    `/get_controller/${path}`,
    controller_direccion.getData_Direccion
)

/**
 * Ruta: /direcccion
 * Método: POST
 * http://localhost:3001/post_controller/direccion
 */
/**
 * @swagger
 * /post_controller/direccion:
 *   get:
 *    description: insertar dirección
 * 
 */
 router.post(
    `/post_controller/${path}`,
    controller_direccion.insertData_Direccion
)

/**
 * Metodo: Get 
 * http://localhost:3001/get_direccionuser/direccion
 */
/**
 * @swagger
 * /get_direccionuser/direccion:
 *   get:
 *    description: todos los usarios y direcciones
 * 
 */
 router.get(
    `/get_direccionuser/${path}`,
    controller_query.getData_DireccionUser
)




module.exports = router

