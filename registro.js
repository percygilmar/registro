$(document).ready(function() {
    $('#inputFechaNacimiento').datepicker({
      format: 'dd/mm/yyyy',
      autoclose: true
    });
  });
  
  function generarCorreo() {
    var nombre = document.getElementById("inputNombre").value;
    var apellido = document.getElementById("inputApellido").value;
    var fechaNacimiento = document.getElementById("inputFechaNacimiento").value;
  
    var correo = nombre.toLowerCase() + "." + apellido.toLowerCase() + fechaNacimiento.replaceAll('/', '') + "@gmail.com";
  
    document.getElementById("correoGenerado").innerText = "Tu correo electrónico generado es: " + correo;
    document.getElementById("correoGenerado").style.display = "block";
  }
  