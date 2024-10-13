<?php
//echo "Iniciar sesion Bv";
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
//Datos recibidos
$username = $_GET['username'];

$password = $_GET['password'];


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
$sql = "SELECT * FROM usuario WHERE(username='$username')";
//ejecucion de la sentencia
$result = mysqli_query($conn,$sql);

//mostrar resultados

$datos = array();
$band = False;
if(mysqli_num_rows($result)>0)
{
    while($row = mysqli_fetch_assoc($result))
    {
        /* username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    fotoPerfil VARCHAR(200),
    nombre VARCHAR(70) NOT NULL,
    fechaRegistro DATE  NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(40) NOT NULL */
        /* if (password_verify($password, $row['password'])) { */
        if ($password === $row['password']) {
            $band = True;
            $datos=array('username'=>$row['username'],'password'=>$row['password'],'fotoPerfil'=>$row['fotoPerfil'],'nombre'=>$row['nombre'],'fechaRegistro'=>$row['fechaRegistro'],'telefono'=>$row['telefono'],'email'=>$row['email']); 
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