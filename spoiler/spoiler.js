/**
 Quand je vais cliquer sur le bouton dans .spoiler
 ALORS
 j'ajoute la classe .visible à l'element suivant
 **/



/** Actif pour Monsieur X

let button = document.querySelector('.spoiler button');
button.addEventListener('click', function(){
    this.nextElementSibling.classList.add('visible');
    this.parentNode.removeChild(this);
});


 **/



let elements = document.querySelectorAll('.spoiler');

let createSpoilerButton = function (element){

    // On crée la span.spoiler-content
    let span = document.createElement('span')
    span.className = "spoiler-content"
    span.innerHTML = element.innerHTML


    // On crée le bouton

    let button = document.createElement('button');
    button.textContent = 'Afficher le Spoiler'

   // On ajoute les éléments au DOM
    element.innerHTML = ""
    element.appendChild(button);
    element.appendChild(span);


    // On met l'écouteur d'évenement au click
    button.addEventListener('click', function (){
        button.parentNode.removeChild(button)
        span.classList.add('visible')

    })
}

for(let i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i])
}


