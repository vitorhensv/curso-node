//Importando o http
const http = require('http');
const app = require('./app');
//Setando a porta do servidor
const port = process.env.PORT || 3000;
//Criando o servidor com o app
const server = http.createServer(app);
server.listen(port);