//Constantes
const express = require('express');
const path = require('path');
const app = express();
//middlewares
app.use(express.static('public'));
//rutas: get, post, put, delete
app.get('/', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/index.html'));
})
app.get('/creacionDeCuenta', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/register.html'));
})
app.get('/ingresaATuCuenta', (req, res)=>{
  res.sendFile(path.resolve(__dirname,'./views/login.html'));
})
//Ruteo LOCAL
app.listen(3001, ()=> console.log("Servidor escuchando en puerto 3001"));
//ruteo HEROKU
app.set('puerto',process.env.PORT || 3000);
app.listen(app.get('puerto'), ()=>console.log(`Servidor escuchando en puerto ${app.get('puerto')}`));

