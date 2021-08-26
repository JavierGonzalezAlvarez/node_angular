// app/controllers/direccion.js
const { Mongoose } = require("mongoose");
const model_direccion = require("../models/direccion");

exports.getData_Direccion = (req, res) => {
    model_direccion.find({}, (err, docs) => {        
        res.send({ docs: docs })    
    })

    /*
    res.send({
        data: "viene desde ruta controller direccion"        
    })
    */
}


/**
 * insertar data en modelo direccion
 */
 exports.insertData_Direccion = (req, res) => {
    const data = req.body    
    model_direccion.create(data, (err,docs) => {
        if(err) {
            res.send({error: "Error"}, 422)
            console.log(err)
        } else {
            res.send({ datos:docs })
        }
    })
}

