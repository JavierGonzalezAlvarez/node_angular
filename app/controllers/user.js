//const { model } = require("mongoose");
const model_user = require("../models/user");

/**
 * configurar consulta DATA de usuarios
 */
exports.getData_User = (req, res) => {
    model_user.find({}, (err, docs) => {
        res.send({
            docs: docs
        })
    })
}

/**
 * insertar data de usuarios 
 */

exports.insertData_User = (req, res) => {
    const data = req.body
    
    //probar que se envian y reciben datos    
    //res.send({ data })

    model_user.create(data, (err,docs) => {
        if(err) {
            res.send({error: "Error"}, 422)
            console.log(err)
        } else {
            res.send({ datos:docs })
        }
    })

}