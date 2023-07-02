const form = document.querySelector("#campeonato-form");

form.addEventListener("submit", (event) => {
  // Impedir o envio padrão do formulário
  event.preventDefault();

  // Obter valores do formulário
  const nome = document.querySelector("#nome").value;
  const plataforma = document.querySelector("#plataforma").value;
  const numTimes = document.querySelector("#num-times").value;
  const senha = document.querySelector("#senha").value;
  const descricao = document.querySelector("#descricao").value;

  // Verificar se há dados suficientes
  if (!nome || !plataforma || !numTimes) {
    alert("Por favor, preencha todos os campos obrigatórios");
    return;
  }

  // Salvar dados do formulário no localStorage
  const campeonato = {
    nome,
    plataforma,
    numTimes,
    senha,
    descricao,
  };
  localStorage.setItem("campeonato", JSON.stringify(campeonato));

  // Redirecionar o usuário para a página de visualização do campeonato IMPORTANTE NA INTEGRAÇÃO PARA DIRECIONAR A PAGINA DE VISUALIZAÇÃO
  window.location.href = "visualizaçãodocampeonato.html";
});
const campeonatoJSON = localStorage.getItem("campeonato");
const campeonato = JSON.parse(campeonatoJSON);

// Verificar se há dados do campeonato no localStorage
if (!campeonato) {
  // Redirecionar o usuário para a página de criação do campeonato  IMPORTANTE NA INTEGRAÇÃO PARA DIRECIONAR A PAGINA DE CRIAÇÂO 
  window.location.href = "index.html";
}

// Exibir dados do campeonato na página
document.querySelector("#nome-campeonato").textContent = campeonato.nome;
document.querySelector("#plataforma-campeonato").textContent = campeonato.plataforma;
document.querySelector("#num-times-campeonato").textContent = campeonato.numTimes;
document.querySelector("#descricao-campeonato").textContent = campeonato.descricao;
