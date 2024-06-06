//2 - Invocamos a MySQL y realizamos la conexion
//La librería es mysql, con la palabra reservada "createConnection"
//Se le indica que procese la info de .env (el objeto)
//Se evita que haya ataques o robo de información, por eso se emplea la seguridad de .env
//Aquí también es donde se incluye la información que se visualiza dentro del perfil (sesión)
const mysql = require('mysql');
const connection = mysql.createConnection({
    //Con variables de entorno
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE
});

connection.connect((error)=>{
    if (error) {
      console.error('El error de conexión es: ' + error);
      return;
    }
    console.log('¡Conectado a la Base de Datos!');
  });

  module.exports = connection;