## crud en node y express

1. crear proyecto
$ npm init
2. crear fichero server.js
3. correr la app
$ node server o $ npm run start
4. instalar nodemon en desarrollo
$ npm install -D nodemon
cambios en package.json

  "scripts": {
    "start": "nodemon server.js",
    ...
  },

5. ejecutar app
$ npm run start
6. crear estructura de node 
app\controllers\
app\routes\user.js
app\routes\direccion.js
7. en ..routes creamos user.js
``
8. exportamos las rutas al archivo server.js
9. crear carpeta confog donde tendremos nuestro archivo de conexion a MongoDB
10. instalar mongoose
$ npm install mongoose --save
11. crear carpeta config y la conexion a la DB mongoose
proyecto\config\connectDB.js
12. crear el modelo. creamos carpeta models
app\models\user.js
13. crear schema de cada 'tabla'

