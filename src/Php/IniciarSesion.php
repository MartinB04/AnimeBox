<?php
//echo "Iniciar sesion Bv";
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
//Datos recibidos
$id_usuario = $_GET['username'];

$contrasenia = $_GET['password'];


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
$sql = "SELECT * FROM usuario WHERE(id_usuario='$id_usuario')";
//ejecucion de la sentencia
$result = mysqli_query($conn,$sql);

//mostrar resultados

$datos = array();
$band = False;
if(mysqli_num_rows($result)>0)
{
    while($row = mysqli_fetch_assoc($result))
    {

        /* if (password_verify($password, $row['password'])) { */
        if ($contrasenia === $row['contrasenia']) {
            $band = True;
            $datos=array('id_usuario'=>$row['id_usuario'],'nombre'=>$row['nombre'],'contrasenia'=>$row['contrasenia'],'telefono'=>$row['telefono'],'email'=>$row['email'],'fecha_registro'=>$row['fecha_registro'],'imagen_perfil'=>$row['imagen_perfil']); 
        }
        else{
            $band = False;
            echo "0";
        }
    }
    if($band == True){
        $jsondata = json_encode($datos);
        echo $jsondata;
    }
}
    else{
        echo "0";
}

mysqli_close($conn);

?>