$(document).ready(function(){

    // Chamada para ativar o dropdown do menu navbar
    $(".dropdown-trigger").dropdown({
      hover: false,
      coverTrigger: false,
      hover: true,
    });
  
    // Chamada para ativar o dropdown da navbar
    $('.collapsible').collapsible();

    // Chamada para ativar o sidenav lateral
    $('.sidenav').sidenav();

    // Chamada para o botao flutuante
    $('.fixed-action-btn').floatingActionButton({
      hoverEnabled: false
    });

    $('.datepicker').datepicker();

});


  /* Fullscreen */
function fullScreen() {        
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
      document.exitFullscreen();
  }
}

  /* Preloader */
  $(window).load(function () {
  $(".loader").delay(1500).fadeOut("slow"); //retire o delay quando for copiar!
  $("#tudo_page").toggle("fast");
});