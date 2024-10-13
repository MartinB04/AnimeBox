<?php

// Habilitar CORS para permitir solicitudes de cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// Revisar si se ha recibido la solicitud correctamente
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recibir las variables
    $username = $_POST['username'] ?? '';
    $nombre = $_POST['nombre'] ?? '';
    $password = $_POST['password'] ?? '';
    $telefono = $_POST['telefono'] ?? '';
    $email = $_POST['email'] ?? '';
    $fechaRegistro = $_POST['fechaRegistro'] ?? '';

    // Log para verificar los datos recibidos
    file_put_contents('log.txt', "Datos recibidos: " . json_encode($_POST) . PHP_EOL, FILE_APPEND);

    // Manejo de la imagen de perfil si existe
    if (isset($_FILES['fotoPerfil']) && $_FILES['fotoPerfil']['error'] === UPLOAD_ERR_OK) {
        $fotoPerfil = $_FILES['fotoPerfil']['name'];
        $tmp_name = $_FILES['fotoPerfil']['tmp_name'];

        // Definir el directorio donde se guardará la imagen
        $uploadDir = 'uploads/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true); // Crear el directorio si no existe
        }

        // Mover el archivo subido al directorio deseado
        $uploadFile = $uploadDir . basename($fotoPerfil);
        if (move_uploaded_file($tmp_name, $uploadFile)) {
            file_put_contents('log.txt', "Archivo subido con éxito: $uploadFile" . PHP_EOL, FILE_APPEND);
        } else {
            file_put_contents('log.txt', "Error al subir el archivo." . PHP_EOL, FILE_APPEND);
        }
    } else {
        $fotoPerfil = ''; // Si no se subió archivo, dejamos el campo vacío
        file_put_contents('log.txt', "No se recibió imagen o hubo un error." . PHP_EOL, FILE_APPEND);
    }

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
    $sql = "INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
    ('$username', '$password', '$fotoPerfil', '$nombre', '$fechaRegistro', '$telefono', '$email')";

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
