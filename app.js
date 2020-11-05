//Importando o framework "express"
const express = require('express')
//Instanciando o express
const app = express();
//Rotas
const rotaProdutos = require('./routes/produtos');
const rotaPedido = require('./routes/pedido');
//Chamando a rota
app.use('/produtos', rotaProdutos);
app.use('/pedido', rotaPedido);

//req = requisição, res = resposta, next = chamando outro método
//utilizando rotas
// app.use('/teste', (req, res, next) =>{
//  res.status(200).send({
//      mensagem: "OK, deu certo"
//  });
// });


module.exports = app;

