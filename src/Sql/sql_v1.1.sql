-- Active: 1703272465031@@127.0.0.1@3306@animeapp
CREATE TABLE usuario (
    id_usuario VARCHAR(50) PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    contrasenia VARCHAR(200) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    email VARCHAR(60) NOT NULL,
    fecha_registro DATE NOT NULL,
    imagen_perfil VARCHAR(250) NOT NULL
);

CREATE TABLE genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(70) NOT NULL,
    descripcion VARCHAR(1000) NOT NULL
);

CREATE TABLE anime (
    id_anime INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    sinopsis TEXT NOT NULL,
    precuela VARCHAR(150) NOT NULL,
    secuela VARCHAR(150) NOT NULL,
    status_emision VARCHAR(30) NOT NULL,
    tipo_contenido VARCHAR(25) NOT NULL,
    popularidad DECIMAL(2, 1) NOT NULL,
    imagen VARCHAR(200) NOT NULL,
    total_episodios INT NOT NULL
);

CREATE TABLE visualiza (
    id_usuario varchar(50) NOT NULL,
    id_anime INT NOT NULL,
    status_vision VARCHAR(20) NOT NULL,
    favorito BOOLEAN NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
);

CREATE TABLE comentario (
    id_comentario INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario VARCHAR(50) NOT NULL,
    id_anime INT NOT NULL,
    descripcion VARCHAR(1000) NOT NULL,
    fecha_creacion DATETIME NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario (id_usuario),
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
);

CREATE TABLE episodio (
    id_episodio INT AUTO_INCREMENT PRIMARY KEY,
    id_anime INT NOT NULL,
    numero_episodio INT NOT NULL,
    servidor_1 VARCHAR(100) NOT NULL,
    servidor_2 VARCHAR(100) NOT NULL,
    servidor_3 VARCHAR(100) NOT NULL,
    servidor_4 VARCHAR(100) NOT NULL,
    servidor_5 VARCHAR(100) NOT NULL,
    servidor_6 VARCHAR(100) NOT NULL,
    servidor_7 VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
);

CREATE Table se_clasifica_en (
    id_genero INT NOT NULL,
    id_anime INT NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES genero (id_genero),
    FOREIGN KEY (id_anime) REFERENCES anime (id_anime)
)

DROP TABLE episodio;
DROP TABLE visualiza;
DROP TABLE comentario;
DROP TABLE usuario;
DROP TABLE se_clasifica_en;
DROP TABLE anime;
DROP TABLE genero;