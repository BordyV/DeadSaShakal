<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<title>Bullet</title>



<script src="js/init.js"></script>
<script src="js/physique/script.js"></script>
<!-- JS MODEL -->
<script src="js/model/Objet.js"></script>
<script src="js/model/Hero.js"></script>
<script src="js/model/Bullet.js"></script>
<script src="js/model/Mechant.js"></script>
<script src="js/model/Mur.js"></script>




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
  <img id="mechant" src="img/mechant.svg">
  <img id="arme" src="img/arme.svg">
  <img id="background1" src="img/background1.svg">
  <!-- <img id="bullet" width="10px" src="https://mdn.mozillademos.org/files/5397/rhino.jpg"> -->
</div>
  <form method="get" action="index.php">
  <input class="Restart"
        type="submit" name="Restart">
</form>

</body>
</html>
