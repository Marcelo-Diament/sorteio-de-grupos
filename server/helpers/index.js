// Importa alguns valores pré definidos em '../config.js'
const { alunos, alunosPorGrupo, gruposQnt } = require('../config')

// Cria o objeto helpers (que será exportado)
const helpers = {}

// Retorna um índice aleatório dentro do range de índices de um array
helpers.indiceAleatorioDeUmArray = arr => Math.floor(Math.random() * arr.length)

// Retorna uma cópia do array - embaralhada
helpers.embaralharArray = array => {

  // Comprimento do array recebido
  let len = array.length

  // Array a ser 'alimentado'
  let arrayRandom = []

  // Enquanto o comprimento do array embaralhado for menor que o comprimento do array enviado...
  while (arrayRandom.length < len)
    // ...o array embaralhado recebe novos itens aleatórios
    arrayRandom.push(array.splice(helpers.indiceAleatorioDeUmArray(array), 1)[0])

  // Retorna o array embaralhado
  return arrayRandom
}

// Sorteia grupos
helpers.sortearGrupos = () => {

  // Array de arrays vazios de acordo com a quantidade de grupos pré definida
  let grupos = Array(gruposQnt).fill([])

  // Gera um array embaralhado de alunos
  let alunosEmbaralhados = helpers.embaralharArray(alunos)

  // Gera uma cópia do array de grupos com cada grupo já alimentado (de acordo com o número pré definido de alunos por grupo)
  // Ao adicionar um aluno, o mesmo é removido do array embaralhado de alunos
  let resultado = grupos.map(grupo => grupo = alunosEmbaralhados.splice(0, alunosPorGrupo))

  // Se sobrar aluno sem grupo...
  if (alunosEmbaralhados.length) {
    // Enquanto sobrar alunos sem grupo...
    while (alunosEmbaralhados.length)
      // ...o aluno é adicionado aos grupos já preenchidos (começando pelo primeiro, de um em um - jamais chegará no último)
      resultado[alunosEmbaralhados.length - 1].push(alunosEmbaralhados.shift())
  }
  // Retorna o array de grupos de alunos (também são arrays)
  return resultado
}

// Exporta o módulo atual (helpers)
module.exports = helpers