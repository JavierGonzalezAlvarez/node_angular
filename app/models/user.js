const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 * paginar
 * https://www.npmjs.com/package/mongoose-paginate-v2
 */
const mongoosePaginate = require('mongoose-paginate-v2');

const UserSchema = new mongoose.Schema(
    {
        //_id: Schema.Types.ObjectId,
        name: {
            type: String
        },
        apellido: {
            type: String
        },        
        email: {
            type: String,
            unique: true,
            required: [true, 'Email obligatorio']
        },
        password: {
            type: String,
            required: [true, 'Password obligatorio']
        },
        isActive: {
            type: Boolean,
            default: true
        },
        foto: {
            type: String
        },
        //array: relations 1 to many
        codigoDireccion: [{
            type: Schema.ObjectId,
            ref: "direccion" }]
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
