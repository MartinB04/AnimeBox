<?php

// Habilitar CORS para permitir solicitudes de cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, OPTIONS");

// Revisar si se ha recibido la solicitud correctamente
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Recibir las variables
    $id_usuario = $_GET['username'];
    $nombre = $_GET['name'];
    $contraseña = $_GET['password'];
    $telefono = $_GET['phone'];
    $email = $_GET['email'];
    //$fechaRegistro = $_POST['fechaRegistro'] ?? '';


    // Log para verificar los datos recibidos
    file_put_contents('log.txt', "Datos recibidos: " . json_encode($_GET) . PHP_EOL, FILE_APPEND);

    /* 
    // Manejo de la imagen de perfil si existe
    if (isset($_FILES['imagen_perfil']) && $_FILES['imagen_perfil']['error'] === UPLOAD_ERR_OK) {
        $imagen_perfil = $_FILES['imagen_perfil']['name'];
        $tmp_name = $_FILES['imagen_perfil']['tmp_name'];

        // Definir el directorio donde se guardará la imagen
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true); // Crear el directorio si no existe
        }

        // Mover el archivo subido al directorio deseado
        $uploadFile = $uploadDir . basename($imagen_perfil);
        if (move_uploaded_file($tmp_name, $uploadFile)) {
            file_put_contents('log.txt', "Archivo subido con éxito: $uploadFile" . PHP_EOL, FILE_APPEND);
        } else {
            file_put_contents('log.txt', "Error al subir el archivo." . PHP_EOL, FILE_APPEND);
        }
    } else {
        $imagen_perfil = ''; // Si no se subió archivo, dejamos el campo vacío
        file_put_contents('log.txt', "No se recibió imagen o hubo un error." . PHP_EOL, FILE_APPEND);
    } */

    // Credenciales de autentificacion del servidor 
    $server = 'localhost';
    $user = 'u826668871_root';
    $passwordb = 'Kazooie25180$';
    $bdname = 'u826668871_anime';

    // Conectar a la bd
    $conn = mysqli_connect($server, $user, $passwordb, $bdname);
    if (!$conn) {
        die('Error al conectarse a la bd');
    }

    // Inserción de datos
    $sql = "INSERT INTO usuario (id_usuario, nombre, contraseña, telefono, email, fecha_registro, imagen_perfil) 
    VALUES ('$id_usuario', '$nombre', '$contraseña', '$telefono', '$email', CURDATE(), '$imagen_perfil')";

    if (mysqli_query($conn, $sql)) {
        echo "Se insertó con éxito";
    } else {
        echo "Error al insertar: " . mysqli_error($conn);
    }

    mysqli_close($conn);
} else {
    echo "Método no permitido.";
}

?>
