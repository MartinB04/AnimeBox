<?php

// Establecer el dominio permitido
//$dominioPermitido = "http://localhost:8081";

// Habilitar CORS para permitir solicitudes de cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");






// recibir variables de una app, pagina, etc
$username = $_GET['username'];
$nombre = $_GET['nombre'];
$password = $_GET['password'];
$telefono = $_GET['telefono'];
$email = $_GET['email'];
$fotoPerfil = $_GET['fotoPerfil'];   
$fechaRegistro = $_GET['fechaRegistro'];  

/* $idG = $_GET['idG'];
$nombreG = $_GET['nombreG'];
$descripcionG = $_GET['descripcionG']; */
  

//encriptar pass
//$passhash = password_hash($pass, PASSWORD_DEFAULT);

//Credenciales de autentificacion del server 
/* $server = 'localhost';
$user = 'root';
$passwordb = 'Kazooie10';
$bdname = 'animeapp'; */

$server = 'localhost';
$user = 'u826668871_root';
$passwordb = 'Kazooie25180$';
$bdname = 'u826668871_anime';


file_put_contents('log.txt', "Datos recibidos: " . json_encode($_GET) . PHP_EOL, FILE_APPEND);


//conectar a la bd
$conn = mysqli_connect($server, $user, $passwordb, $bdname);
if(!$conn)
{
    die('error al conectarse a la bd');
}

/* //insercion
 $sql = "INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
('mudis', 'passs', 'foto', 'moarri',  '1999-10-15', '457105451', 'asdfwe@gamail.com');";  */

//"http://localhost/proyecto/registro.php?username=mudis&password=passsss&fotoPerfil=FOtoperfil2&nombre=martin&fechaRegistro=1999-10-15&telefono=4571054513&email=martin25180@rockermail.com"


 $sql = "INSERT INTO usuario (username, password, fotoPerfil, nombre,  fechaRegistro,  telefono, email) VALUES
('$username', '$password', '$fotoPerfil', '$nombre', '$fechaRegistro', '$telefono', '$email')"; 
 /* $sql = "INSERT INTO usuario (username, password) VALUES
('$username', '$password'"; 
 */

if(mysqli_query($conn,$sql))
{
    echo "se inserto con Exito";
}
else
{
    echo "Error al insertar";
}
mysqli_close($conn);

?>

