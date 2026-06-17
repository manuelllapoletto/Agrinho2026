/* ==========================================================================
   INTERATIVIDADE - AGRINHO 2026
   Tema: Agro forte, futuro sustentável
   ========================================================================== */

// Aguarda todo o HTML da página ser carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Script do Agrinho 2026 carregado com sucesso!");

    // 1. ANIMAÇÃO DE REVELAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
    const secoes = document.querySelectorAll("section");

    function verificarScroll() {
        const gatilhoUsuario = (window.innerHeight / 5) * 4; // Define o ponto de ativação

        secoes.forEach(secao => {
            const topoSecao = secao.getBoundingClientRect().top;

            // Se a seção aparecer na tela, adiciona uma classe de efeito (ou muda a opacidade)
            if (topoSecao < gatilhoUsuario) {
                secao.style.opacity = "1";
                secao.style.transform = "translateY(0)";
                secao.style.transition = "all 0.6s ease-out";
            }
        });
    }

    // Configuração inicial para a animação de revelação
    secoes.forEach(secao => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(20px)";
    });

    // Dispara a função quando o usuário rola a página
    window.addEventListener("scroll", verificarScroll);
    verificarScroll(); // Executa uma vez no início caso haja elementos visíveis


    // 2. INTERATIVIDADE NOS CARDS DE PRÁTICAS SUSTENTÁVEIS
    const cards = document.querySelectorAll("article");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Remove o destaque de todos os outros cards primeiro
            cards.forEach(c => c.style.backgroundColor = "#fafafa");
            
            // Aplica um destaque verde claro e sutil no card clicado
            this.style.backgroundColor = "#e8f5e9";
            this.style.transition = "background-color 0.3s ease";
        });
    });

});
