function enviarComentario(event) {
    event.preventDefault(); // Evitar el envío del formulario normalmente

    // Validar que todos los campos estén llenos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var visita = document.querySelector('input[name="visita"]:checked');
    var opcion = document.querySelector('input[name="opcion"]:checked');
    var valoracion = document.getElementById("valoracion").value;
    var comentarios = document.getElementById("comentarios").value;

    if (nombre && apellido && visita && opcion && valoracion && comentarios) {
      // Mostrar una alerta
      alert("Comentario Enviado");

      // Redirigir a la página principal
      window.location.href = "index.html";
    } else {
      alert("Por favor, complete todos los campos antes de enviar el formulario.");
    }
  }