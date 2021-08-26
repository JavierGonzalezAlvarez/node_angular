const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const Schema = mongoose.Schema;

const DireccionSchema = new mongoose.Schema(
    {   
        user: {
            type: Schema.ObjectId, 
            ref: "user" },
        direccion: {
            type: String,
            required: true,
            maxlength: [100, 'Dirección no mas de 100 caracteres']
        },
        provincia: {
            type: String,
            unique: true,
            required: [true, 'Campo requerido']            
        },
        codigoPostal: {
            type: String,
            required: [true, 'Campo requerido']
        },
        isActive: {
            type: Boolean,
            default: true
        },
        telefono: {
            type: String
        }        
    },
    {
        versionKey: false,
        timestamps: true
    }
)

/**
 * activar paginacion
 */
DireccionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('direccion', DireccionSchema)
