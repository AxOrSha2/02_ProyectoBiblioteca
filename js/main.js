
let pictureOne = new Picture (
    'pictureOne', 
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/a/andy_warhol-5.jpg',
    'Díptico de Marilyn',
    '19/04/2000',
    'Andy Warhol',
    'Tras la muerte de Marilyn Monroe en 1962, Warhol empezó a trabajar en una serigrafía de su rostro, usando una fotografía promocional del filme Niágara (1953). El resultado fueron 50 retratos suyos, la mitad de la izquierda a todo color y los demás en un blanco y negro que se desvanece en lo que representa el culto a la celebridad y la muerte.'
);

let pictureTwo = new Picture (
    'pictureTwo', 
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/r/roy_lichtenstein_whaam.jpg',
    'Whaam!',
    '30/10/2021',
    'Roy Lichtenstein',
    'Esta imagen parodia a la vez que documenta la imagen del héroe americano moderno publicada en los cómics de los 70. El uso de viñetas de historietas se convirtió en un sello particular de Lichtenstein y esta es su obra más famosa.'
);

let pictureThree = new Picture (
    'pictureThree', 
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/h/hockney-a_bigger_splash.jpg',
    'El gran chapuzón',
    'El año 1967',
    'David hockney',
    'Sorprendido e inspirado en el estilo de vida californiano, Hockney pintó esta obra en 1967. La imagen es de una casa moderna donde se observa un gran chapuzón de agua creado por una figura no vista que aparentemente saltó desde el trampolín.'
);

let pictureFour = new Picture (
    'pictureFour', 
    'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/q/que-es-lo-que-hace-a-los-hogares.jpg',
    '¿Qué es lo que hace a los hogares de hoy tan diferentes, tan atractivos?',
    'El año 1967',
    'Richard Hamilton',
    'La obra consiste en un collage de imágenes tomadas de revistas americanas para definir la creciente sociedad de consumo a mediados de los 50. El cuadro se convirtió en el ícono del Pop Art y representaba la conciencia posguerra.'
);

pictureOne.setElementsInHTML();
pictureTwo.setElementsInHTML();
pictureThree.setElementsInHTML();
pictureFour.setElementsInHTML();