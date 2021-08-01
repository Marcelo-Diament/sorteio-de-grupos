// Importa o pacode node express
const express = require('express')
// Importa o arquivo de rotas
const routes = require('./routes')

// Cria o app a partir do express (pacote node importado)
let app = express()
// Define a porta a ser utilizada
const port = 7000

// Chama as rodas definidas em './routes/index.js'
app.use('/', routes)

// Escuta a porta definida e retorna uma mensagem de confirmação no console do terminal
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))