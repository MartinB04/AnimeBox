<?php

$id_usuario = $_GET['id_usuario'];
$id_anime = $_GET['id_anime'];

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
$id_anime = mysqli_real_escape_string($conn, $id_anime);

// Consulta para obtener los datos de la tabla visualiza
$sql = "SELECT * FROM visualiza WHERE id_usuario='$id_usuario' AND id_anime='$id_anime'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    echo json_encode(array("status_vision" => $row['status_vision'], "favorito" => $row['favorito']));
} else {
    echo 0;
}

mysqli_close($conn);
?>