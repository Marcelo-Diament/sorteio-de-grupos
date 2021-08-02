// Importa o pacote node express
const express = require('express')
// Define router a partir do Router do express
const router = express.Router()
// Importa o arquivo de controladores '../controllers/index.js'
const controller = require('../controllers')

// Rota para sortear grupos e listar grupos sorteados
router.get('/sortear-grupos', controller.sortearGrupos)
// Rota para listar todos os grupos pré definidos salvos
router.get('/grupos-pre-definidos', controller.listarGruposPreDefinidos)
// Rota para listar todos os grupos salvos
router.get('/grupos', controller.listarGrupos)
// Rota para listar todos os alunos sem grupo
router.get('/alunos-sem-grupo', controller.listarAlunosSemGrupo)
// Rota para listar todos os alunos
router.get('/alunos', controller.listarAlunos)

// Exporta o módulo atual (router)
module.exports = router