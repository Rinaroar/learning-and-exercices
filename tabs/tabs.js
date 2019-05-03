/* LORSQUE l'on clique sur un onglet
    On retire la class .active de l'onglet actif
    J'ajoute la class active à l'onglet actuel


    On retire la classa active sur le contenu actif
    j'ajoute la class active sur le contenu correspondant à mon click

    */


let tabs=document.querySelectorAll('.tabs a')
for (let i=0; i<tabs.length; i++){
    tabs[i].addEventListener('click', function(e){

        let li = this.parentNode; // on déclare les variables et les met en haut
        let div = this.parentNode.parentNode.parentNode ;// Remonte dans le HTML jusqu'à la div qui englobe tout = parent li, parent ul, parent div //  debugger -->  sort un point d'arret et bloque l'execution du script au niveau du navigateur / quand clique sur Mentions, le systeme s'arrête

        if (li.classList.contains('active')){  // Est ce que l'élement parent (li) a dans sa class .active ?
            return false;  // en cliquant sur Accueil, il ne se passe donc rien, il a conservé son style.
        }

        // On retire la class active de l'onglet actif
        div.querySelector('.tabs .active').classList.remove('active'); // clique sur Mentions, Accueil a perdu son style

        // Ajoute la class active à l'onglet actuel
        li.classList.add('active');

        // On retire la classe active sur le contenu actif
        div.querySelector('.tab-content.active').classList.remove('active');

        // Ajoute la classe active sur le contenu correspondant au click
        div.querySelector(this.getAttribute('href')).classList.add('active'); // on recupere l'ancre du html --> this.href avec l' ID du queryselector // dans la div on selectionne l'element qui à l'ID qui correspond à href et on ajoute la class active


    })
}

//arret de la video à 16:34.