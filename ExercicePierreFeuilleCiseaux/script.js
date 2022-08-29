let scoreJoueur = 0;
let scoreOrdi = 0;

let choixJoueur = 0;
let choixOrdi = 0;

let tour = 4;

// Pointe vers l'element htlm portant le nom de la classe correspondant au paramètre(.nomDeLaClasse)
let affichageScoreJoueur = document.querySelector(".scoreJoueur");
let affichageScoreOrdi = document.querySelector(".scoreOrdi");
let affichageTour = document.querySelector(".tour");

// Pointe vers l'element htlm portant le nom de l'id correspondant au paramètre
let choix = document.getElementById("choix");
let pierre = document.getElementById("pierre");
let papier = document.getElementById("papier");
let ciseaux = document.getElementById("ciseaux");
let resultat = document.getElementById("resultat");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function game(choixJ) {
    let choixIaTexte = "";
    let choixJTexte = "";
    choixOrdi = getRandomInt(3);
    choixJoueur = choixJ;


    switch (choixOrdi) {
        case 0:
            choixIaTexte = "Pierre";
            break;
        case 1:
            choixIaTexte = "Papier";
            break;
        case 2:
            choixIaTexte = "Ciseaux";
            break;
        default:
            choixIaTexte = "";
    }

    switch (choixJ) {
        case 0:
            choixJTexte = "Pierre";
            break;
        case 1:
            choixJTexte = "Papier";
            break;
        case 2:
            choixJTexte = "Ciseaux";
            break;
        default:
            choixJTexte = "";
    }

    if ((choixJoueur == 0 && choixOrdi == 2) || (choixJoueur == 1 && choixOrdi == 0) || (choixJoueur == 2 && choixOrdi == 1)) {
        resultat.innerHTML = "C'est gagné !";
        tour--
        scoreJoueur++;
    } else if (choixJoueur == choixOrdi) {
        resultat.innerHTML = "Egalité";
        tour--
    } else {
        resultat.innerHTML = "C'est perdu !";
        scoreOrdi++;
        tour--
    }
    choix.innerHTML = choixJTexte + " vs " + choixIaTexte;
    affichageScoreJoueur.innerHTML = "Joueur : " + scoreJoueur;
    affichageTour.innerHTML = "Tour : " + tour;
    affichageScoreOrdi.innerHTML = "Ordinateur : " + scoreOrdi;

    finDePartie(choixJTexte, choixIaTexte)
}

function finDePartie(choixJTexte, choixIaTexte) {
    if (tour == 0) {
        tour = 4
        if (scoreJoueur > scoreOrdi) {
            Swal.fire({
                icon: 'success',
                title: 'Bravo, vous avez gagné !',
                html: 'Joueur : ' + scoreJoueur + "| Ordinateur : " + scoreOrdi +'<br><br>Cliquez pour rejouer',
                showConfirmButton: false,
                backdrop: `
                url("/image/nyamcatrainbow.gif")
                top
                no-repeat`
            })

        } else if (scoreJoueur == scoreOrdi) {
            Swal.fire({
                icon: 'info',
                title: 'Egalité',
                html: 'Joueur : ' + scoreJoueur + " | Ordinateur : " + scoreOrdi +'<br><br>Cliquez pour rejouer',
                showConfirmButton: false
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Vous avez perdu...',
                html: 'Joueur : ' + scoreJoueur + " | Ordinateur : " + scoreOrdi +'<br><br>Cliquez pour rejouer',
                showConfirmButton: false
            })
        }
        scoreJoueur = 0;
        scoreOrdi = 0;
        affichageScoreJoueur.innerHTML = "Joueur : " + scoreJoueur;
        affichageScoreOrdi.innerHTML = "Ordinateur : " + scoreOrdi;
        choix.innerHTML = choixJTexte + " vs " + choixIaTexte;
    }
}

pierre.onclick = () => game(0, "Pierre");
papier.onclick = () => game(1, "Papier");
ciseaux.onclick = () => game(2, "Ciseaux");