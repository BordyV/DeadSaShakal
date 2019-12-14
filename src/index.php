<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<style>
.slidecontainer {
  width: 500px;

}

.slider {
     -webkit-appearance: none;
     width: 500px;
     height: 25px;
     background: #d3d3d3;
     outline: none;
     opacity: 0.7;
     -webkit-transition: .2s;
     transition: opacity .2s;
   transform: rotate(270deg)
   }
   .sliderX {
     -webkit-appearance: none;
     width: 500px;
     height: 25px;
     background: #d3d3d3;
     outline: none;
     opacity: 0.7;
     -webkit-transition: .2s;
     transition: opacity .2s;

   }



.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
.sliderX::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
.slider::-moz-range-thumb {
   width: 25px;
   height: 25px;
   background: #4CAF50;
   cursor: pointer;
 }
 .sliderX::-moz-range-thumb {
   width: 25px;
   height: 25px;
   background: #4CAF50;
   cursor: pointer;
 }
</style>



<link rel="stylesheet" type="text/css" href="css/style.css"/>

<title>Bullet</title>

<script src="js/physique/Editeur.js"></script>
<script src="map/map2.json"></script>
<script src="js/Menu.js"></script>
<script src="js/physique/Map.js"></script>
<script src="js/physique/script.js"></script>
<!-- JS MODEL -->
<script src="js/model/Objet.js"></script>
<script src="js/model/Hero.js"></script>
<script src="js/model/Bullet.js"></script>
<script src="js/model/Mechant.js"></script>
<script src="js/model/Mur.js"></script>
  <!-- editeur -->
  <!--

<script src="js/model/Caisse.js"></script>

-->




</head>

<script>
function chargePageJouer() {

  document.getElementById("myCanvas").style.display = "";
  document.getElementById("Regles").style.display = "none";
  document.getElementById("liRegles").classList.remove("active");
  document.getElementById("liJouer").classList.add("active");

}

function chargePageRegles() {

  document.getElementById("Regles").style.display = "unset";
  document.getElementById("myCanvas").style.display = "none";
  document.getElementById("sliders").style.display = "none";
  document.getElementById("liRegles").classList.add("active");
  document.getElementById("liJouer").classList.remove("active");



}
</script>

<body onload="menu();">
<div id ="menu">
  <ul>
    <li><a id="liJouer" class="" href="#Jouer" onclick="chargePageJouer()">Jouer</a></li>
    <li><a id="liRegles" class="" href="#Regles" onclick="chargePageRegles()">Regles</a></li>
  </ul>
</div>
<br>

  <canvas id="myCanvas" width="1280" height="720">
  </canvas>

  <div style="display:none;">
  <img id="bullet" src="img/b.svg">
  <img id="hero" src="img/hero.svg">
  <img id="mechant" src="img/mechant.svg">
  <img id="arme" src="img/arme.svg">
  <img id="background1" src="img/background1.svg">
  <img id="mur1" src="img/mur1.svg">
  <img id="mur2" src="img/mur2.svg">

  <img id="plateforme" src="img/plateforme.svg">
</div>




<div style="display:none;" id="Regles">
<h1>Explication des regles.</h1>
<h2>Le but du jeu:</h2>
<p>
Le but du jeu est simple vous êtes un hero <img src="img/hero.svg"> et votre but et d'eliminer les ennemies  <img src="img/mechant.svg">
a travers differents niveaux.<br>
<img width="1000" src="img/Regles/niveau.png"></p>
<p>
Jeu de Tir avec rebond. Nous controlons un personnage qui ne bouge pas mais déplace une arme ( à 360 degrés ) et qui tire balle par balle.<br>
La balle aura une vitesse défini et pourra rebondir 10x maximum.<br>
Il y aura plusieurs niveaux déjà prédéfinis avec des ennemies, des objets intéractifs quand ils rentrent en contact avec la balle ( exemple tnt, boule qui roule, ect... ).<br>
Les personnages (ennemies ou non), les objets mais pas les balles seront soumis à la gravité. <br><br>


Démo jeu:
<br>
2 boutons:<br>
-Jouer:<br>
Pour jouer il faut cliquer sur le bouton jouer et sélectionner son niveau. Pas encore de retour au niveau et de passage une fois le niveau fait.<br>
-Editeur:
Dans l'éditeur vous pouvez sélectionner les objets à placer avec les touches A (mur) - Z (mur) - E (hero) - R (Ennemie)<br>
Placer les objets avec clique gauche. <br>
Clique droit supprime l'objet placé. <br>
Clique gauche sur un objet placé pour le sélectionner.<br>
Pour modifier la taille de l'objet sélectionné utiliser le slider de droite pour la hauteur, le slider du bas pour la largeur.<br>
Pour déplacer un objet déjà placé: Le sélectionner puis cliquer dessus sans relacher le clique et le déplacer avec la souris.<br>
</p>
</div>
<!-- <div class="slidecontainer" style="position:relative; left:1200px; top:-200px;">
  <input type="range" min="1" max="400" value="50" class="slider" id="sliderY">
</div>
<div class="slidecontainer" style="position:relative; left:200px; top:100px;">
  <input type="range" min="1" max="400" value="50" class="sliderX" id="sliderX">
</div> -->

<div id="sliders">
<div class="slidecontainer" style="position:relative; left:1200px; top:-260px;">
  <input type="range" min="1" max="750" value="50" class="slider" id="sliderY">
</div>
<div class="slidecontainer" style="position:relative; left:200px; top:00px;">
  <input type="range" min="1" max="1300" value="50" class="sliderX" id="sliderX">
</div>
</div>
</body>
</html>
