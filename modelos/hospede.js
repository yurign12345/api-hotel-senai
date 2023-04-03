const database = require('../database')

exports.delet = (id) => {

    const ordem = `DELETE FROM hospede WHERE hospede_id = $1`

    return database.query(ordem, id)
}