//const express = require('express');
//const { Mongoose } = require("mongoose");
const model_user = require("../models/user");
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt');

//validaciones de email y contraseña
exports.validacion = async (req, res, next) => {
    const email = req.body.email;    
    const myPassword = req.body.password;         
    //consultar email y password en DB
    const user = await model_user.findOne({ email: email });    
    if (user){
        console.log("email encontrado"); 
        //solo un response
        //res.json( { email: email } );  
        console.log("password =>", user.password);
        //validar contraseña
        //express no soporta promesas, rejections se tratan manualmente:
        try {
           const match = await bcrypt.compare(myPassword, user.password)
           if (match) {
                //este código genera error ya que: 
                    //Cannot set headers after they are sent to the client
                    // at ServerResponse.setHeader                    
                req.email = user.email;                                
                next();
            }else{
                res.status(403).send("Usuario o Password no correcto")                      
            }        
            }
        catch (error) {
            console.log("error =>", error)
        }                    
    }         
    else{
        res.status(404).send("no encontrado")              
    }
};

