const _ = require('lodash')

const alunos = [{
    nome: 'joao',
    nota: 7.6
},{
    nome: 'maria',
    nota: 8.6
},{
    nome: 'fernando',
    nota: 6.1
}]

const media = _.sumBy(alunos,'nota') /alunos.length

console.log(media)