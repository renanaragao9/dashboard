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

});


  /* Fullscreen */
function fullScreen() {        
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
      document.exitFullscreen();
  }
}