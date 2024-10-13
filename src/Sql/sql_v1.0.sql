-- Active: 1703272465031@@127.0.0.1@3306@animeapp
CREATE TABLE usuario (
    username VARCHAR(50) PRIMARY KEY,
    password VARCHAR(50) NOT NULL,
    fotoPerfil VARCHAR(200),
    nombre VARCHAR(70) NOT NULL,
    fechaRegistro DATE /* NOT NULL */,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(40) NOT NULL
);

CREATE TABLE autor (
    idAu VARCHAR(10) PRIMARY KEY,
    nombreAu VARCHAR(50),
    fechaNacimientoA  DATE
);

CREATE TABLE genero(
    idG VARCHAR(10) PRIMARY KEY,
    descripcionG VARCHAR(500),
    nombreG VARCHAR(70)
);

CREATE TABLE estudio (
    idEs VARCHAR(10) PRIMARY KEY,
    nombreEs VARCHAR(40) NOT NULL
);

CREATE TABLE anime (
    idA VARCHAR(20) PRIMARY KEY,
    nombreA VARCHAR(80) NOT NULL,
    sinopsisA VARCHAR(1000) NOT NULL,
    precuelaA VARCHAR(80)  ,
    secuelaA VARCHAR(80) ,
    statusA VARCHAR(20),
    tipoA   VARCHAR(25),
    popularidad DECIMAL NOT NULL,
    idG VARCHAR(10) NOT NULL,
    idEs VARCHAR(10) NOT NULL,
    imagenA VARCHAR(200),
    Foreign Key (idG) REFERENCES genero(idG),
    Foreign Key (idEs) REFERENCES estudio(idEs)
);

CREATE TABLE visualiza (
    username    varchar(30) NOT NULL,
    idA VARCHAR(20) NOT NULL,
    statusVision    VARCHAR(15) NOT NULL,
    clasificacionAnime  VARCHAR(15),
    Foreign Key (username) REFERENCES usuario(username),
    Foreign Key (idA) REFERENCES anime(idA)
)

CREATE Table comentario(
    idC VARCHAR(10) PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    idA VARCHAR (20) not NULL,
    descripcionC VARCHAR(1000) NOT NULL,
    Foreign Key (username) REFERENCES usuario(username),
    Foreign Key (idA) REFERENCES anime(idA)
);

CREATE Table crea(
    idAu VARCHAR(10) NOT NULL,
    idA VARCHAR(20) NOT NULL,
    fechaCreacionA  DATE NOT NULL,
    Foreign Key (idAu) REFERENCES autor(idAu),
    Foreign Key (idA) REFERENCES anime(idA)
);
CREATE Table episodio(
    idE VARCHAR(10) PRIMARY KEY,
    numeroE VARCHAR(4) NOT NULL,
    idA VARCHAR(20) NOT NULL,
    url1 VARCHAR(100),
    url2 VARCHAR(100),
    url3 VARCHAR(100),
    url4 VARCHAR(100),
    url5 VARCHAR(100),
    url6 VARCHAR(100),
    url7 VARCHAR(100),
    Foreign Key (idA) REFERENCES anime(idA)
);

DROP TABLE crea;
DROP TABLE autor;
DROP TABLE episodio;
DROP TABLE visualiza;
DROP TABLE anime;
DROP TABLE comentario;
DROP TABLE genero;
DROP TABLE estudio;
DROP TABLE usuario;





-- Poblamiento de ejemplo generado aleatoriamente

-- Usuarios
INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
('user1', 'password1', 'perfil1.jpg', 'Juan Pérez', '2023-05-10', "Telefono1", "email1"),
('user2', 'password2', 'perfil2.jpg', 'María González', '2023-06-15', "Telefono2", "email2"),
('user3', 'password3', 'perfil3.jpg', 'Luis Rodríguez', '2023-07-20', "Telefono3", "email3"),
('user4', 'password4', 'perfil4.jpg', 'Ana Martínez', '2023-08-25', "Telefono4", "email4"),
('user5', 'password5', 'perfil5.jpg', 'Pedro Sánchez', '2023-09-30', "Telefono5", "email5");

-- Autores
INSERT INTO autor (idAu, nombreAu, fechaNacimientoA) VALUES
('aut001', 'Hayao Miyazaki', '1941-01-05'),
('aut002', 'Mamoru Hosoda', '1967-09-19'),
('aut003', 'Makoto Shinkai', '1973-02-09'),
('aut004', 'Hideaki Anno', '1960-05-22'),
('aut005', 'Satoshi Kon', '1963-10-12');

-- Géneros
INSERT INTO genero (idG, descripcionG, nombreG) VALUES
('gen001', 'Ciencia ficción y aventura', 'Sci-Fi'),
('gen002', 'Comedia y romance', 'Romance'),
('gen003', 'Fantasía y acción', 'Fantasía'),
('gen004', 'Drama y psicológico', 'Drama'),
('gen005', 'Aventura y sobrenatural', 'Aventura');

-- Estudios
INSERT INTO estudio (idEs, nombreEs) VALUES
('est001', 'Studio Ghibli'),
('est002', 'Madhouse'),
('est003', 'Kyoto Animation'),
('est004', 'Toei Animation'),
('est005', 'Bones');

-- Animes
INSERT INTO anime (idA, nombreA, sinopsisA, precuelaA, secuelaA, statusA, tipoA, popularidad, idG, idEs, imagenA) VALUES
('anm001', 'El Viaje de Chihiro', 'Chihiro entra en un mundo de espíritus para salvar a sus padres', NULL, NULL, 'Finalizado', 'Película', 9.2, 'gen001', 'est001', 'viaje_chihiro.jpg'),
('anm002', 'Kimi no Na wa', 'Dos adolescentes intercambian cuerpos y luchan contra el destino', NULL, NULL, 'Finalizado', 'Película', 9.5, 'gen002', 'est003', 'kimi_no_na_wa.jpg'),
('anm003', 'Neon Genesis Evangelion', 'Pilotos de robots gigantes luchan contra seres misteriosos', NULL, NULL, 'Finalizado', 'Serie', 8.9, 'gen004', 'est004', 'neon_genesis_evangelion.jpg'),
('anm004', 'Spirited Away', 'Una niña encuentra un mundo mágico y busca su libertad', NULL, NULL, 'Finalizado', 'Película', 9.3, 'gen003', 'est001', 'spirited_away.jpg'),
('anm005', 'Death Note', 'Un estudiante encuentra un cuaderno que mata a quienquiera que tenga su nombre escrito', NULL, NULL, 'Finalizado', 'Serie', 8.7, 'gen004', 'est002', 'death_note.jpg');

-- Visualiza
INSERT INTO visualiza (username, idA, statusVision, clasificacionAnime) VALUES
('user1', 'anm001', 'Viendo', 'Excelente'),
('user2', 'anm002', 'Completado', 'Bueno'),
('user3', 'anm003', 'Viendo', 'Regular'),
('user4', 'anm004', 'Pendiente', 'Excelente'),
('user5', 'anm005', 'Completado', 'Bueno');

-- Comentarios
INSERT INTO comentario (idC, username, idA, descripcionC) VALUES
('com001', 'user1', 'anm001', 'comentario1'),
('com002', 'user2', 'anm002', 'comentario2'),
('com003', 'user3', 'anm003', 'comentario3'),
('com004', 'user4', 'anm004', 'comentario4'),
('com005', 'user5', 'anm005', 'comentario5');

-- Crea
INSERT INTO crea (idAu, idA, fechaCreacionA) VALUES
('aut001', 'anm001', '2001-07-20'),
('aut002', 'anm002', '2016-08-26'),
('aut003', 'anm003', '1995-10-04'),
('aut004', 'anm004', '2001-07-20'),
('aut005', 'anm005', '2006-10-03');

-- Episodios (solo para animes con episodios)
INSERT INTO episodio (idE, numeroE, idA, url1, url2, url3, url4, url5, url6, url7) VALUES
('ep001', '1', 'anm003', 'url_ep1_1', 'url_ep1_2', NULL, NULL, NULL, NULL, NULL),
('ep002', '2', 'anm003', 'url_ep2_1', 'url_ep2_2', NULL, NULL, NULL, NULL, NULL),
('ep003', '3', 'anm003', 'url_ep3_1', 'url_ep3_2', NULL, NULL, NULL, NULL, NULL),
('ep004', '4', 'anm003', 'url_ep4_1', 'url_ep4_2', NULL, NULL, NULL, NULL, NULL),
('ep005', '5', 'anm003', 'url_ep5_1', 'url_ep5_2', NULL, NULL, NULL, NULL, NULL);





SELECT * FROM usuario;
SELECT * FROM genero;


INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
('mudis', 'passs', 'foto', 'moarri',  '10-12-1999', '457105451', 'asdfwe@gamail.com');

INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
('$username', '$password', '$fotoPerfil', '$nombre',  '10-12-1999', '$telefono', '$email');


INSERT INTO usuario (username, password, fotoPerfil, nombre, fechaRegistro, telefono, email) VALUES
('mudis', 'passs', 'foto', 'moarri',  '1999-10-15', '457105451', 'asdfwe@gamail.com');

DELETE FROM usuario WHERE username ="mudis";

SELECT * FROM usuario;
DELETE FROM usuario WHERE username= "mudis";