



/**  Faire apparaitre une pop-up sur la page pour aller vers un site externe, qu'on puisse cliquer ANNULER pour ne pas y
    aller et donc que ça ne se propage pas :


 let liens = document.querySelectorAll('a.external')
 for (let i = 0; i < liens.length ; i++){
    let lien = liens[i]
    lien.addEventListener('click', function(event){
        event.stopPropagation()
        console.log("J'ai cliquer sur le lien", event)
        let reponse  = window.confirm('Voulez-vous vraiment quittez le site ?')
        if (reponse === false) {
            event.preventDefault()
        }
    })
}

document.querySelector('p').addEventListener('click', function(event){
    console.log("J'ai cliqué sur le paragraphe", event)
})

 **/




/** Pour enlever/stopper un eventListener

let p = document.querySelector('p')
let onClick = function(event){
    this.classList.add('red')
    console.log('rouge')
    event.preventDefault()
    p.removeEventListener('click', onClick )

}

 p.addEventListener('click', onClick)

 **/



/** Prend l'id = "a" d'où le #

    formCharCode(e.keyCode) permet d'afficher la lettre qu'on a taper dans le form, sinon affiche un code (65) --> voir
    sur la doc MDN

--> document.querySelector('#a').addEventListener('keyup', function (e){
    console.log(String.fromCharCode(e.keyCode))
})

 **/



/** keyup n'est pas annulable alors que le keydown si :
        si on tape une autre letter que A,
        alors e.preventDefault()



--> document.querySelector('#a').addEventListener('keydown', function(e){
    let lettre = String.fromCharCode(e.keyCode)
    if (lettre!= "A"){
        e.preventDefault()
    }
})

 **/



/** Pour récuperer la valeur de ce qu'on a mit dans le form --> dans la console = document.querySelector('#cp'),*
    donc l'id du form, puis creer une variable du cp = document.querySelector('#cp')
    Pour ensuite taper --> cp.value, qui donnera dans la console l'élèment tapé **/


/** Soumission d'un formulaire pour uniquement code postal, si autre chose, pop up message d'erreur

 document.querySelector('#form').addEventListener('submit', function (e){
    let cp = document.querySelector('#cp')
    if (cp.value.length != 5) {
        alert("Le code postal n'est pas bon")
        e.preventDefault()
    }
})

 **/


/** Pour un form checkbox, le cas des mentions légales par exemple :


document.querySelector('#form').addEventListener('submit', function (e) {
    let mentions = document.querySelector('#mentions')
    if (mentions.checked === false) {
        alert("vous n'avez pas cocher !")
        e.preventDefault()
    }
})

 **/

/** mentions.checked ==== fasle peut être ecrit différemment
   !mentions.checked voudra alors dire "est différent de", ce qui fonctionne également ! **/




/** INTERDIT D'ENTRER SI EN DESSOUS DE 18 ANS

 document.querySelector('#form').addEventListener('submit', function (e) {
   let age = parseInt(document.querySelector('#age').selectedOptions[0].value, 10)
     if (age < 18){
         alert ('Vous ne pouvez pas rentrer')
         e.preventDefault()
     }
})

 **/

let demo = document.querySelector('#demo')
demo.focus() /** METTRE LE FOCUS SUR UN TRUC EN PARTICULIER --> détecte quand on selectionne un champs  **/
demo.blur  /** Inverse le focus, quand on quitte un champs **/




let p = document.querySelector('.test')
let rouge = function () {
    p.classList.toggle('red')
}

p.addEventListener('click', rouge)




let liens = document.querySelectorAll('a.external')

for (let i=0; i<liens.length; i++){
    let lien = liens[i]
    lien.addEventListener('click', function(e){
        let response = window.confirm('Etes-vous certain de vouloir quitter le site ?')
        if (response === false){
            e.preventDefault()
        }

    })
}