const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({ extended: false });

//templeats
app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//rotas
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/style', function(req, res) {
    res.sendFile(__dirname + '/css/style.css')
})
app.get('/logo', function(req, res) {
    res.sendFile(__dirname + '/img/Logo.png')
})
app.get('/cad', function(req, res) {
    res.render('CadUsuario');
})
app.get('/bolos', function(req, res) {
    res.sendFile(__dirname + '/img/Bolo1.png')
});
app.get('/logouts', function(req, res) {
    res.render('Entrar');
})
app.get('/cadped', function(req, res) {
    res.render('CadPedido')
});
app.get('/pgInicial', function(req, res) {
    res.render('index')
})


//Iniciar servidor
app.listen(3000, function(req, res) {
    console.log("Servidor rodando!!!!!");
});
module.exports = (req, res) => {
    const { name = 'World' } = req.query
    res.status(200).send(`Hello ${name}!`)

}