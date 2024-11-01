var vezesClicadas = 0;

const opcoesPorCategoria = {
  bosses: [
    { value: "margit-o-pressagio-fel", text: "Margit, o Presságio Fell" },
    { value: "godrick-o-enxertado", text: "Godrick, o Enxertado" },
    { value: "lobo-vermelho-de-radagon", text: "Lobo Vermelho de Radagon" },
    { value: "rennala-rainha-da-lua-cheia", text: "Rennala, Rainha da Lua Cheia" },
    { value: "cavaleiro-real-loretta", text: "Cavaleiro Real Loretta" },
    { value: "radahn-flagelo-das-estrelas", text: "Radahn, Flagelo das Estrelas" },
    { value: "morgott-o-rei-dos-pressagios", text: "Morgott, o Rei dos Presságios" },
    { value: "gigante-de-fogo", text: "Gigante de Fogo" },
    { value: "mohg-senhor-do-sangue", text: "Mohg, Senhor do Sangue" },
    { value: "malenia-lamina-de-miquella", text: "Malenia, Lâmina de Miquella" },
    { value: "dupla-dos-peles-negras", text: "Dupla dos Peles Negras" },
    { value: "maliketh-a-lamina-negra", text: "Maliketh, a Lâmina Negra" },
    { value: "sir-gideon-ofnir", text: "Sir Gideon Ofnir" },
    { value: "godfrey-primeiro-lorde-elden", text: "Godfrey, Primeiro Lorde Elden" },
    { value: "radagon-da-ordem-dourada", text: "Radagon da Ordem Dourada" },
    { value: "fera-elden", text: "Fera Elden" }
  ],
  armas: [
    { value: "espada-longa", text: "Espada Longa" },
    { value: "machado-de-guerra", text: "Machado de Guerra" },
    { value: "arco-longo", text: "Arco Longo" },
    { value: "katana", text: "Katana" },
    { value: "lança", text: "Lança" },
    { value: "alabarda", text: "Alabarda" },
    { value: "espada-curta", text: "Espada Curta" },
    { value: "foice", text: "Foice" },
    { value: "adaga", text: "Adaga" },
    { value: "espada-gigante", text: "Espada Gigante" },
    { value: "martelo", text: "Martelo" },
    { value: "espada-sagrada", text: "Espada Sagrada" },
    { value: "tridente", text: "Tridente" },
    { value: "besta", text: "Besta" }
  ]
};

const categoriaSelect = document.getElementById("categoriaFiltro");
const opcoesSelect = document.getElementById("opcoes");

categoriaSelect.addEventListener("change", function() {
  opcoesSelect.innerHTML = '<option value="">Selecione uma opção</option>';

  const categoria = categoriaSelect.value;
  const opcoes = opcoesPorCategoria[categoria] || [];

  // Adiciona as novas opções
  opcoes.forEach(opcao => {
    const optionElement = document.createElement("option");
    optionElement.value = opcao.value;
    optionElement.textContent = opcao.text;
    opcoesSelect.appendChild(optionElement);
  });
});

function criarPost() {
  var container = containerNovoPost;
  
  window.onclick = function(event){
    if(event.target == container){
      container.style.display = "none";
    }
  }

  container.style.display = "flex"
}
function fecharModal() {
  var container = containerNovoPost;

  container.style.display = "none";
}

function mostrarComentarios(botao, id){

  const contribuicao = botao.closest('li');
  const containerComentario = contribuicao.querySelector('#containerComentario');
  console.log(contribuicao, containerComentario)
  
  if(vezesClicadas == 1){
    vezesClicadas = 0;
    containerComentario.style.display = "none";
    botaoMostrarComentario.innerHTML  = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708z"/>
    </svg>`
  }else{
    if(containerComentario){
      vezesClicadas++;
      containerComentario.style.display = "flex";
      botaoMostrarComentario.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z"/>
      </svg>`
    }
  }
}

function comentar(botao, id){
  // console.log(id.closest('div').querySelector("#containerSecaoComentario"));

  const container = containerComentar;

  console.log(id);
  container.style.display = "flex";
}

function fecharModalComentar(){
  const container = containerComentar;

  container.style.display = "none";
}
function fecharNovaContribuicao(){
  const container = containerNovoPost;

  container.style.display = "none";
}



function adicionarComentario(conteudo){
  botaoAdicionarComentario.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
        </svg>
        `
  console.log(conteudo);
  setTimeout(()=> {
    botaoAdicionarComentario.innerHTML = `Comentario realizado com sucesso ! `
    setTimeout(()=> {
      location.reload();
    }, 1000);
  }, 1500);
}

function irContaUsuario(){
  location.replace("../dashboard/dashboard.html");
}

async function novaContribuicao(){
  const titulo = inputTitulo.value;
  const conteudo = textAreaConteudoContribuicao.value;
  const tipoContribuicao = selectTipo.value;
  const filtro = categoriaFiltro.value;
  const conteudoFiltro = opcoes.value;
  var icone = "";
  divMensagem.style.border = "none";
  textAreaConteudoContribuicao.style.border = "none";
  inputTitulo.style.border = "none";
  categoriaFiltro.style.border = "none";
  opcoes.style.border = "none";

  if(conteudo.length == 0){
    divMensagem.innerHTML = "Conteudo inválido, deve conter no mínimo 1 caractere";
    divMensagem.style.border = "solid 1px red";
    textAreaConteudoContribuicao.style.border = "solid 1px red";
  }else if(titulo.length == 0){
    divMensagem.innerHTML = "Título inválido, deve conter no mínimo 1 caractere";
    inputTitulo.style.border = "solid 1px red";
    divMensagem.style.border = "solid 1px red";
  }else if(conteudo.length > 300){
    divMensagem.innerHTML = "Você passou do limite de caracteres permitidos para a contribuição (300).";
    textAreaConteudoContribuicao.style.border = "solid 1px red";
    divMensagem.style.border = "solid 1px red";
  }else if(titulo.length > 30){
    divMensagem.innerHTML = "Você passou do limite de caracteres permitidos para o titulo (30).";
    inputTitulo.style.border = "solid 1px red";
    divMensagem.style.border = "solid 1px red";
  }else if(filtro == "#"){
    divMensagem.innerHTML = "Por favor, selecione a tag da contribuição.";
    categoriaFiltro.style.border = "solid 1px red";
    divMensagem.style.border = "solid 1px red";
  }else if(conteudoFiltro == "#"){
    divMensagem.innerHTML = "Por favor, selecione o conteudo da tag da contribuição.";
    opcoes.style.border = "solid 1px red";
    divMensagem.style.border = "solid 1px red";
  }else{
    var mensagem = "";
    var estilo = "";
    botaoPostar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
          </svg>`;
    

    const resposta = await fetch("http://localhost:3333/contribuicao/cadastrar", {
      method: "POST",
      body: JSON.stringify({
        titulo: titulo,
        conteudo: conteudo,
        tipo: tipoContribuicao,
        fkMaculado: 1,
        tag: filtro,
        conteudoTag: conteudoFiltro
      }),
      headers: {
        "Content-Type": "application/json",
      }
    });
    if(resposta.ok){
      mensagem = "Contribuição criada com sucesso!"
      icone =  `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
      </svg>`;
      estilo = "solid 1px #044e049c";

    }else{
      resposta.json().then(m => {
        mensagem = m.mensagem;
        icone = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>`;
        estilo  = "solid 1px #600404";
      });

    }
    setTimeout(()=> {
      divMensagem.innerHTML = mensagem; // Nunca mais fazer isso...
      botaoPostar.innerHTML = icone;
      divMensagem.style.border = estilo;
      // erroSenha.style.border = estilo;

      if(mensagem == "Contribuição criada com sucesso!"){
        setTimeout(()=> {
            location.reload();
        }, 1000)
      }

    }, 2000);
  }
}

async function buscarContribuicoes(){
  const resposta = await fetch("http://localhost:3333/contribuicao/listar", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if(resposta.ok){
    resposta.json().then((contribuicoes)=> {
      contribuicoes.forEach((contribuicao)=> {
/* 
      idContribuicao: 2,
    conteudo: null,
    contribuicaoFechada: null,
    votos: null,
    tipo: null,
    tag: 'Bosses',
    conteudoTag: 'Raddan',
    nome: 'lucas' */
        listaContribuicoes.innerHTML += `
      <li class="liContribuicao" id=contribuicao${contribuicao.idContribuicao}>
        <div class="container-post">
          <div class="cabecalho-post">
            <h1 id="nome-post">${contribuicao.titulo}</h1>
            
            <div class="cabecalho-usuario">
              <h1 id="usuario-post">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg> ${contribuicao.nome}
            </h1>
            </div>
          </div>
          <div class="container-tag">
            <p>${contribuicao.tipo}</p>
            <p>${contribuicao.tag}</p>
            <p>${contribuicao.conteudoTag}</p>
          </div>
          <hr>
          <div class="desc-post">
            <p>${contribuicao.conteudo}</p>
          </div>
          <div class="interacoes-post">
            <div id="containerSecaoComentario">
              <button id="botaoMostrarComentario" onclick="mostrarComentarios(this, contribuicao${contribuicao.idContribuicao})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708z" />
                </svg>
              </button>
            </div>
            <div class="container-botao-like">
              <button onclick="comentar(this,contribuicao${contribuicao.idContribuicao})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                </svg>
              </button>
            </div>
            <div class="container-botao-comentario">
              <button onclick="comentar(this,contribuicao${contribuicao.idContribuicao})">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat"
                  viewBox="0 0 16 16">
                  <path
                    d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                </svg>
              </button>
            </div>
          </div>`;

      })
    })
  }


}