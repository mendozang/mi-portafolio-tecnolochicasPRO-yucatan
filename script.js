let elementoHTMLtitulo = document.getElementById('titulo');

let typewriter = new Typewriter(elementoHTMLtitulo, {
    loop: true
});

typewriter.typeString('Angelica Mendoza')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Estudiante de Desarrollo de Software')
    .pauseFor(2500)
    .deleteAll()
    .start();