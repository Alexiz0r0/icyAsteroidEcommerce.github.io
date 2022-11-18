$(document).ready(function() {
  $('#sub-sec-Btn').click(function(){
    const emailValue = $('#sub-sec-email').val().trim();
    console.log(emailValue);
    if (emailValue === '') {
      swal({
        title: "Por favor!",
        text: "Rellena este campo",
        icon: "warning",
      });
    } else if(!isEmail(emailValue)){
      swal({
        title: "Por favor!",
        text: "Ingresar un correo electrónico válido",
        icon: "error",
      });
    }else {
      swal({
        title: "Gracias!",
        text: "Por suscribirte a IcyAsteroid",
        icon: "success",
      });
    }
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);}
  });
});