/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    // Menu de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        const expanded = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true' || false;
        botaoDeAcessibilidade.setAttribute('aria-expanded', !expanded);
        opcoesDeAcessibilidade.setAttribute('aria-hidden', expanded);
    });

    // Ajuste do tamanho da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        if (tamanhoAtualFonte > 0.7) {
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Rolagem suave
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feedback no formulário de contato
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulação de envio bem-sucedido
            setTimeout(() => {
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
                contactForm.reset();
                // Oculta a mensagem de sucesso após alguns segundos
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }, 1000);
            // Se houver um erro, você exibiria errorMessage em vez de successMessage
            // errorMessage.style.display = 'block';
        });
    }
});