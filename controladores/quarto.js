const quartos = require('../models/quarto')

exports.consultar_total_quartos = (req, res) => {
    quartos.consultar_total_quartos().then((resultado) => {
        res.status(200).send({ quartos: resultado.rows })
    }).catch((erro) => {
        res.status(500).send({ erro: erro })
    })
}