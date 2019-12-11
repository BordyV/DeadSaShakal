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
<!--<script src="js/init.js"></script>-->
<!--<script src="js/physique/script.js"></script>-->
<!-- JS MODEL -->
<script src="js/model/Objet.js"></script>
<script src="js/model/Hero.js"></script>
<script src="js/model/Bullet.js"></script>
<script src="js/model/Mechant.js"></script>
<script src="js/model/Mur.js"></script>
<script src="js/model/Plateforme.js"></script>

  <!-- editeur -->

<script src="js/model/Caisse.js"></script>





</head>
<?php
if(isset($_GET['Restart']))
{
header("Location: index.php");
exit;}
?>
<body onload="init();">
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
  <!-- <img id="bullet" width="10px" src="https://mdn.mozillademos.org/files/5397/rhino.jpg"> -->
</div>

<div class="slidecontainer" style="position:relative; left:1200px; top:-200px;">
  <input type="range" min="1" max="800" value="50" class="slider" id="sliderY">
</div>
<div class="slidecontainer" style="position:relative; left:200px; top:100px;">
  <input type="range" min="1" max="800" value="50" class="sliderX" id="sliderX">
</div>

  <form method="get" action="index.php">
  <input class="Restart"
        type="submit" name="Restart">
</form>

</body>
</html>
