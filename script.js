// Seleciona todos os botões
const botoes = document.querySelectorAll(".botao");

// Recupera dados salvos
let cliques = JSON.parse(localStorage.getItem("cliquesLinks")) || {};

// Percorre todos os botões
botoes.forEach((botao, index) => {

    let id = "link_" + index;

    // Se ainda não existir registro
    if (!cliques[id]) {
        cliques[id] = 0;
    }

    // Evento de clique
    botao.addEventListener("click", () => {

        // Soma o clique
        cliques[id]++;

        // Salva no navegador
        localStorage.setItem("cliquesLinks", JSON.stringify(cliques));

        // Animação de clique
        botao.style.transform = "scale(0.95)";

        setTimeout(() => {
            botao.style.transform = "scale(1)";
        }, 150);

        // Mostra no console
        console.log("Cliques nesse botão:", cliques[id]);

    });

});