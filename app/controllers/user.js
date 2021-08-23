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

exports.insertData = (req, res) => {
    const data = req.body
}