window.onload = function () {
    var storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      var userInfoDiv = document.getElementById("user-info");
      var usernameSpan = document.getElementById("username-span");
  
      userInfoDiv.classList.add("user-info-visible");
      usernameSpan.innerText = storedUsername;
  
      // Asignar un icono al azar
      assignRandomIcon();
    }
  };
  
  function assignRandomIcon() {
    var icons = ["icon1.svg", "icon2.svg", "icon3.svg"]; // Agrega aquí los nombres de tus iconos SVG
    var randomIcon = icons[Math.floor(Math.random() * icons.length)];
  
    // Cambia el atributo 'href' del elemento 'use' para cargar el icono SVG
    document.getElementById("user-icon").querySelector("use").setAttribute("href", randomIcon);
  }
