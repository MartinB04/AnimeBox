<?php
// Datos recibidos
$username = $_GET['username'];

// Credenciales
/* $server = 'localhost';
$user = 'root';
$passwordb = 'Kazooie10';
$bdname = 'animeapp';  */

$server = 'localhost';
$user = 'u826668871_root';
$passwordb = 'Kazooie25180$';
$bdname = 'u826668871_anime';

$conn = mysqli_connect($server, $user, $passwordb, $bdname);

if (!$conn) {
    die("Fallo al conectar a la base de datos");
}

// Sentencia a ejecutar en el servidor de base de datos
$sql = "DELETE FROM usuario WHERE username=?";
$stmt = mysqli_prepare($conn, $sql);
mysqli_stmt_bind_param($stmt, 's', $username);

// Ejecución de la sentencia
if (mysqli_stmt_execute($stmt)) {
    if (mysqli_stmt_affected_rows($stmt) > 0) {
        echo "Usuario eliminado con éxito.";
    } else {
        echo "No se encontró el usuario o ya fue eliminado.";
    }
} else {
    echo "Error al eliminar el usuario: " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
