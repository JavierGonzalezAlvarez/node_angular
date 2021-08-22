const express = require('express');
const router = express.Router();
const path = 'direccion';

/**
 * Ruta: /direccion
 * Método: GET
 */
 router.get(
    `/${path}`,(req,res) =>{    
        res.send({                   
            user: "usuario",
            calle : "cl central"
        })
})

module.exports = router