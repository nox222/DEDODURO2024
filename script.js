// Rola suavemente até a âncora quando um link é clicado
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Exibe uma mensagem ao clicar no botão de download
document.getElementById('downloadBtn').addEventListener('click', function () {
    alert('Você está sendo redirecionado para uma nova página');
    window.location.href = 'https://bibliotecaelfica.org/category/dd-5e/';
});
