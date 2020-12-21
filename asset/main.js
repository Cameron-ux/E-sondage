// Création des variables

var pseudo = prompt('Entrer votre pseudo');
var caseUn = document.getElementById("case1");
var caseDeux = document.getElementById("case2");
var caseTrois = document.getElementById("case3");
var caseQuatre = document.getElementById("case4");
var answer = 0;
var goodAns = 0;

// Affichage du pseudo au dessus du sondage

nom.innerHTML = pseudo

// Tableau des questions des sondages

const Sondage = {
    questions :
    [

        {
            titre : "Quel équipe va gagner le tournoi League of Legends ?", 
            reponse :
            [
                {choix : "FNATIC", isRight : true},
                {choix : "Vitality", isRight : false},
                {choix : "Misfits Academy", isRight : false},
                {choix : "Origen", isRight : false},
            ]
        },

        {
            titre : "Quel est le meilleur joueur du tournoi ?",
            reponse :
            [
                {choix : "Faker", isRight : false},
                {choix : "Caps", isRight : false},
                {choix : "Rekkles", isRight : false},
                {choix : "Alderiate", isRight : true},
            ]
        },

        {
            titre : "Ou se passera les prochains championnat du monde en 2021 ?",
            reponse :
            [
                {choix : "Europe", isRight : false},
                {choix : "Amérique du Nord", isRight : true},
                {choix : "Asie", isRight : false},
                {choix : "Océanie", isRight : false},
            ]
        },

        {
            titre : "Combien gagne l'équipe gagnante du championnat ?",
            reponse :
            [
                {choix : "500k $", isRight : false},
                {choix : "700k $", isRight : false},
                {choix : "1M $", isRight : true},
                {choix : "1,5M $", isRight : false},
            ]
        },

    ]

}

// Verifier si il clique sur la bonne réponse

    caseUn.addEventListener("click", function()
    {
        let verif = Sondage.questions[answer].reponse[0].isRight
        if(verif === true)
        {
            goodAns++
            nom.innerHTML = pseudo + ' = ' + goodAns
        }
    })

    caseDeux.addEventListener("click", function()
    {
        let verif = Sondage.questions[answer].reponse[1].isRight
        if(verif === true)
        {
            goodAns++
            nom.innerHTML = pseudo + ' = ' + goodAns
        }
    })

    caseTrois.addEventListener("click", function()
    {
        var verif = Sondage.questions[answer].reponse[2].isRight
        if(verif === true)
        {
            goodAns++
            nom.innerHTML = pseudo + ' = ' + goodAns
        }
    })

    caseQuatre.addEventListener("click", function()
    {
        var verif = Sondage.questions[answer].reponse[3].isRight
        if(verif === true)
        {
            goodAns++
            nom.innerHTML = pseudo + ' = ' + goodAns
        }
    })

function Question ()
{
    if(answer === (Sondage.questions.length - 1))
    {
        document.location.href="resultats.html"; //affichage sur la page des résulats
    }
    else
    {
        //Passer à la question suivante
        answer++;
        titreQuestion.innerHTML = Sondage.questions[answer].titre
        case1.innerHTML = Sondage.questions[answer].reponse[0].choix
        case2.innerHTML = Sondage.questions[answer].reponse[1].choix
        case3.innerHTML = Sondage.questions[answer].reponse[2].choix
        case4.innerHTML = Sondage.questions[answer].reponse[3].choix
    }
}


// Afficher les questions sur la page
case1.innerHTML = Sondage.questions[0].reponse[0].choix
case2.innerHTML = Sondage.questions[0].reponse[1].choix
case3.innerHTML = Sondage.questions[0].reponse[2].choix
case4.innerHTML = Sondage.questions[0].reponse[3].choix