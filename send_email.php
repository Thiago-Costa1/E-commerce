<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // autoload do Composer

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userEmail = $_POST['email'];

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'techflexnotebook@gmail.com'; 
        $mail->Password = 'paxm jhna djbx tmlg'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; 
        $mail->Port = 587; 

        $mail->CharSet = 'UTF-8';

        
        $mail->setFrom('techflexnotebook@gmail.com', 'TechFlexNotebook');
        $mail->addAddress($userEmail);
       
        $mail->isHTML(true);
        $mail->Subject = 'Promoção Especial para Você!';
        $mail->Body    = '<h1 style="text-align: center;">Promoção Especial</h1>
                        <h2>Confira nossa promoção imperdível!</h2>
                        <a href="https://thiago-costa1.github.io/E-commerce/">
                        <img src="cid:promo_image" style="width:800px; height:auto;">
                        </a>
                        <p style="font-size: 20px; font-weight: bold;">Não perca essa oportunidade!</p>';

        $mail->AltBody = 'Confira nossa promoção exclusiva!';

       
        $mail->addEmbeddedImage('1sliide-carrossel.png', 'promo_image');


        $mail->send();
        echo 'E-mail enviado com sucesso!';
    } catch (Exception $e) {
        echo "Erro ao enviar e-mail: {$mail->ErrorInfo}";
    }
}
?>
