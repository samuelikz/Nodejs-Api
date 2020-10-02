
### Importante!

 - Tenha instalado em sua maquina o nodejs
 - Utilizando a Versão (+12)
 
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

 
