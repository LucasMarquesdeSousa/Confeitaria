const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extended:false});

//templeats
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//rotas
app.get('/', function(req, res){
    res.render('index');
});
app.get('/style', function(req, res){
    res.sendFile(__dirname+'/css/style.css')
})
app.get('/logo', function(req, res){
    res.sendFile(__dirname+'/img/Logo.png')
})
//Iniciar servidor
app.listen(3000, function(req, res){
    console.log("Servidor rodando!!!!!");
});