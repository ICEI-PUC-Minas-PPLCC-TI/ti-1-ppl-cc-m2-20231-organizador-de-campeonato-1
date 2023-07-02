// Variáveis para armazenar os valores dos campos de entrada
var timeAInput = document.getElementById('timeA');
var placarAInput = document.getElementById('placarA');
var timeBInput = document.getElementById('timeB');
var placarBInput = document.getElementById('placarB');

// Função para adicionar um novo jogo ao chaveamento
function adicionarJogo() {
  // Obter os valores dos campos de entrada
  var timeA = timeAInput.value;
  var placarA = placarAInput.value;
  var timeB = timeBInput.value;
  var placarB = placarBInput.value;

  // Verificar se os campos estão preenchidos
  if (timeA && placarA && timeB && placarB) {
    // Criar uma nova linha na tabela
    var tabela = document.getElementById('chaveamento');
    var novaLinha = tabela.insertRow();

    // Inserir as células com os valores do jogo
    var celulaTimeA = novaLinha.insertCell();
    celulaTimeA.textContent = timeA;

    var celulaPlacarA = novaLinha.insertCell();
    celulaPlacarA.textContent = placarA;

    var celulaX = novaLinha.insertCell();
    celulaX.textContent = 'x';

    var celulaPlacarB = novaLinha.insertCell();
    celulaPlacarB.textContent = placarB;

    var celulaTimeB = novaLinha.insertCell();
    celulaTimeB.textContent = timeB;

    // Limpar os campos de entrada
    timeAInput.value = '';
    placarAInput.value = '';
    timeBInput.value = '';
    placarBInput.value = '';
  }
}

// Obter o formulário e adicionar um manipulador de evento para o envio do formulário
var form = document.getElementById('jogo-form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impedir o envio do formulário
  adicionarJogo(); // Adicionar o jogo ao chaveamento
});

let comments = [];

function showComments() {
  const commentsDiv = document.querySelector('#comments');
  commentsDiv.innerHTML = '';

  comments.forEach((comment, index) => {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const namePara = document.createElement('p');
    namePara.classList.add('name');
    namePara.innerHTML = `<strong>${comment.name}</strong>`;

    const commentPara = document.createElement('p');
    commentPara.classList.add('comment-text');
    commentPara.textContent = comment.comment;

    const editButton = document.createElement('button');
    editButton.classList.add('edit-button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editComment(index);
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', () => {
      deleteComment(index);
    });

    commentDiv.appendChild(namePara);
    commentDiv.appendChild(commentPara);
    commentDiv.appendChild(editButton);
    commentDiv.appendChild(deleteButton);
    commentsDiv.appendChild(commentDiv);
  });
}

// Função para adicionar um novo comentário
function addComment(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const comment = document.querySelector('#comment').value;

  comments.push({ name: name, comment: comment });

  // Salvar os comentários em localStorage
  localStorage.setItem('comments', JSON.stringify(comments));

  document.querySelector('#name').value = '';
  document.querySelector('#comment').value = '';

  // Exibir os comentários atualizados na página
  showComments();
}

// Função para editar um comentário
function editComment(index) {
  const newComment = prompt('Digite o novo comentário:');
  if (newComment !== null) {
    comments[index].comment = newComment;
    showComments();
  }
}

// Função para excluir um comentário
function deleteComment(index) {
  if (confirm('Deseja realmente excluir este comentário?')) {
    comments.splice(index, 1);
    showComments();
  }
}

// Recuperar os comentários salvos em localStorage
const storedComments = localStorage.getItem('comments');
if (storedComments) {
  comments = JSON.parse(storedComments);
}

// Adicionar o evento de envio do formulário
const commentForm = document.querySelector('#comment-form');
commentForm.addEventListener('submit', addComment);

// Exibir os comentários na página ao carregar
showComments();