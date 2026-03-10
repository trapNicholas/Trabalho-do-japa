// Seleciona o botão pelo ID que criamos no HTML
const botao = document.getElementById('btnInterativo');

// Adiciona um "escutador de eventos" (clique)
botao.addEventListener('click', function() {
    
    // 1. Mostra uma mensagem na tela
    alert("O futuro sustentável começa com nossas escolhas hoje!");

    // 2. Efeito visual: Muda a cor do fundo para um cinza escuro
    document.body.style.backgroundColor = "#1a1a1a";

    // 3. Volta para o preto depois de 2 segundos
    setTimeout(function() {
        document.body.style.backgroundColor = "#000000";
    }, 2000);
});
