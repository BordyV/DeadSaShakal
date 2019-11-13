<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<title>Bullet</title>



<script src="js/init.js"></script>
<script src="js/physique/script.js"></script>
<script src="js/physique/mur.js"></script>




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

  <form method="get" action="index.php">
  <input class="Restart"
        type="submit" name="Restart">
</form>

</body>
</html>
