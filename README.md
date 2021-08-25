## crud en node/express/angular

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

instalar mongodb Comunity Edition en linux:
-----------------------------------------------
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
$ sudo apt-get update
$ sudo apt-get install -y mongodb-org

## start mondo-db
--------------------
$ sudo systemctl start mongod

## acceder mongo db desde el shell
----------------------------------
$ mongo

## instalar mongodb-compass en linux
------------------------------------
$ wget https://downloads.mongodb.com/compass/mongodb-compass_1.26.1_amd64.deb
$ sudo dpkg -i mongodb-compass_1.26.1_amd64.deb

## start mongodb-compass
-----------------------
$ mongodb-compass

## Nueva conexion a mongodb-compass
-----------------------------------
mongodb://localhost:27017/conexion_node_crud

13. crear schema de cada 'tabla'
app/models/user
14. instalar body-parser
$ npm i body-parser --save
15. crear la ruta post
16. probar desde postman
método: post
http://localhost:3001/post_user/user

{    
    "name": "javier",
    "apellido": "gonzalez",
    "email": "javier@gmail.com" 
}

17. dehabilitar version en registros.
añadir en modelo models/user.js
    {
        versionKey: false,
        timestamps: true
    }

18. paginar. instalar:
https://www.npmjs.com/package/mongoose-paginate-v2
$ npm i mongoose-paginate-v2

19. update y delete
20. instalar multer para subir ficheros
https://www.npmjs.com/package/multer
$ npm i multer

21. instalar CORS
$ npm i cors

22. forzar estructira de codigo
$ npm i eslint
$ ./node_modules/.bin/eslint --init
en package.json creamos un script para mostrar errores
"lint": "eslint . /*.js"
$ npm run lint

Problemas con typescript al ejecutar lint: 
eliminar referencias a typescritp or crear fichero 
.eslintignore


