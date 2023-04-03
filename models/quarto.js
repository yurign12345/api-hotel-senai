const database = require('./../database')

exports.consultar_total_quartos = () => {
    const query = "SELECT COUNT(*) AS total_quartos FROM quarto"
    return database.query(query)
}