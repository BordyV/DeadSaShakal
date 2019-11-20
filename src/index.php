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
<script src="js/model/Hero.js"></script></script>
<script src="js/model/Bullet.js">
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
  <img id="source" src="img/b.svg">
  <!-- <img id="source" width="10px" src="https://mdn.mozillademos.org/files/5397/rhino.jpg"> -->
</div>
  <form method="get" action="index.php">
  <input class="Restart"
        type="submit" name="Restart">
</form>

</body>
</html>
