// app/routes/user.js

const express = require('express');
const router = express.Router();
const path = 'user';

//const controller_direccion = require('../controllers/direccion')
const controller_user = require('../controllers/user');

/**
 * Ruta: /user
 * Método: GET
 * 
 */
router.get(
    `/${path}`,(req,res) =>{    
        res.send({                   
            user: "usuario",
            apellido : "gonzalez"
        })
})

/**
 * Metodo: Get
 * http://localhost:3001/user_saludo
 */
router.get('/user_saludo',(req,res) =>{
    res.send({
        data: "hello javier gonzalez"
    })
})

/**
 * Metodo: Get 
 * http://localhost:3001/get_user/user
 */
router.get(
    `/get_user/${path}`,
    controller_user.getData_User
)

/**
 * Metodo: Post
 * http://localhost:3001/post_user/user
 */
 router.post(
    `/post_user/${path}`,
    controller_user.insertData_User
)



module.exports = router