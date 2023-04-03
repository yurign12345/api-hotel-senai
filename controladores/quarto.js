const database = require('./../database')

exports.inserirquarto = (req, res, next) => {    
    const novoQuarto = req.body
    const query = 'INSERT INTO quarto(quarto_id, descricao) VALUES ($1, $2)'
    const values = [novoQuarto.Num, novoQuarto.quarto_id, novoQuarto.descricao]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Quarto cadastrado' })
        database.query = 'SELECT * FROM quarto'
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}