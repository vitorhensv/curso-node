const express = require('express');
const { route } = require('../app');
const router = express.Router();
//GET
router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Retorna o produto'
    });
});
//POST
router.post('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Insere o produto'
    });
});

//GET
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

if(id == 'especial'){
    res.status(200).send({
        mensagem: 'Retornando um produto específico',
        id: id
    });
}else{
    res.status(200).send({
        mensagem: 'Retorna um produto'
    });
} 
});
//PATCH -  Editar
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de produtos'
    })
})
// DELETE
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de produtos'
    });
});

module.exports = router;