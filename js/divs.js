document.addEventListener('DOMContentLoaded', function() {
    // Cargar div nav
    fetch('componentes/nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });

    // Cargar div redes
    fetch('componentes/redes.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('redes-placeholder').innerHTML = data;
        });
});
