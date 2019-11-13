<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<link rel="stylesheet" type="text/css" href="css/style.css"/>
<script src="js/model/Object.js"></script>
<script src="js/editeur/editeur.js"></script>
<title>Bullet</title>
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
