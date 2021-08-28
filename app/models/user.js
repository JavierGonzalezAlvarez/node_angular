const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt =  require('bcrypt');
/**
 * paginar
 * https://www.npmjs.com/package/mongoose-paginate-v2
 */
const mongoosePaginate = require('mongoose-paginate-v2');

const userSchema = new mongoose.Schema(
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
userSchema.plugin(mongoosePaginate);

/**
 * middleware
 * encriptar contraseña si no hay cambio de contraseña
 */
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, 10)
})

module.exports = mongoose.model('user', userSchema)
