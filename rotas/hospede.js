const express = require('express');
const router = express.Router();
const controller = require("../controladores/hospede");

router.get('hospedes/excluir/:id', controller.deletaHospede);

module.exports = router;