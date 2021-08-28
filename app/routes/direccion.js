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
router.get(
    `/get_controller/${path}`,
    controller_direccion.getData_Direccion
)

/**
 * Ruta: /direcccion
 * Método: POST
 * http://localhost:3001/post_controller/direccion
 */
 router.post(
    `/post_controller/${path}`,
    controller_direccion.insertData_Direccion
)

/**
 * Metodo: Get 
 * http://localhost:3001/get_direccionuser/direccion
 */
 router.get(
    `/get_direccionuser/${path}`,
    controller_query.getData_DireccionUser
)




module.exports = router

