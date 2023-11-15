       // Definimos ejercicios para cada nivel
       var ejercicios = {
        principiante: ["Sentadillas con peso corporal", "Flexiones de rodillas", "Curl de bíceps con mancuernas"],
        intermedio: ["Sentadillas con barra", "Press de banca", "Fondos en paralelas"],
        avanzado: ["Peso muerto", "Press militar", "Pull-ups con lastre"]
    };

    function mostrarEjercicios(nivel) {
        var ejerciciosContainer = document.getElementById("ejercicios-container");
        ejerciciosContainer.innerHTML = "<h4 class='section-title'>Ejercicios para " + nivel + ":</h4>";

        var listaEjercicios = ejercicios[nivel];

        if (listaEjercicios && listaEjercicios.length > 0) {
            var ul = document.createElement("ul");
            ul.classList.add("list-group");

            for (var i = 0; i < listaEjercicios.length; i++) {
                var li = document.createElement("li");
                li.classList.add("list-group-item");
                li.innerHTML = "<i class='fas fa-check'></i> " + listaEjercicios[i];
                ul.appendChild(li);
            }

            ejerciciosContainer.appendChild(ul);
        } else {
            ejerciciosContainer.innerHTML += "<p>No hay ejercicios disponibles para este nivel.</p>";
        }
    }

