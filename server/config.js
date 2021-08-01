// Importa o JSON de alunos
const alunos = require('./data/alunos.json')

// Objeto a ser exportado
const config = {}

// Alunos do JSON original
config.alunos = alunos

// Número de alunos por grupo
config.alunosPorGrupo = 6

// Quantidade de grupos (considerando o número de alunos por grupo pré definido) - alguns grupos terão um aluno a mais
config.gruposQnt = Math.floor(alunos.length / config.alunosPorGrupo)

// Exporta o módulo atual (config)
module.exports = config