const express = require("express")
const router = express.Router()
const controladores = require("../controladores/quarto.js")


router.post("/atribuir", controladores.atribuirQuarto)




module.exports = router