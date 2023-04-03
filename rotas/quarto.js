const express = require('express');
const router = express.Router();
const controller = require('./../controladores/quarto');

router.get('/CadastrarQuarto', controller.inserirquarto);

module.exports = router;