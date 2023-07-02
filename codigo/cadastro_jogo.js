(function() {
    const form = document.querySelector('#jogoForm');
  
    form.addEventListener('submit', evt => {
      evt.preventDefault();
  
      const timeA = document.querySelector('#timeA');
      const placarA = document.querySelector('#placarA');
      const timeB = document.querySelector('#timeB');
      const placarB = document.querySelector('#placarB');
  
      fetch('dados.json')
        .then(response => response.json())
        .then(data => {
          data.oitavas[0].timeA = timeA.value;
          data.oitavas[0].placarA = parseInt(placarA.value);
          data.oitavas[0].timeB = timeB.value;
          data.oitavas[0].placarB = parseInt(placarB.value);
  
          // Salvar o JSON atualizado em um arquivo
          const jsonData = JSON.stringify(data);
          const blob = new Blob([jsonData], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'dados.json';
          a.click();
          URL.revokeObjectURL(url);
        });
  
      evt.target.reset();
    });
  })();
  