
document.addEventListener("DOMContentLoaded", () => {

    // Identifica a página atual
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".menu a").forEach(link => {
        const destino = link.getAttribute("href");

        if (destino === paginaAtual) {
            link.classList.add("active");
        }
    });

    // Animação de entrada dos cartões
    const elementos = document.querySelectorAll(".card, .tip, .schedule-item");

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
                observador.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementos.forEach(elemento => {
        elemento.classList.add("animar");
        observador.observe(elemento);
    });

});
