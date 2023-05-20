$(document).ready(function(){

    // Chamada para ativar o dropdown do menu navbar
    $(".dropdown-trigger").dropdown({ 
      coverTrigger: false,
    });
  
    // Chamada para ativar o dropdown da navbar
    $('.collapsible').collapsible();

    // Chamada para ativar o sidenav lateral
    $('.sidenav').sidenav();

    // Chamada para o botao flutuante
    $('.fixed-action-btn').floatingActionButton({
      hoverEnabled: false
    });

    // Chamada para os selects
    $('select').formSelect();

    

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
var myVar;
      
function myFunction() {
    myVar = setTimeout(showPage, 2000); // aumentei o tempo para ilustração
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
