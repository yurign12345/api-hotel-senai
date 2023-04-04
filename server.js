const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const router = require('./rotas/quarto');

const app = express()
app.use(bodyParser.json())
app.use(router);

app.listen(port, () => {
    console.log('API executando')
})