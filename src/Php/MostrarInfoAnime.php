<?php

//credenciales
/* $server = 'localhost';
$user = 'root';
$passwordb = 'Kazooie10';
$bdname = 'animeapp'; */

$id_anime = $_GET['id_anime'];

$server = 'localhost';
$user = 'u826668871_root';
$passwordb = 'Kazooie25180$';
$bdname = 'u826668871_anime';

$conn = mysqli_connect($server, $user, $passwordb, $bdname);

if(!$conn)
{
    die ("Fallo al contectar a la bd");
}

//sentencia a ejecutar en el server de bd
//$sql = "SELECT sinopsis, precuela, secuela, status_emision, tipo_contenido, popularidad, total_episodios FROM anime ";
$sql = "SELECT * FROM anime WHERE id_anime = '$id_anime'";
//ejecucion de la sentencia
$result = mysqli_query($conn,$sql);

//mostrar resultados

$datos = array();
$band = False;
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        // Agrega cada fila a la matriz de datos
        $datos[] = array(
            'id_anime' => $row['id_anime'],
            'nombre' => $row['nombre'],
            'sinopsis' => $row['sinopsis'],
            'precuela' => $row['precuela'],
            'secuela' => $row['secuela'],
            'status_emision' => $row['status_emision'],
            'tipo_contenido' => $row['tipo_contenido'],
            'popularidad' => $row['popularidad'], 
            'imagen' => $row['imagen'],
            'total_episodios' => $row['total_episodios']
        );
    }
    
    // Codifica los datos a formato JSON
    echo json_encode($datos);
} else {
    // No se encontraron resultados
    echo json_encode(array('error' => 'No se encontraron resultados'));
}

mysqli_close($conn);

?>