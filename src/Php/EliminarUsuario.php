<?php

ini_set('display_errors', 1);  // Muestra errores en la salida
ini_set('log_errors', 1);       // Habilita el registro de errores
ini_set('error_log', 'php_error.log'); // Ruta del archivo de log
error_reporting(E_ALL);  

// Datos recibidos
$id_usuario = $_GET['username'];

// Credenciales
$server = 'localhost';
$user = 'u826668871_root';
$passwordb = 'Kazooie25180$';
$bdname = 'u826668871_anime';

$conn = mysqli_connect($server, $user, $passwordb, $bdname);

if (!$conn) {
    die("Fallo al conectar a la base de datos");
}

// Obtener el nombre del archivo de la foto de perfil antes de eliminar al usuario
$sqlSelect = "SELECT imagen_perfil FROM usuario WHERE id_usuario=?";
$stmtSelect = mysqli_prepare($conn, $sqlSelect);
mysqli_stmt_bind_param($stmtSelect, 's', $id_usuario);
mysqli_stmt_execute($stmtSelect);
mysqli_stmt_bind_result($stmtSelect, $imagen_perfil);
mysqli_stmt_fetch($stmtSelect);
mysqli_stmt_close($stmtSelect);

// Log para verificar el nombre de usuario y la foto de perfil
error_log("Usuario: " . $id_usuario);
error_log("Foto de perfil: " . $imagen_perfil);

// Si hay una foto de perfil asociada, intenta eliminarla del servidor
if ($imagen_perfil) {
    $uploads_dir = 'uploads/'; // Cambia a la ruta correcta en tu servidor
    $rutaFoto = $uploads_dir . $imagen_perfil;

    // Log la ruta de la foto que se intentará eliminar
    error_log("Ruta de la foto a eliminar: " . $rutaFoto);

    if (file_exists($rutaFoto)) {
        if (unlink($rutaFoto)) {
            error_log("Foto de perfil eliminada con éxito.");
            echo "Foto de perfil eliminada con éxito. ";
        } else {
            error_log("Error al eliminar la foto de perfil: " . $rutaFoto);
            echo "Error al eliminar la foto de perfil. ";
        }
    } else {
        error_log("La foto de perfil no existe en el servidor: " . $rutaFoto);
        echo "La foto de perfil no existe en el servidor. ";
    }
} else {
    error_log("No hay foto de perfil asociada al usuario: " . $id_usuario);
}

// Sentencia a ejecutar en el servidor de base de datos
$sql = "DELETE FROM usuario WHERE id_usuario=?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, 's', $id_usuario);

// Ejecución de la sentencia
if (mysqli_stmt_execute($stmt)) {
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "Usuario eliminado con éxito.";
    } else {
        echo "No se encontró el usuario o ya fue eliminado.";
    }
} else {
    error_log("Error al eliminar el usuario: " . mysqli_error($conn));
    echo "Error al eliminar el usuario: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
