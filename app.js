//Importando o framework "express"
const express = require('express')
//Instanciando o express
const app = express();
//Para tratativa de erro
const morgan = require('morgan');
//Rotas
const rotaProdutos = require('./routes/produtos');
const rotaPedido = require('./routes/pedido');

//Setando ambiente no qual o morgan será utilizado
//Executa um callback para monitorar as rotas
app.use(morgan('dev')); 
//Chamando a rota
app.use('/produtos', rotaProdutos);
app.use('/pedido', rotaPedido);

//Tratamento de erro caso nenhuma das rotas acima seja chamada
app.use((req, res, next) =>{
    const erro = new Error('Rota não encontrada');
    erro.status = 404;
    next(erro);
});

//Caso o erro seja diferente de 404 é retornado 500
app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

//req = requisição, res = resposta, next = chamando outro método
//Utilizando rotas
// app.use('/teste', (req, res, next) =>{
//  res.status(200).send({
//      mensagem: "OK, deu certo"
//  });
// });


module.exports = app;

