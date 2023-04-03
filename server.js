const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const hotelRotas = require ('./rotas/quarto')

const app = express()
app.use(bodyParser.json())

app.use('/', hotelRotas)

app.listen(port, () => {
    console.log('API executando')
})


