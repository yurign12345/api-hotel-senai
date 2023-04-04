const database = require('../database');

exports.deletarQuarto = (req, res) => { 
    var id = req.params.id;
    const model = database.query(`DELETE FROM quarto_hospede WHERE quarto_id = ${id}; DELETE FROM quarto WHERE quarto_id = ${id}`);
    model.then(
        (resultado) => res.status(200).json(resultado.rows), 
        (erro)=> res.status(404).send({'ERRO':erro}) 
    )
}