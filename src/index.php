<!DOCTYPE html>
<html>
<head>
<meta charset=utf-8 />
<link rel="stylesheet" type="text/css" href="style.css"/>
<script src="script.js"></script>
<title>Bullet</title>
</head>
<?php
echo "test";
if(isset($_GET['Restart']))
{
header("Location: index.php"); 
exit;}
?>
<body onload="init();">
  <canvas id="myCanvas" width="600" height="400">
  </canvas>

  <form method="get" action="index.html">
  <input class="Restart"
        type="submit" name="Restart">
</form>

</body>
</html>
