
// creer la nouvelle class du carousel

class Carousel {

    /** jsdoc, format unifié pour les commentaires
     * @param (HTMLElement) element
     * @param (Objet) options
     * @param (Objet) options.slidesToScroll nombre d'élement à faire défiler
     * @param (Objet) options.slidesVisible nombre d'élement visible dans un slide
     */

    constructor (element, options = {}) {                                    // cette class va avoir un constructeur avec les deux parametre de slides : l'élement racine et l'objet d'option --> par défaut, si précise de parametre pour les options  = objet vide
        this.element = element
        this.options = object.assign({}, {
           slidesToScroll : 1,
           slidesVisible : 1
        }, options)
        debugger
    }

}


document.addEventListener('DOMContentLoaded', function(){   // comme le script est asynchrone, la page ne sera pas forcement chargée donc on l'entoure pour ne pas avoir a attendre le chargement de la page complète, mais juste chargement du DOM //

    new Carousel(document.querySelector("carousel1"),{          // element qu'on souhaite transformer en carrousel, en second parametre on a un objet d'option
        slidesToScroll: 3,                                               //permet d'indiquer le nombre d'éléments à scroller
        slidesVisible: 3                                                 // nombres d'elements visible

    })



})



