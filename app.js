//Importando o framework "express"
const express = require('express')
//Instanciando o express
const app = express();
//Para tratativa de erro
const morgan = require('morgan');
const bodyParser = require('body-parser')
//Rotas
const rotaProdutos = require('./routes/produtos');
const rotaPedido = require('./routes/pedido');

//Setando ambiente no qual o morgan será utilizado
//Executa um callback para monitorar as rotas
app.use(morgan('dev')); 
//Apenas para dados simples
app.use(bodyParser.urlencoded({extended: false}));
//Aceitando apenas JSON como entrada no body
app.use(bodyParser.json());
//Informando de qual servidor a API é acessível
//Caso queira acessar um servidor específico, basta substituir 8 "*" pelo link desejado
//"*" é utilizado para aceitar todos os links
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    //Propriedades aceitas pela API
    res.header('Access-Control-Allow-Header',
     'Origin, Content-Type, X-Requested-With, Accept, Authorization' 
     );
    //Métodos que a API aceita
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();

})
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

