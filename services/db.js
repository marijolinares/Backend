const mysql  = require( 'mysql2/promise');

const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'control_inventarios',
    port: 8000,
    password: '122333',
  });

  module.exports = connection;