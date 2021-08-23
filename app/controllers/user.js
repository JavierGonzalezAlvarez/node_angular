const { Mongoose } = require("mongoose");
const model_user = require("../models/user");

/**
 * configurar consulta DATA de usuarios
 */
exports.getData_User = (req, res) => {
    /* modelo sin paginacion
    model_user.find({}, (err, docs) => {        
        res.send({ docs: docs })    
    })
    */

    /**
     * modelo con paginacion
     * opcion de colocar objeto de "options"
     */
    model_user.paginate({}, { limit:2 }, (err,result) => {
        res.send({ docs: result })    
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

/**
 * parseado
 */
//const parseId = (id) => {
//    return Mongoose.Types.ObjectId(id)
//}

exports.updateData_User = (req, res) => {        
    const referencia_id = req.params.id
    //const { id } = req.params
    const body = req.body
    model_user.updateOne(
        //{ _id: parseId(id) },
        { _id: referencia_id },
        body
        , (err,docs) => {                
            if(err) {
                res.send({error: "Error actualización"}, 422)
                console.log(err)
        } else {
                res.send({ datos:docs })
        }
    })
}
