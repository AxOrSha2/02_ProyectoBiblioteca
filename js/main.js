
let pictureOne = new Picture(
    'One',
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/a/andy_warhol-5.jpg',
    'Díptico de Marilyn',
    'En el año 1962',
    'Andy Warhol',
    'Tras la muerte de Marilyn Monroe en 1962, Warhol empezó a trabajar en una serigrafía de su rostro, usando una fotografía promocional del filme Niágara (1953). El resultado fueron 50 retratos suyos, la mitad de la izquierda a todo color y los demás en un blanco y negro que se desvanece en lo que representa el culto a la celebridad y la muerte.'
);


let pictureTwo = new Picture(
    'Two',
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/r/roy_lichtenstein_whaam.jpg',
    'Whaam!',
    'En el año 1963',
    'Roy Lichtenstein',
    'Esta imagen parodia a la vez que documenta la imagen del héroe americano moderno publicada en los cómics de los 70. El uso de viñetas de historietas se convirtió en un sello particular de Lichtenstein y esta es su obra más famosa.'
);


let pictureThree = new Picture(
    'Three',
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/h/hockney-a_bigger_splash.jpg',
    'El gran chapuzón',
    'El año 1967',
    'David hockney',
    'Sorprendido e inspirado en el estilo de vida californiano, Hockney pintó esta obra en 1967. La imagen es de una casa moderna donde se observa un gran chapuzón de agua creado por una figura no vista que aparentemente saltó desde el trampolín.'
);


let pictureFour = new Picture(
    'Four',
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/q/que-es-lo-que-hace-a-los-hogares.jpg',
    '¿Qué es lo que hace a los hogares de hoy tan diferentes, tan atractivos?',
    'El año 1967',
    'Richard Hamilton',
    'La obra consiste en un collage de imágenes tomadas de revistas americanas para definir la creciente sociedad de consumo a mediados de los 50. El cuadro se convirtió en el ícono del Pop Art y representaba la conciencia posguerra.'
);


let pictureFive = new Picture(
    'Five',
    'https://cdn.culturagenial.com/es/imagenes/sopa-campbell-s-cke.jpg',
    'Latas de sopa Campbell\'s. Serigrafía y polímero sintético sobre tela',
    'En el año 1962',
    'Andy Warhol',
    '¿Quién dijo que una lata de sopa puede ser un tema artístico? Esa fue una de las primeras polémicas que despertó Andy Warhol con esta obra provocadora. Desde la reproducción individual de la sopa hasta la conformación de la serie, Warhol se sitúa irónicamente frente a la realidad de la sociedad de consumo y frente a la comunidad artística que no quiere enfrentarla.',
);


// Here call the function to interact with the pictures
pictureOne.mouseOverAndOut();
pictureTwo.appearUsingClick();
pictureThree.dragAnItem();
pictureFour.onCopy();
pictureFive.mouseOverAndOut();
