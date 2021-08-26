// app/controllers/query.js

const { Mongoose } = require("mongoose");
const model_direccion = require("../models/direccion");
const model_user = require("../models/user");

//https://mongoosejs.com/docs/queries.html
exports.getData_DireccionUser = (req, res) => {
    model_direccion.find({}, (err, docs) => {                
        model_user.populate(docs, { path: "codigoDireccion"}, 
            (err, docs) => { 
                res.status(200).send( { docs: docs } )
            })
      })
}

exports.getData_UserDireccion = (req, res) => {
    model_user.find({}, (err, docs) => {                
        model_direccion.populate(docs, { path: "codigoDireccion"}, 
            (err, docs) => {
                res.status(200).send( { docs: docs } )    
            })
    })
}

    