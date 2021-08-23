const mongoose = require('mongoose');
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

module.exports = mongoose.model('user', UserSchema)