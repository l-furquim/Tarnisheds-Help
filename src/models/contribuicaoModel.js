var database = require("../database/config");
var sqlUtils = require("../utils/sql");

function buscarPorId(id) {
  var instrucaoSql = `SELECT * FROM Contribuicao WHERE idContribuicao = ${id}`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `
                    SELECT c.idContribuicao,
                        c.titulo,
                        c.conteudo, 
                        c.contribuicaoFechada, 
                        c.votos, 
                        c.tipo,
                        c.tag,
                        c.conteudoTag,
                        m.nome
                        FROM Contribuicao AS c
                        LEFT JOIN Contribuicao AS r ON c.fkResposta = r.idContribuicao
                        JOIN Maculado AS m ON c.fkMaculado = m.idMaculado ORDER BY c.votos;
                   `;

  return database.executar(instrucaoSql);
}

/* function buscarPorCnpj(cnpj) {
  var instrucaoSql = `SELECT * FROM empresa WHERE cnpj = '${cnpj}'`;

  return database.executar(instrucaoSql);
} */

function cadastrar(titulo, conteudo, tipo, fkMaculado, tag, conteudoTag) {
  const data = new Date();
  const dataFormatada = sqlUtils.formatarDataParaSQL(data);

  var instrucaoSql = 
    `INSERT INTO Contribuicao (titulo,conteudo, dtContribuicao,contribuicaoFechada,votos,tipo,fkMaculado, fkResposta, tag, conteudoTag) VALUES 
    ('${titulo}','${conteudo}','${dataFormatada}',${false},'${0}', '${tipo}','${fkMaculado}', ${null}, '${tag}', '${conteudoTag}')`;

  return database.executar(instrucaoSql);
}

function buscarPorTipo(tipo) {
  const instrucaoSql = `
                       SELECT c.titulo, 
                        c.conteudo AS conteudo_contribuicao, 
                        c.contribuicaoFechada, 
                        c.votos, 
                        c.tipo AS tipo_contribuicao,
                        c.tag,
                        c.conteudoTag
                        r.conteudo AS conteudo_resposta, 
                        r.contribuicaoFechada AS contribuicaoFechada_resposta, 
                        r.votos AS votos_resposta, 
                        r.tipo AS tipo_resposta, 
                        m.nome
                        FROM Contribuicao AS c
                        LEFT JOIN Contribuicao AS r ON c.fkResposta = r.idContribuicao
                        JOIN Maculado AS m ON c.fkMaculado = m.idMaculado
                        WHERE c.tipo = ${tipo};
                      `
  return database.executar(instrucaoSql);
} 


module.exports = {
  buscarPorId, 
  cadastrar, 
  listar,
  buscarPorTipo
};
