<?php
echo"<link rel='stylesheet' href='cadastro.css'>";
echo"<div class=container>";
include'conexao.php';
$vnom=$_POST['txtnome'];
$vema=$_POST['txtemail'];
$vsen=$_POST['txtsenha'];
$vsex=$_POST['txtsexo'];
$vdtn=$_POST['txtdtna'];
$include=$cmd->query("insert into tbtest(nome_t,email_t,senha_t,sexo_t,dtna_t) values ('$vnom', '$vema', '$vsen', '$vsex', '$vdtn')");

echo "<script language 'JavaScript'> alert ('Dados cadastrados com sucesso!');
location.href='cadastro.html'; </script>";
echo"</div>";
?>