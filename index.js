const express = require('express')
const app = express()
const connection = require("./services/db")

const port = 8000
app.use(express.json())

app.get('/test/product', (request, response) => {
  res.send('Hola desde al backend.!')
}) //callback

app.post('/users', async(request, response) => {
  const data = request.body;
  const db = await connection;


  const nombre_usuario = data.nombre_usuario;
  const contrasena = data.contrasena;
  const nombre_completo = data.nombre_completo;
  const correo_electronico = data.correo_electronico;
  const telefono = data.telefono;
  const rol = data.rol;

  const sql =
  'INSERT INTO `usuarios`(`nombre_usuario`, `contrasena`, `nombre_completo`, `correo_electronico`, `telefono`, `rol`' +
  ' VALUES ("${nombre_usuario}","${contrasena}","${nombre_completo}","${correo_electronico}","${telefono}","${rol}")';

const [result, fields] = await db.query(sql);

  response.send("Hola desde usuarios")
})

app.put("/users", async (request, response) =>{
  const sql = 'UPDATE `usuario` SET `nombre_usuario` = linares WHERE `nombre_completo` = "Josh" LIMIT 1';

  const [result, fields] = await connection.query(sql);

})


app.delete("/users", async (resquest, response) => {
  const sql = 'DELETE FROM `usuario` WHERE `nombre_completo` = "Page" LIMIT 1';

  const [result, fields] = await connection.query(sql);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

