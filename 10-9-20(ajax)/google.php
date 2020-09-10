<?php
$filehandle = 
  fopen("http://www.google.com/complete/search?h1=en&js=true&qu=" .
  $_GET["qu"], "r");
while (!feof($filehandle)){
    $download = fgets($filehandle);
    echo $download;
}
 fclose($filehandle;)
?>