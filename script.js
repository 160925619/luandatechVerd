function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("aberto");
}


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;

    const resultado = document.getElementById("resultado");

    resultado.textContent =
        "Obrigado, " + nome + "! Recebemos a sua mensagem.";

    formulario.reset();
});
