<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recupera o e-mail do POST
    $email = $_POST['email'];

    // Define os detalhes do e-mail
    $to = $email;
    $subject = "Promoções Limitadas!";
    $message = "Aproveite essas ofertas limitadas antes que acabe! Notebook Legion 5 com placa de vídeo: RTX 3050 4GB, processador: Ryzen 7 5800H e Memória RAM de 16 GB, por apenas R$ 8.047,04";
    $headers = "From: thiagocostas2017@gmail.com";

    // Envia o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "Email enviado com sucesso!";
    } else {
        echo "Falha ao enviar o e-mail.";
    }
}
?>
