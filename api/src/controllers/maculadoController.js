var maculadoModel = require("../models/maculadoModel");

function autenticar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        maculadoModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else{
        maculadoModel.buscarMaculadoPorEmail(email)
            .then((resultadoEmail) => {
                console.log(resultadoEmail);
                if(resultadoEmail.length > 0){
                    res.status(401).json({mensagem: "Ja existe um maculado com esse email"})
                }else{
                    maculadoModel.buscarMaculadoPorNome(nome)
                    .then((resultadoNome)=> {
                        console.log(resultadoNome);
                        if(resultadoNome.length > 0){
                            res.status(401).json({mensagem: "Ja existe um maculado com esse nome"})
                        }else{
                            maculadoModel.cadastrar(nome, email, senha)
                            .then(
                                function (resultado) {
                                    res.json(resultado);
                                }
                            ).catch(
                                function (erro) {
                                    console.log(erro);
                                    console.log(
                                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                                        erro.sqlMessage
                                    );
                                    res.status(500).json(erro.sqlMessage);
                                }
                            );   
                        }
                    }).catch((erro) => {
                        console.log(erro);
                        console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    });   
                }   
            }).catch((erro) => {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });   
    }
}



module.exports = {
    autenticar,
    cadastrar
}