const router = require("./routes/index")
const express = require('express');
const app = express()
const handlebars = require('express-handlebars');
const { Server } = require('socket.io')
const path = require('path');
const PORT = 8080;
app.set("auth", false);
app.set("user", "");
app.use(express.urlencoded({ extended: true }));
const httpServer = app.listen(PORT, err => {
  if (err)  console.log(err)
  console.log(`Escuchando en el puerto ${httpServer.address().port }`)
})

app.use(express.static(path.join(__dirname, 'public')))
const io = new Server(httpServer);

app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars.engine())
app.set('views', "./views")

app.use('/', router);
module.exports = app;
io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  socket.on("login", (email) => {
    app.set("auth", true);
    app.set("user", email);
  })

  socket.on('mensaje', data => {
      io.emit("recibido")
  })

  socket.on('disconnect',()=>{
      console.log('Disconnect')
  })
})


