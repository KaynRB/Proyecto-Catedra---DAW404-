function mostrarRecomendaciones() {
    var objetivo = document.getElementById("objetivo").value;
    var nivelEjercicio = document.getElementById("nivel-ejercicio").value;

    // Lógica de recomendaciones (puedes personalizar esto según tus necesidades)
    var recomendaciones = obtenerRecomendaciones(objetivo, nivelEjercicio);

    // Mostrar las recomendaciones en el contenedor
    var recomendacionesContainer = document.getElementById("recomendaciones-container");
    recomendacionesContainer.innerHTML = "<h2>Recomendaciones de Ejercicio:</h2>";

    if (recomendaciones.length > 0) {
        for (var i = 0; i < recomendaciones.length; i++) {
            recomendacionesContainer.innerHTML += "<p>" + recomendaciones[i] + "</p>";
        }
    } else {
        recomendacionesContainer.innerHTML += "<p>No hay recomendaciones disponibles para tu selección.</p>";
    }
}

function obtenerRecomendaciones(objetivo, nivelEjercicio) {
    // Aquí puedes definir tus propias recomendaciones según el objetivo y nivel de ejercicio
    // Este es solo un ejemplo, debes personalizarlo según tus necesidades
    var recomendaciones = [];

    if (objetivo === "perder-peso" && nivelEjercicio === "principiante") {
        recomendaciones.push("Caminatas diarias y ejercicios cardiovasculares ligeros.");
    } else if (objetivo === "ganar-masa-muscular" && nivelEjercicio === "avanzado") {
        recomendaciones.push("Entrenamiento de fuerza intenso y dieta rica en proteínas.");
    } else {
        recomendaciones.push("Consulta con un profesional para obtener recomendaciones personalizadas.");
    }

    return recomendaciones;
}
