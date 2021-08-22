const express = require('express');
const router = express.Router();
const path = 'user';

const controller = require('../controllers/direccion')

/**
 * Ruta: /user
 * Método: GET
 */
router.get(
    `/${path}`,(req,res) =>{    
        res.send({                   
            user: "usuario",
            apellido : "gonzalez"
        })
})

router.get('/user_saludo',(req,res) =>{
    res.send({
        data: "hello javier gonzalez"
    })
})



module.exports = router