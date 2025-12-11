document.addEventListener('DOMContentLoaded', function() {
    // Load nav
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });

    // Load redes
    fetch('redes.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('redes-placeholder').innerHTML = data;
        });
});
