
let pictureOne = new Picture (
    'pictureOne', 
    'https://lastfm.freetls.fastly.net/i/u/500x500/1729220b7068422b81a43842fb9327a1.jpg',
    'Deadmau5 album photo',
    '19/04/2000',
    'Deadmau5',
    'Picture makes to represent a new album from Deadmau5'
);

let pictureTwo = new Picture (
    'pictureTwo', 
    'https://lastfm.freetls.fastly.net/i/u/500x500/1729220b7068422b81a43842fb9327a1.jpg',
    'Skrillex image',
    '30/10/2021',
    'Skrilex',
    'Picture of practice from Skrillex'
);

pictureOne.setElementsInHTML();
pictureTwo.setElementsInHTML();

pictureOne.prueba();