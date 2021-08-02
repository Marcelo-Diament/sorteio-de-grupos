// Importando o método 'sortearGrupos' do arquivo helpers
const { sortearGrupos } = require('../helpers')
// Importando o módulo nativo do node - fs - file system
const fs = require('fs')
// Importando o módulo nativo do node - path - para trabalhar com 'caminhos' de arquivos
const path = require('path')

// Objeto controlador, onde definimos os métodos a serem executados de acordo com cada rota
const controller = {
  listarAlunos: (req, res) => {

    // Resposta a ser retornada
    let response = '<h1>Ops... Não há nenhum grupo registrado ainda...</h1>'

    // Listando todos os alunuos
    const alunos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'alunos-sem-grupo.json')))

    // Se houver alunos registrados...
    if (alunos.length) {
      // Atualizamos a resposta para retornar esses alunos
      response = alunos
    }

    // Retornando todos os alunos
    res.send(response)
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

    // Resposta a ser retornada
    let response = '<h1>Ops... Não há nenhum grupo registrado ainda...</h1>'

    // Listando todos os grupos
    const todosOsGrupos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'grupos.json')))

    // Listando todos os grupos
    const gruposPreDefinidos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'grupos-predefinidos.json')))

    // Caso haja grupos em grupos.json...
    if (todosOsGrupos.length) {

      // Atualizamos a resposta
      response = todosOsGrupos

      // Caso não haja grupos mas haja grupos pré definidos
    } else if (gruposPreDefinidos.length) {

      // ...atualizamos a resposta também
      response = gruposPreDefinidos
    }
    // Retornando todos os grupos
    res.send(response)
  },
  listarGruposPreDefinidos: (req, res) => {

    // Resposta a ser retornada
    let response = '<h1>Ops... Não há nenhum grupo pré definido ainda...</h1>'

    // Listando todos os grupos
    const gruposPreDefinidos = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'grupos-predefinidos.json')))

    // Caso haja grupos em grupos-predefinidos.json...
    if (gruposPreDefinidos.length) {

      // ...atualizamos a resposta também
      response = gruposPreDefinidos
    }
    // Retornando todos os grupos
    res.send(response)
  }
}

// Exportando o módulo atual (controller)
module.exports = controller