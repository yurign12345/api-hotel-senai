const express = require('express');
const router = express.Router();
const hotel = require('../controladores/quarto.js');

router.delete("/deletar-quarto/:id",hotel.deletarQuarto);

module.exports = router;