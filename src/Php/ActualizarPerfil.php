<?php

$id_usuario = $_GET['id_usuario'];
$nombre = $_GET['nombre'];
$email = $_GET['email'];
$telefono = $_GET['telefono'];

echo "Entar a script";

// Credenciales
$server = 'localhost';
$user = 'u826668871_root';
$passwordb = 'Kazooie25180$';
$bdname = 'u826668871_anime';

// Conexión a la base de datos
$conn = mysqli_connect($server, $user, $passwordb, $bdname);

if (!$conn) {
    die(json_encode(array("error" => "Fallo al conectar a la base de datos")));
}

// Sanitización de entradas
$id_usuario = mysqli_real_escape_string($conn, $id_usuario);
$nombre = mysqli_real_escape_string($conn, $nombre);
$email = mysqli_real_escape_string($conn, $email);
$telefono = mysqli_real_escape_string($conn, $telefono);

$update_sql = "UPDATE usuario SET nombre='$nombre', telefono='$telefono', email='$email' WHERE id_usuario='$id_usuario'";
mysqli_query($conn, $update_sql);
echo json_encode(array("mensaje" => "Entrada actualizada"));


mysqli_close($conn);
?>
