class Picture {

    constructor(
        pictureID,
        pictureSRC,
        pictureName,
        pictureDate,
        pictureMaker,
        pictureDescription
    ) {
        this.pictureID = pictureID;
        this.pictureSRC = pictureSRC;
        this.pictureName = pictureName;
        this.pictureDate = pictureDate;
        this.pictureMaker = pictureMaker;
        this.pictureDescription = pictureDescription;
    }

    // set type(x){
    //     this.pictureName = x;
    // }
    // get type() {
    //     return this.pictureName;
    // }

    setElementsInHTML() {

        let tittle = this.pictureName;
        let description = this.pictureDescription;
        let maker = this.pictureMaker;
        let date = this.pictureDate;

        document.getElementById(this.pictureID).addEventListener("mouseover", mouseOver);

        document.getElementById(this.pictureID).addEventListener("mouseout", mouseOut);

        function mouseOver() {
            document.getElementById("titlePicture").innerHTML = "Título de la obra: " + tittle;
            document.getElementById("describePicture").innerHTML = "Descripción: " + description;
            document.getElementById("authorPicture").innerHTML = "Autor: " + maker;
            document.getElementById("datePicture").innerHTML = "Fecha de creación: " + date;
        }

        function mouseOut() {
            document.getElementById("titlePicture").innerHTML = "Título de la obra: ";
            document.getElementById("describePicture").innerHTML = "Descripción: ";
            document.getElementById("authorPicture").innerHTML = "Autor: ";
            document.getElementById("datePicture").innerHTML = "Fecha de creación: ";
        }

    }

    prueba() {
        console.log("Prueba de: " + this.pictureID
            + " de nombre: " + this.pictureName);
    }

};