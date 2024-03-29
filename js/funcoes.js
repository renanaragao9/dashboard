$(document).ready(function(){

    // Chamadas para ativar os dropdowns

    $(".dropdown-trigger").dropdown({ 
      coverTrigger: false,
    });
    
    $(".dropdown-table").dropdown({ 
      coverTrigger: false,
    });

    // Chamada para o Modal
    $('.modal').modal();

    // Chamada para ativar o dropdown da navbar
    $('.collapsible').collapsible();

    // Chamada para ativar o sidenav lateral
    $('.sidenav').sidenav();

    // Chamada para o botao flutuante
    $('.fixed-action-btn').floatingActionButton({
      hoverEnabled: false
    });

    // Chamada para ampliação da imagem
    $('.materialboxed').materialbox();

    // Chamada para o scroll lateral
    $('.scrollspy').scrollSpy();

    // Chamada para os selects
    $('select').formSelect();

    // Chamada para a descrição dos icones na tabela
    $('.tooltipped').tooltip();

    $('input#input_text, textarea#observation').characterCounter();

    CKEDITOR.replace('body');

    // Chamada para o input Data
    $('.datepicker').pickadate({
      monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo'],
      weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      today: 'Hoje',
      clear: 'Limpar',
      close: 'Pronto',
      labelMonthNext: 'Próximo mês',
      labelMonthPrev: 'Mês anterior',
      labelMonthSelect: 'Selecione um mês',
      labelYearSelect: 'Selecione um ano',
      selectMonths: true, 
      selectYears: 15 
      });

});


/* Chamada para tela ficar Fullscreen */
  function fullScreen() {        
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
  }


/* Chamada pro Preloader   */ 
let myVar;
      
function myFunction() {
    myVar = setTimeout(showPage); // aumentei o tempo para ilustração
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
