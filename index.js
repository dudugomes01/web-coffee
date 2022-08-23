const express = require('express')
const path = require('path')
const app = express()

//definindo templete engine
app.set('view engine', 'ejs')

//definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views'))) Mais facil

//definindo os arquivos publicos
//app.use(express.static(path.join(__dirname, 'public')))
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)

//Rotas
app.get('/',(req, res) =>{
    res.render('index')
})

app.get('/quem',(req, res) => {
    res.render('quemSomos')
})
app.get('/produtos',(req, res) => {
    res.render('produtos')
})
//404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada')
})

//executando o servidor
const port = process.env.PORT || 8080
app.listen(port,()=> console.log(`Server is listening on port ${port}`))
