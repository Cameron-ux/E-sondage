<!DOCTYPE html>
<html lang="fr">
<head>

    <meta charset="UTF-8">
    <link rel="stylesheet" href="asset/style.css">
    <link rel="stylesheet" href="css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projet Fil Rouge</title>

</head>

    <body>
        <header>

            <section class="inscription">
                <a href="inscription.php"><img src="asset/img/subscribe.png" alt="inscription" title="inscription"></a>
                <h1>Inscription</h1>
            </section>

            <section class="connexion">
                <a href="connexion.php"><img src="asset/img/user.png" alt="connexion" title="connexion"></a>
                <h1>Connexion</h1>
            </section>

        </header>

        <section class="content">

            <div class="texte">
                <h2>Bienvenue sur E-sondage !</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium expedita, tempore dolorem minima quas optio qui modi obcaecati eligendi officia non nam nostrum amet labore, quia magnam temporibus quisquam eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eum, quasi reiciendis quas animi eos explicabo. Asperiores obcaecati adipisci est vitae cum quisquam, perspiciatis perferendis consequatur incidunt debitis ex porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, asperiores. Ullam labore dolorum odit facere ipsum, itaque cumque voluptates ad sapiente, optio provident qui voluptas aliquid, consectetur veniam velit architecto.</p>
            </div>

            <section class="rang1">
                <a href="sondage_LoL.html"><h3 class="lol">LoL</h3></a>
                <a href="#"><h3 class="ow">OW</h3></a>
                <a href="#"><h3 class="ssbu">SSBU</h3></a>
            </section>

            <section class="rang2">
                <a href="#"><h3 class="cs">CS:GO</h3></a>
                <a href="#"><h3 class="ftn">Fortnite</h3></a>
            </section>

            <section class="resultat">
                <a href="resultats.html">Voir le classement mondial !</a>
            </section>

            <section class="tchat">
                <?php
            session_start();
            if(isset($_SESSION['user']) && !empty($_SESSION['user'])){
                // Ici, l'utilisateur est connecté
                ?>
                <p>Bonjour <?= $_SESSION['user']['pseudo'] ?> <a class="btn btn-danger" href="deconnexion.php">Déconnexion</a></p>
            <?php
            }else{
                // Ici l'utilisateur n'est pas connecté
                ?>
            <?php
            }
            ?>
            <div class="col-12 my-1">
                <div class="p-2" id="discussion">
                </div>
            </div>
            <div class="col-12 saisie">
                <div class="input-group">
                    <input type="text" class="form-control" id="texte" placeholder="Entrez votre texte">
                    <div class="input-group-append">
                        <span class="input-group-text" id="valid"><i class="la la-check"></i></span>
                    </div>
                </div>
            </div>

            </section>

            <footer>
                <p>Projet fil rouge © Cameron Lormont</p>
            </footer>

        </section>

        <script src="js/scripts.js"></script>
    </body>

</html>