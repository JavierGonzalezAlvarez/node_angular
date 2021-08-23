const mongoose = require('mongoose');

/**
 * paginar
 * https://www.npmjs.com/package/mongoose-paginate-v2
 */
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        apellido: {
            type: String
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        foto: {
            type: String
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
)

/**
 * activar paginacion
 */
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user', UserSchema)
