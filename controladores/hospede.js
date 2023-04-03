const hospedes = require('../modelos/hospede')

exports.deletaHospede = (req, res) => {
    const id = [req.params.id];
    hospedes.delet(id).then((resultado) => {
            res.status(200).send(
                {
                    message: `Hospede id: ${id} excluido com sucesso`,
                }
            );
        })
        .catch((erro) => { res.status(500).send({ erro: erro }) });
}
