const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const quartoRoutes = require("./rotas/quarto.js")

const app = express()
app.use(bodyParser.json())

app.use("/quarto", quartoRoutes)

app.listen(port, () => {
    console.log('API executando')
})