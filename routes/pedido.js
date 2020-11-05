const express = require('express');
const { route } = require('../app');
const router = express.Router();
//GET
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});
//POST
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'O pedido foi criado'
    });
});

//GET
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_pedido
    res.status(200).send({
        mensagem: 'Detalhes do pedido',
        id_pedido: id
    });
});
//PATCH -  Editar
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Pedido alterado'
    })
})
// DELETE
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto excluido'
    });
});

module.exports = router;