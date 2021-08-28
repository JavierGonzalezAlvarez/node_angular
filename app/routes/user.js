// app/routes/user.js

const express = require('express');
const router = express.Router();
const path = 'user';

//const controller_direccion = require('../controllers/direccion')
const controller_user = require('../controllers/user');
const controller_query = require('../controllers/query');

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
 * Metodo: Post. Desde Postman
 * http://localhost:3001/post_user/user
 */
 router.post(
    `/post_user/${path}`,
    controller_user.insertData_User
)

/**
 * register desde angular
 * Metodo: Post.
 * http://localhost:3001/register/user
 */
 router.post(
    `/register/${path}`,
    controller_user.registerData_User_Front
)

/**
 * login desde angular
 * Metodo: Post.
 * http://localhost:3001/login/user
 */
 router.post(
    `/login/${path}`,
    controller_user.loginData_User_Front
 )

 /**
 * login desde postman
 * Metodo: Post.
 * http://localhost:3001/login/user
 */
 const secret = "34p5902DFgHniUEMVNJuYh7632334d7DUYSD"
 const { verificarTokenPostman } = require('../services/userServices');
 const jwt = require('jsonwebtoken');
 router.post("/loginPostman/user",verificarTokenPostman, (req,res) => {    
     jwt.verify(req.token, secret, (err, authData) => {        
         if(err){             
             res.sendStatus(400);
         }else{
             res.json({
                 mensaje: "verificado",
                 authData
             });
         }        
     })                 
 })

/**
 * Ruta: /user
 * Método: UPDATE
 * (en bd) => _id: 6123215fe33d98499cc765d6
 * http://localhost:3001/put_user/user/6123215fe33d98499cc765d6
 */
 router.put(
    `/put_user/${path}/:id`,
    controller_user.updateData_User
)

/**
 * Ruta: /user
 * Método: DELETE
 * (en bd) => _id: 6123215fe33d98499cc765d6
 * http://localhost:3001/delete_user/user/6123215fe33d98499cc765d6
 */
 router.delete(
    `/delete_user/${path}/:id`,
    controller_user.deleteData_User
)

/**
 * Ruta: /user
 * Método: POST
 * http://localhost:3001/upload_user/user/
 */
 
 router.post(
    `/upload_user/${path}`,
    controller_user.upload,
    controller_user.uploadData_User
)


/**
 * Metodo: Get 
 * http://localhost:3001/get_userdireccion/user
 */
 router.get(
    `/get_userdireccion/${path}`,
    controller_query.getData_UserDireccion
)

module.exports = router