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