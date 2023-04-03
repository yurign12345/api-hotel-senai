const express = require('express')
const router = express.Router()
const controladores = require ('../controladores/quarto')

router.get('/consultar-total-quartos', controladores.consultar_total_quartos)

module.exports = router