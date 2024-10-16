<?php

$id_usuario = $_GET['id_usuario'];
$id_anime = $_GET['id_anime'];
$status_vision = $_GET['status_vision'];
$favorito = $_GET['favorito'];

$favorito = ($favorito === 'true' || $favorito === '1' || $favorito === 'True') ? 1 : 0;

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

// Consulta para verificar si el usuario ya ha marcado el anime
$sql = "SELECT * FROM visualiza WHERE id_usuario='$id_usuario' AND id_anime='$id_anime'";
$result = mysqli_query($conn, $sql);

// Si existe la entrada
if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    
    // Aquí podrías actualizar la entrada según la acción del usuario
    $opcion_status_vision = $status_vision;
    $opcion_favorito = $favorito;

    // Actualizar estado de visualización y favorito
    $update_sql = "UPDATE visualiza SET status_vision='$opcion_status_vision', favorito='$opcion_favorito' WHERE id_usuario='$id_usuario' AND id_anime='$id_anime'";
    mysqli_query($conn, $update_sql);

    echo json_encode(array("mensaje" => "Entrada actualizada", "status_vision" => $opcion_status_vision, "favorito" => $opcion_favorito));

} else {
    // Si no existe, insertar una nueva entrada
    $opcion_status_vision = $status_vision;
    $opcion_favorito = $favorito;

    $insert_sql = "INSERT INTO visualiza (id_usuario, id_anime, status_vision, favorito) VALUES ('$id_usuario', '$id_anime', '$opcion_status_vision', '$opcion_favorito')";
    mysqli_query($conn, $insert_sql);

    echo json_encode(array("mensaje" => "Entrada creada", "status_vision" => $opcion_status_vision, "favorito" => $opcion_favorito));
}

mysqli_close($conn);
?>
