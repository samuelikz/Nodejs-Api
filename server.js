const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require ('./src/routes/usuarioRoutes.js')
routes(app)

app.route('/')
.get((req, res) => {
  res.send('Aplicação Funcionando')
})

const port = process.env.PORT || 3000

app.listen(port)
console.log('´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´')
console.log(`Servidor Funcionando http://localhost:${port}`)
console.log('.............................................')