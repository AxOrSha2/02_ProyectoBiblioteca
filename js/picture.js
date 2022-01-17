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


    //Function than find the picture and add the action; mouseover and mouseout 
    mouseOverAndOut() {

        let tittle = this.pictureName;
        let description = this.pictureDescription;
        let maker = this.pictureMaker;
        let date = this.pictureDate;
        let id = this.pictureID;

        document.getElementById(this.pictureID).addEventListener("mouseover", mouseOver);
        document.getElementById(this.pictureID).addEventListener("mouseout", mouseOut);

        function mouseOver() {
            setInfoIntoHMTL(id, tittle, description, maker, date);
        }

        function mouseOut() {
            cleanInfoHTML(id);
        }
    }


    //This function made than the info appear if listen a click or disappear when do double click
    appearUsingClick() {

        let tittle = this.pictureName;
        let description = this.pictureDescription;
        let maker = this.pictureMaker;
        let date = this.pictureDate;
        let id = this.pictureID;

        document.getElementById(this.pictureID).addEventListener("click", Click);
        document.getElementById(this.pictureID).addEventListener("dblclick", doubleClick);

        function Click() {
            setInfoIntoHMTL(id, tittle, description, maker, date);
        }

        function doubleClick() {
            cleanInfoHTML(id);
        }
    }


    //This function made than the info appear if the picture are draged or disappear when do double click
    dragAnItem() {

        let tittle = this.pictureName;
        let description = this.pictureDescription;
        let maker = this.pictureMaker;
        let date = this.pictureDate;
        let id = this.pictureID;

        document.getElementById(this.pictureID).addEventListener("drag", Drag);
        document.getElementById(this.pictureID).addEventListener("dblclick", doubleClick);

        function Drag() {
            setInfoIntoHMTL(id, tittle, description, maker, date);
        }

        function doubleClick() {
            cleanInfoHTML(id);
        }
    }


    //This function made than the info appear if the picture are copied or disappear when do double click
    onCopy() {

        let tittle = this.pictureName;
        let description = this.pictureDescription;
        let maker = this.pictureMaker;
        let date = this.pictureDate;
        let id = this.pictureID;

        document.getElementById("instructions-four").addEventListener("copy", Copy);
        document.getElementById(this.pictureID).addEventListener("drag", Drag);

        function Copy() {
            setInfoIntoHMTL(id, tittle, description, maker, date);
        }

        function Drag() {
            cleanInfoHTML(id, tittle, description, maker, date);
        }
    }

    //TODO
    setPictureSkeletonIntoHTML() {

        //Get the template and made a copy 
        let template = document.querySelector('#card-template').cloneNode(true);
        //Change attributes of the copy
        template.setAttribute('#card-template', 'card');


        //Add the template into card-container
        let sectionContainer = document.getElementById("card-container");
        sectionContainer.appendChild(template);

    }

    prueba() {
        console.log("\n Prueba de:  " + this.pictureID
            + "\n src:      " + this.pictureSRC
            + "\n Nombre:   " + this.pictureName
            + "\n Fecha:    " + this.pictureDate
            + "\n Creador:  " + this.pictureMaker
            + "\n Descrip:  " + this.pictureDescription
        );
    }
};

//Set infomation into HTML
function setInfoIntoHMTL(id, tittle, description, maker, date) {
    document.getElementById("titlePicture" + id).innerHTML = "Título de la obra: " + tittle;
    document.getElementById("describePicture" + id).innerHTML = "Descripción: " + description;
    document.getElementById("authorPicture" + id).innerHTML = "Autor: " + maker;
    document.getElementById("datePicture" + id).innerHTML = "Fecha de creación: " + date;
}


// Clean the camps 
function cleanInfoHTML(id) {
    document.getElementById("titlePicture" + id).innerHTML = "Título de la obra: ";
    document.getElementById("describePicture" + id).innerHTML = "Descripción: ";
    document.getElementById("authorPicture" + id).innerHTML = "Autor: ";
    document.getElementById("datePicture" + id).innerHTML = "Fecha de creación: ";
}