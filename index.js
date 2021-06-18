const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');

//crear servidor
const app = express();

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://berenice_puntillo:berenice@cluster0.ac7yo.mongodb.net/Laboratorio?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes())

//puerto y arranque
app.listen(4000,()=>{
    console.log('Servidor funcionando')
})