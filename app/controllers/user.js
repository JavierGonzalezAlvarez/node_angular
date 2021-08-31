const { Mongoose } = require("mongoose");
const model_user = require("../models/user");
const jwt = require('jsonwebtoken');

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
    model_user.paginate({}, { limit:10 }, (err,result) => {
        res.send({ documento: result }),
        console.log({ documento: result.docs })    
    })
    
}

/**
 * insertar data de usuarios desde postman
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
 * register/user
 * register de usuario desde postman
 */
const secret = "34p5902DFgHniUEMVNJuYh7632334d7DUYSD"
const { addUser } = require('../services/userServices');
exports.registerData_User_Front = async (req, res) => {    
    try {       
        const user = await (addUser(req.body))
        //https://github.com/auth0/node-jsonwebtoken => Sign asynchronously
        jwt.sign( {user: user}, secret, (err, token) => {
            //devolvemos un 200, usuario y token al front
            return res.status(200).json( { usuario: user, token: token } );                                                                             
        });             
    } catch (e) {
        console.error(e)
        return res.status(400).send("Respuesta Back: Error en campos obligatorios")
    }    
}

/**
 * login
 * login de usuario desde angular
 */
exports.loginData_User_Front = async (req, res) => {    
    try {   
        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            const bearerToken = await bearerHeader.split(' ')[1]
            token = bearerToken;
            console.log("token =>", token);                                
        } else {        
            res.sendStatus(403);
        }
              
        jwt.verify( token , secret, (err, authData) => {
            if(err){
                res.sendStatus(400);
            }else{
                res.json({
                    mensaje: "verificado desde angular",
                    authData, token: token
                });
            }            
        })
    } catch (e) {
        console.error(e)
        return res.status(400).send("Token no recibido")
    }           
};


/**
 * parseado
 */
//const parseadoId = (id) => {
//    return Mongoose.Types.ObjectId(id)
//}

exports.updateData_User = (req, res) => {        
    const referencia_id = req.params.id
    //const { id } = req.params
    const body = req.body
    model_user.updateOne(
        //{ _id: parseadoId(id) },
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

exports.deleteData_User = (req, res) => {        
    const referencia_id = req.params.id
    //const { id } = req.params    
    model_user.deleteOne(
        //{ _id: parseadoId(id) },
        { _id: referencia_id },        
        (err,docs) => {                
            if(err) {
                res.send({error: "Error actualización"}, 422)
                console.log(err)
        } else {
                res.send({ datos:docs })
        }
    })
}

/**
 * configuracion multer
 */
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {      
      cb(null, `${Date.now()} - ${file.originalname}`)
    }
  })

const upload = multer({ storage: storage })
exports.upload = upload.single('myFiles')

exports.uploadData_User = (req, res) => {        
    res.send({ resultado: 'fichero subido con exito' })  
}
