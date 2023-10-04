const express = require('express')
const server = express()

server.get('/', function(req,res,next){
    console.log('inicio')
    next()
    console.log('fim...')
})

server.get('/', function(req,res){
    console.log('Resposta...')
    res.send('<h1>ola express</h1>')
})



server.listen(3000, () => console.log('executando'))