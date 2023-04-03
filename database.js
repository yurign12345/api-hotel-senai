const pg = require("pg")
const banco = new pg.Client("postgres://rxfrhsgn:1n2BoiZQSkbzFF5hhY6r0cvsGsqLqWSh@babar.db.elephantsql.com/rxfrhsgn")

banco.connect((erro) => {
    if (erro) {
        return console.log("Não foi possiovel se conectar com o ElephantSQL", erro)
    } else {
        return console.log("Conectado ao ElephantSQL")
    }
})
module.exports = banco