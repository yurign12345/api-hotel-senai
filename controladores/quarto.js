const database = require("./../database")

exports.atribuirQuarto = (req, res) => {
  
    const body = req.body
    const comando = `INSERT INTO quarto_hospede(hospede_id, quarto_id) VALUES (${body.hospede_id},${body.quarto_id})`
  
    database
      .query(comando)
      .then(() => {
        res.status(200).send({message: 'Quarto atribuido ao hospede com sucesso!'});
      })
      .catch((erro) => {
        res.status(500).send({erro: erro});
      })
  }

