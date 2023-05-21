
// Função para filtrar os registros da tabela
function filterTable() {
    var input = document.getElementById('search');
    var filter = input.value.toLowerCase();
    var rows = document.getElementById('table-body').getElementsByTagName('tr');
    var noResultsMessage = document.getElementById('no-results');
    var totalRecords = document.getElementById('total-records');

    var resultsFound = false;
    var count = 0;

    for (var i = 0; i < rows.length; i++) {
      var nome = rows[i].getElementsByTagName('td')[0].innerText.toLowerCase();
      var email = rows[i].getElementsByTagName('td')[1].innerText.toLowerCase();
      var phone = rows[i].getElementsByTagName('td')[2].innerText.toLowerCase();

      if (nome.indexOf(filter) > -1 || email.indexOf(filter) > -1 || phone.indexOf(filter) > -1) {
        rows[i].style.display = '';
        resultsFound = true;
        count++;
      } else {
        rows[i].style.display = 'none';
      }
    }

    if (resultsFound) {
      noResultsMessage.style.display = 'none';
    } else {
      noResultsMessage.style.display = 'block';
    }

    totalRecords.innerText = "Total de registros encontrados: " + count;
  }

  // Evento de input para acionar a filtragem ao digitar na caixa de pesquisa
  document.getElementById('search').addEventListener('input', filterTable);