document.addEventListener("DOMContentLoaded", function () {
    const habilidades = document.querySelectorAll(".habilidade");

    habilidades.forEach(habilidade => {
        const valor = habilidade.getAttribute("data-valor");
        const progresso = habilidade.querySelector(".progresso");
        progresso.style.width = valor + "%";
    });
});