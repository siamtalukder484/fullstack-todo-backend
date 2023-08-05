require("dotenv").config();
const express = require('express')
const app = express()
const dbConnection = require('./configuration/dbConnection.js')
const routes = require("./routes")
var cors = require('cors');
const path = require('path')

const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server);

app.use(cors())
dbConnection()
app.use(express.json())
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))



app.get('/', function (req, res) {
  res.send('Todo Application')
})

server.listen(8000)