// Dados de exemplo para campeonatos acontecendo
var liveChampionshipsData = [
    {
      nome: "Liga das Lendas",
      plataforma: "Console",
      numTimes: 16,
    },
    {
      nome: "Desafio dos Campeões",
      plataforma: "PC",
      numTimes: 16,
    }
  ];
  
  // Dados de exemplo para campeonatos encerrados
  var finishedChampionshipsData = [
    {
      nome: "Copa das Estrelas",
      plataforma: "PC",
      numTimes: 16,
      vencedor:"Borussia"
    },
    {
    nome: "Liga Mítica",
    plataforma: "Console",
    numTimes: 16,
    vencedor: "Real Madrid"
    }
    ];
    
    // Função para criar elementos HTML com base nos dados do campeonato
    function createChampionshipElement(campeonato) {
    var championshipElement = document.createElement("div");
    championshipElement.classList.add("championship");
    
    var detailsElement = document.createElement("div");
    detailsElement.classList.add("championship-details");
    
    var nomeElement = document.createElement("p");
    nomeElement.textContent = "Nome: " + campeonato.nome;
    detailsElement.appendChild(nomeElement);
    
    var plataformaElement = document.createElement("p");
    plataformaElement.textContent = "Plataforma: " + campeonato.plataforma;
    detailsElement.appendChild(plataformaElement);
    
    var numTimesElement = document.createElement("p");
    numTimesElement.textContent = "Número de Times: " + campeonato.numTimes;
    detailsElement.appendChild(numTimesElement);
    
    if (campeonato.vencedor) {
    var vencedorElement = document.createElement("p");
    vencedorElement.textContent = "Vencedor: " + campeonato.vencedor;
    detailsElement.appendChild(vencedorElement);
    }
    
    championshipElement.appendChild(detailsElement);
    return championshipElement;
    }
    
    // Atualizar lista de campeonatos acontecendo
    var liveChampionshipsList = document.getElementById("live-championships-list");
    for (var i = 0; i < liveChampionshipsData.length; i++) {
    var championshipElement = createChampionshipElement(liveChampionshipsData[i]);
    liveChampionshipsList.appendChild(championshipElement);
    }
    
    // Atualizar lista de campeonatos encerrados
    var finishedChampionshipsList = document.getElementById("finished-championships-list");
    for (var i = 0; i < finishedChampionshipsData.length; i++) {
    var championshipElement = createChampionshipElement(finishedChampionshipsData[i]);
    finishedChampionshipsList.appendChild(championshipElement);
    }
  