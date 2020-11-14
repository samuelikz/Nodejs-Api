
### Importante!

 - Tenha instalado em sua maquina o nodejs
 - Utilizando a Versão (+12)
 - Documentação [Express.js](https://expressjs.com/)
 - Documentação [Sequelize ORM](https://sequelize.org/master/index.html)
 
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
 $ npm i -S express
 $ npm i -D nodemon
```
### Criar arquivo 
- Criar arquivo server.js

```sh
$ touch server.js
```

### Configurar arquivo server.js
- Configuração inicial
- Importação do express

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
$ npm start
```
### Criando Pasta src  
- Agora vamos preparar o servidor para receber as pastas src, controllers, routes, models
- Primeiro iremos criar a pasta src
- Dentro dela iremos criar duas pastas a controllers, routes e models

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
### Instalando Sqlite
- Nesta API iremos utilizar o sqlite3
- Instalação no projeto

```sh
$ npm i -S sqlite3
```
### Instalando o Sequelize
- Nesta API iremos utilizar o ORM Sequelize
- Instalação no projeto

```sh
$ npm i -S sequelize
```
### Instalando o Sequelize-cli
- Tambem iremos instalar o Sequelize-cli
- Instalação no ambiente de desenvolvimento

```sh
$ npm i -D sequelize-cli
```
### Criar Arquivo de configuração do Sequelize
- Neste arquivo iremos configurar os arquivos do sequelize
- Criar arquivo .sequelizerc
- Configurar o arquivo

```sh
const path = require('path')

module.exports = {
    "config": path.resolve('./src/config', 'config.json'),
    "models-path": path.resolve('./src/models'),
    "migrations-path": path.resolve('./src/migrations'),
    "seeders-path": path.resolve('./src/seeders')
}
```
### Iniciar o init Sequelize
- Iniciar o sequelize init
 
```sh
$ npx sequelize init
```
### Configurar o arquivo config.json
- Agora iremos configurar o arquivo config.json dentro da pasta models
- Configuração inicial do Arquivo

```sh
{
  "development": {
    "storage": "./database.sqlite3",
    "dialect": "sqlite"
  },
  "test": {
    "storage": "./database.sqlite3",
    "dialect": "sqlite"
  },
  "production": {
    "storage": "./database.sqlite3",
    "dialect": "sqlite"
  }
}
```
