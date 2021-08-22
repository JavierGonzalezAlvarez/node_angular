// app/routes/direccion.js

const express = require('express');
const router = express.Router();
const path = 'direccion';

const controller = require('../controllers/direccion');

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
 * Ruta: /direccion
 * Método: GET
 * http://localhost:3001/controller/direccion
 */
router.get(
    `/controller/${path}`,
    controller.getData
)

module.exports = router