document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        const expanded = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true' || false;
        botaoDeAcessibilidade.setAttribute('aria-expanded', !expanded);
        opcoesDeAcessibilidade.setAttribute('aria-hidden', expanded);
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        if (tamanhoAtualFonte > 0.7) { // Limite mínimo para não ficar ilegível
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Rolagem suave ao clicar nos links da navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Feedback no formulário (simulação de envio)
    const formularioContato = document.querySelector('#contato form');
    const mensagemEnviada = document.getElementById('mensagem-enviada');
    const mensagemErro = document.getElementById('mensagem-erro');

    if (formularioContato) {
        formularioContato.addEventListener('submit', function (e) {
            e.preventDefault();
            // Simulação de envio bem-sucedido após 1 segundo
            setTimeout(() => {
                mensagemEnviada.style.display = 'block';
                mensagemErro.style.display = 'none';
                formularioContato.reset(); // Limpar o formulário
                // Ocultar a mensagem de sucesso após alguns segundos
                setTimeout(() => {
                    mensagemEnviada.style.display = 'none';
                }, 3000);
            }, 1000);
        });
    }
});