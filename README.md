
### Importante!

 - Tenha instalado em sua maquina o nodejs
 - Utilizando a Versão (+12)
 - Documentação [Express.js](https://expressjs.com/)
 
 ### Iniciar projeto
 - Iniciar projeto
 
```sh
$ mkdir Nodejs-api
$ cd Nodejs-api
$ npm init -y
```
### Instalar Dependências 
 - Instalar Dependências
 
 ```sh
 npm i -S express
 npm i -D nodemon
```
### Criar arquivo 
- Criar arquivo server.js

```sh
 touch server.js
```

### Configurar arquivo server.js
- Configuração inicial

```sh
 - Arquivo server.js
 
 const express = require('express');
 const app = express();
 
 const port = process.env.PORT || 3000
 
  app.get('/', (req, res) => {
    res.send('Hello World!')
  });
  
  app.listen(port, () => {
    console.log(`Servidor Funcionando http://localhost:${port}`)
  })
```
### Configurar arquivo package.json
- Configuração parar dar start com o npm

```sh
 - Adicionar Script ao package.json
 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  }
```
### Start  
- Apos configurar o arquivo server.js
- daremos um start

```sh
 npm start
```
### Criando Pasta src  
- Agora vamos preparar o servidor para receber as pastas src, controllers, routes
- Primeiro iremos criar a pasta src
- Dentro dela iremos criar duas pastas a controllers, e routes

### Criando arquivo de rotas 
- Agora criar o arquivo usuarioRoutes.js para receber as rotas
- Configuração inicial do Arquivo

```sh
 module.exports = function (app) {
    const usuarios = require ('../controllers/usuariosController')
    app.route('/usuarios')
        .get(usuarios.listAll)
        .post(usuarios.createOne)
}
```
### Criando arquivo usuariosController 
- Agora criar o arquivo usuariosController.js
- Configuração inicial do Arquivo

```sh
exports.listAll = function (req, res) {
    let usuarios = [
        {
            nome: 'Samuel',
            email: 'aloi@gmail.com.nr'
        },
        {
            nome: 'karol',
            email: 'aloi@gmail.com.nr'
        }
    ]
    res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message : 'Usuario Criado',
        data: req.body
    }
    res.send(response)
 }
}
```
 
