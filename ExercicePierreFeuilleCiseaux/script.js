let scoreJoueur = 0;
let scoreOrdi = 0;
let choixJoueur = 0;
let choixOrdi = 0;
let choix = document.getElementById("choix");
let affichageScoreJoueur= document.querySelector(".scoreJoueur");
let affichageScoreOrdi= document.querySelector(".scoreOrdi");
let pierre = document.getElementById("pierre");
let papier = document.getElementById("papier")
let ciseaux = document.getElementById("ciseaux");
let resultat = document.getElementById("resultat");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function game(choixJ){
    let tour = 3
    let choixIaTexte = "";
    let choixJTexte = "";
    choixOrdi = getRandomInt(3);
    choixJoueur = choixJ;

    switch(choixOrdi){
        case 0:
            choixIaTexte= "Pierre";
            break;
        case 1:
            choixIaTexte = "Papier";
            break;
        case 2:
            choixIaTexte = "Ciseaux"
    } 

    switch(choixJ){
        case 0:
            choixJTexte= "Pierre";
            break;
        case 1:
            choixJTexte = "Papier";
            break;
        case 2:
            choixJTexte = "Ciseaux"
    }   

    if((choixJoueur == 0 && choixOrdi == 2) || (choixJoueur == 1 && choixOrdi == 0) || (choixJoueur == 2 && choixOrdi == 1)){
        resultat.innerHTML = "C'est gagné !";
        tour--
        scoreJoueur++;
    }else if( choixJoueur == choixOrdi){
        resultat.innerHTML = "Egalité";
        tour--
    }else{
        resultat.innerHTML = "C'est perdu !";
        scoreOrdi++;
        tour--
    }
    choix.innerHTML = choixJTexte + " vs " + choixIaTexte;
    affichageScoreJoueur.innerHTML = "Joueur : " + scoreJoueur;
    affichageScoreOrdi.innerHTML = "Ordinateur : " + scoreOrdi;
    if(tour == 0){
        scoreJoueur = 0
        scoreOrdi = 0

        if(scoreJoueur > scoreOrdi){
            resultat.innerHTML = "Bravo, vous avez gagné !"
            choix.innerHTML = choixJTexte + " vs " + choixIaTexte;
            affichageScoreJoueur.innerHTML = "Joueur : " + scoreJoueur;
            affichageScoreOrdi.innerHTML = "Ordinateur : " + scoreOrdi;
        }
    }

}

pierre.onclick = ()=>game(0, "Pierre");
papier.onclick = ()=>game(1, "Papier")
ciseaux.onclick = ()=> game(2, "Ciseaux");
