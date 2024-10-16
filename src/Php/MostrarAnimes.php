<?php
//echo "Iniciar sesion Bv";
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
//Datos recibidos
/* $id_usuario = $_GET['username'];

$contrasenia = $_GET['password']; */


//credenciales
/* $server = 'localhost';
$user = 'root';
$passwordb = 'Kazooie10';
$bdname = 'animeapp'; */

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
$sql = "SELECT * FROM anime ";
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