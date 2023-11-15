var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Validaciones básicas
  if (username && email && password && confirmPassword === password) {
    // Simulación de registro en el servidor (puedes reemplazarlo con una llamada AJAX)
    fakeServerRegister(username, email, password);
  } else {
    alert("Error en el formulario. Asegúrate de que todos los campos estén completos y las contraseñas coincidan.");
  }
});

function fakeServerRegister(username, email, password) {
  // Simulación de llamada al servidor (puedes implementar una llamada AJAX aquí)
  console.log("Simulación de registro en el servidor:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  // Almacena el nombre de usuario en el almacenamiento local
  localStorage.setItem("username", username);

  // Redirige a la página principal después del registro exitoso
  window.location.href = "index.html";
}

function checkLoginState() {
  // Función para verificar el estado de inicio de sesión después del inicio de sesión de Facebook
  // (debes implementarla según la documentación de Facebook)
  console.log("Verificando estado de inicio de sesión de Facebook...");
}

