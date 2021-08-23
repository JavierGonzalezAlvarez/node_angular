const mongoose = require('mongoose');
const DB_URI = `mongodb://localhost:27017/conexion_node_crud`;

/**
 * exportamos el modulo para ser llamado desde otros ficheros
 */
module.exports = () => {
    const connect =  () => {
        mongoose.connect(
            DB_URI,
            {
               keepAlive: true,
               useNewUrlParser: true,
               useUnifiedTopology: true
            },
            (err) => {
                if(err) {
                    console.log("Error de acceso a BD, comprobar si mongo está corriendo");
                }else{
                    console.log("Conexion a DB correcta, ok");
                }
            }
        )
    }
    //para usar la funcion
    connect();
}