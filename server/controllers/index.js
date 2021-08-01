// Importando o método 'sortearGrupos' do arquivo helpers
const { sortearGrupos } = require('../helpers')
// Importando o módulo nativo do node - fs - file system
const fs = require('fs')
// Importando o módulo nativo do node - path - para trabalhar com 'caminhos' de arquivos
const path = require('path')

// Objeto controlador, onde definimos os métodos a serem executados de acordo com cada rota
const controller = {
  listarAlunos: (req, res) => {

    // Listando todos os alunuos
    const alunos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'alunos.json')))

    // Retornando todos os alunos
    res.send(alunos)
  },
  sortearGrupos: (req, res) => {

    // Sorteando grupos
    const gruposSorteados = sortearGrupos()

    // Atualizando grupos sorteados
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'grupos-sorteados.json'), JSON.stringify(gruposSorteados, null, 4))

    // Listando grupos pré definidos
    const gruposPreDefinidos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'grupos-predefinidos.json')))

    // Listando todos os grupos
    const todosOsGrupos = [...gruposPreDefinidos, ...gruposSorteados]

    // Atualizando JSON de todos os grupos
    fs.writeFileSync(path.join(__dirname, '..', 'data', 'grupos.json'), JSON.stringify(todosOsGrupos, null, 4))

    // Retornando os grupos sorteados
    res.send(gruposSorteados)
  },
  listarGrupos: (req, res) => {

    // Listando todos os grupos
    const todosOsGrupos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'grupos.json')))

    // Retornando todos os grupos
    res.send(todosOsGrupos)
  }
}

// Exportando o módulo atual (controller)
module.exports = controller