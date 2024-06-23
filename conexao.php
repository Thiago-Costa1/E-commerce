<?php
$servidor="localhost";
$usuario="root";
$senha="12345678";
$banco="dbtest2B";
$cmd=new PDO("mysql:host=$servidor;dbname=$banco", $usuario,$senha);
?>