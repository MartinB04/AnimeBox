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

INSERT INTO genero (nombre, descripcion) VALUES
('Acción', 'Género centrado en secuencias intensas y dinámicas que incluyen combates, persecuciones y enfrentamientos entre personajes, generalmente con un enfoque en la adrenalina y el espectáculo visual.'),
('Artes Marciales', 'Anime enfocado en el combate cuerpo a cuerpo o con armas tradicionales, mostrando diferentes estilos de lucha y disciplinas de artes marciales, a menudo destacando la habilidad y la técnica.'),
('Aventuras', 'Historias que giran en torno a viajes emocionantes y exploraciones en diferentes entornos, ya sean fantasiosos o del mundo real, con protagonistas enfrentando desafíos y peligros.'),
('Carreras', 'Centrado en competiciones de velocidad, ya sea con vehículos como autos o motocicletas, o carreras de otro tipo. Se destacan la emoción y la competencia entre los personajes.'),
('Ciencia Ficción', 'Explora conceptos futuristas, tecnológicos o científicos, como viajes espaciales, robots, inteligencia artificial o sociedades avanzadas. A menudo plantea dilemas sobre el impacto de la ciencia en la humanidad.'),
('Comedia', 'Género diseñado para provocar la risa y el entretenimiento a través de situaciones cómicas, malentendidos o personajes exagerados. A menudo presenta humor ligero y desenfadado.'),
('Demencia', 'Historias que exploran la locura, el caos o la distorsión de la realidad, a menudo presentando situaciones o personajes que están fuera de lo normal o que desafían la lógica convencional.'),
('Demonios', 'En este género, los demonios y seres sobrenaturales juegan un papel importante en la trama, ya sea como protagonistas, antagonistas o seres que interactúan con humanos en diferentes situaciones.'),
('Deportes', 'Anime que se centra en la competencia y la superación personal dentro de un deporte, ya sea de equipo o individual, mostrando el desarrollo de habilidades y la pasión por el juego.'),
('Drama', 'Se enfoca en las emociones profundas y las relaciones humanas, presentando historias cargadas de tensión emocional, conflictos personales o dilemas morales que afectan a los personajes.'),
('Ecchi', 'Género que incluye situaciones sugerentes y provocativas, a menudo con fanservice, pero sin llegar al contenido explícito. Se utiliza generalmente en un tono cómico o ligero.'),
('Escolares', 'Historias ambientadas principalmente en un entorno escolar, centradas en las interacciones, conflictos y experiencias cotidianas de los estudiantes.'),
('Espacial', 'Género que transcurre en el espacio exterior, con énfasis en la exploración, batallas espaciales y la vida en el universo. Suele combinarse con la ciencia ficción.'),
('Fantasía', 'Presenta mundos mágicos, criaturas sobrenaturales y elementos fantásticos. Los personajes suelen vivir aventuras en reinos imaginarios con reglas y leyes diferentes a las del mundo real.'),
('Harem', 'El protagonista, normalmente masculino, está rodeado de múltiples personajes del género opuesto que muestran interés romántico o afectivo en él, a menudo creando situaciones cómicas o románticas.'),
('Histórico', 'Historias que tienen lugar en épocas pasadas, ya sea con un enfoque en eventos reales o en una recreación fantasiosa de períodos históricos.'),
('Infantil', 'Anime dirigido a un público infantil, con temas simples, personajes coloridos y lecciones morales o educativas. Suelen ser ligeros y fáciles de entender.'),
('Josei', 'Género dirigido principalmente a mujeres adultas, que explora temas más maduros y realistas sobre la vida, el amor y las relaciones.'),
('Juegos', 'Centrado en personajes que participan en juegos, ya sean juegos de mesa, videojuegos o competencias basadas en reglas específicas. A menudo explora el desafío intelectual o la estrategia.'),
('Magia', 'Historias en las que la magia y los hechizos juegan un papel central. Los personajes suelen ser magos, brujas o personas con habilidades mágicas en mundos donde lo sobrenatural es común.'),
('Mecha', 'Presenta robots gigantes controlados por humanos, a menudo en el contexto de batallas o guerras futuristas. Se enfoca en la tecnología avanzada y las luchas entre máquinas y humanos.'),
('Militar', 'Género que se centra en la vida militar, las guerras y las estrategias de combate. Los personajes suelen ser soldados o miembros de organizaciones militares.'),
('Misterio', 'Historias que giran en torno a la resolución de enigmas o crímenes, donde los personajes deben descubrir la verdad oculta a través de pistas y razonamiento deductivo.'),
('Música', 'Anime que pone un fuerte énfasis en la música, ya sea a través de la historia de bandas, músicos o cantantes, o que incorpora la música como un elemento clave en la narrativa.'),
('Parodia', 'Género que satiriza o se burla de otros géneros, series o convenciones de anime, utilizando el humor y la exageración para crear comedia.'),
('Policía', 'Centrado en las actividades de las fuerzas del orden, como detectives y oficiales de policía, que resuelven crímenes o luchan contra el crimen organizado.'),
('Psicológico', 'Explora las complejidades de la mente humana y los dilemas emocionales de los personajes, a menudo presentando situaciones tensas y oscuras que desafían el estado mental de los protagonistas.'),
('Recuentos De La Vida', 'Historias que representan las experiencias y eventos cotidianos de los personajes, centrándose en situaciones realistas y el desarrollo personal.'),
('Romance', 'Se enfoca en las relaciones amorosas entre los personajes, explorando los altibajos del amor, el desarrollo de las relaciones y las emociones involucradas.'),
('Samurai', 'Género que sigue las vidas de los samuráis en el Japón feudal, explorando sus códigos de honor, luchas personales y batallas.'),
('Seinen', 'Género dirigido a un público masculino adulto, que presenta temas más complejos y maduros que los de su contraparte Shounen, como la política, la violencia o la psicología.'),
('Shoujo', 'Género dirigido principalmente a chicas jóvenes, a menudo centrado en el romance, la amistad y el crecimiento emocional de los personajes femeninos.'),
('Shounen', 'Género dirigido a chicos jóvenes, centrado en la acción, la aventura y la superación personal, con protagonistas que enfrentan desafíos y buscan hacerse más fuertes.'),
('Sobrenatural', 'Historias en las que ocurren eventos o fenómenos que desafían las leyes de la naturaleza, como fantasmas, espíritus o poderes no explicables por la ciencia.'),
('Superpoderes', 'Los personajes poseen habilidades extraordinarias que los distinguen de los humanos comunes, ya sea a través de la ciencia, la magia o el destino.'),
('Suspenso', 'Género que crea tensión y anticipación en el espectador, a menudo con giros inesperados o situaciones que generan ansiedad sobre el destino de los personajes.'),
('Terror', 'Historias diseñadas para asustar o inquietar al espectador, explorando el miedo a lo desconocido, lo sobrenatural o el peligro inminente.'),
('Vampiros', 'Centrado en las criaturas mitológicas conocidas como vampiros, con historias que exploran su vida, sus poderes y su interacción con los humanos.'),
('Yaoi', 'Género que explora las relaciones románticas y sexuales entre hombres, dirigido principalmente a un público femenino.'),
('Yuri', 'Género que explora las relaciones románticas y sexuales entre mujeres, dirigido principalmente a un público femenino.');



INSERT INTO anime(nombre, sinopsis,precuela,secuela,status_emision,tipo_contenido,popularidad,imagen,total_episodios) VALUES
('Arifureta Shokugyou de Sekai Saikyou Season 3', 'Tercera temporada de Arifureta Shokugyou de Sekai Saikyou', 'Arifureta Shokugyou de Sekai Saikyou 2nd Season', 'N/A', 'En emision', 'Anime', 4.6, 'https://www3.animeflv.net/uploads/animes/covers/4083.jpg', 0),
('Maou 2099', 'La metrópolis ciberpunk de Shinjuku, una enorme ciudad-estado adornada con carteles de neón, altísimos rascacielos y la última tecnología punta. Es aquí, en el año 2099 de la Era Fundida, donde el legendario Señor de los Demonios Veltol tiene su segunda venida cinco siglos después. Pero este paisaje no se parece en nada al que conquistó hace tantos años, ya que la fusión de magia e ingeniería ha elevado la civilización a cotas deslumbrantes y sin precedentes. Puede que Veltol haya quedado reducido a una nota histórica a pie de página, pero no te equivoques… ¡este valiente nuevo mundo será suyo!', 'N/A', 'N/A', 'En emision', 'Anime', 4.6, 'https://www3.animeflv.net/uploads/animes/covers/4082.jpg', 0),
('Dragon Ball Daima', 'Debido a una conspiración, Goku y sus amigos se vuelven pequeños. ¿Qué clase de aventura les espera a Goku, al Supremo Kai y a los nuevos personajes Glorio y Panzy en este mundo desconocido, el "Reino de los Demonios"?', 'N/A', 'N/A', 'En emision', 'Anime', 4.3, 'https://www3.animeflv.net/uploads/animes/covers/4081.jpg', 0),
('Yarinaoshi Reijou wa Ryuutei Heika wo Kouryakuchuu', 'Jill se escapa de la cárcel la noche antes de ser ejecutada por su prometido, el príncipe heredero Gerald. Es alcanzada por una flecha mientras escapa, pero en lugar de morir, es transportada seis años al pasado, a la noche en que ella y Gerald se conocieron. Desesperada por alterar el destino, se declara al primer hombre que ve, Hadis Teos Rave, su enemigo en el futuro. Es su última oportunidad de hacerlo bien.', 'N/A', 'N/A', 'En emision', 'Anime', 4.3, 'https://www3.animeflv.net/uploads/animes/covers/4080.jpg', 0),
('Youkai Gakkou no Sensei Hajimemashita!', 'Haruaki Abe está feliz de poder cumplir por fin su sueño de convertirse en profesor. Esa felicidad dura poco cuando llega a la Academia Hyakki y descubre que la escuela está llena de monstruos. ¿Podrá Abe superar su cobardía y controlar a sus alumnos sobrenaturales? Únete al tímido profesor y a su estrafalaria clase en una historia de travesuras macabras y educación paranormal.', 'N/A', 'N/A', 'En emision', 'Anime', 3.9, 'https://www3.animeflv.net/uploads/animes/covers/4079.jpg', 0),
('Hoshifuru Oukoku no Nina', 'Nina jamás habría imaginado que se convertiría en la protagonista de un engaño real. Sus comienzos en la vida fueron duros siendo huérfana en la ciudad de Fortna, pero cuando el príncipe Azure se da cuenta de que sus penetrantes ojos azules son idénticos a los de la difunta princesa Alisha, ordena que ella ocupe su lugar y se convierta en la princesa de Fortna. A pesar de su incierto destino, se alegra de saber que por fin alguien la necesita.', 'N/A', 'N/A', 'En emision', 'Anime', 4.0, 'https://www3.animeflv.net/uploads/animes/covers/4073.jpg', 0),
('Natsume Yuujinchou Shichi', 'Séptima temporada de Natsume Yuujinchou', 'N/A', 'N/A', 'En emision', 'Anime', 4.4, 'https://www3.animeflv.net/uploads/animes/covers/4076.jpg', 0),
('Love Live! Superstar!! 3rd Season', 'Tercera temporada de Love Live! Superstar!!', 'N/A', 'N/A', 'En emision', 'Anime', 4.0, 'https://www3.animeflv.net/uploads/animes/covers/4078.jpg', 0),
('Seirei Gensouki 2', 'Segunda temporada de Seirei Gensouki', 'Seirei Gensouki', 'N/A', 'En emision', 'Anime', 4.5, 'https://www3.animeflv.net/uploads/animes/covers/4077.jpg', 0),
('Raise wa Tanin ga Ii', 'Renji Somei es el abuelo de Yoshino Somei y líder del Grupo Somei, el mayor grupo yakuza de Kansai. Cuando el hombre prepara todo para casarla con Kirishima Miyama, Yoshino tiene que trasladarse a la mansión de los Miyama, el mayor grupo de yakuza de la región de Kanto. Kirishima da la bienvenida a Yoshino, pues es un joven agradable, guapo y amable del que nadie sospecharía jamás que es de una familia de yakuza. Esto tranquiliza a Yoshino, quien estaba nerviosa por tener que mudarse a un lugar desconocido. Es entonces cuando cierto acontecimiento hace que Yoshino presencie cómo es realmente Kirishima.', 'N/A', 'N/A', 'En emision', 'Anime', 4.3, 'https://www3.animeflv.net/uploads/animes/covers/4074.jpg', 0),
('Haigakura', 'La historia tiene lugar en Senkai. El otro mundo sagrado donde viven los inmortales y los humanos está al borde del colapso. Ichiyou, un poeta guerrero que utiliza una técnica llamada Kessai para capturar a los dioses esparcidos por todo el mundo, y su seguidor, Tenkou, buscan a los cuatro dioses malvados que tienen la clave del colapso de Senkai.', 'N/A', 'N/A', 'En emision', 'Anime', 2.4, 'https://www3.animeflv.net/uploads/animes/covers/4075.jpg', 0),
('Puniru wa Kawaii Slime', 'Hace siete años que Kotaro creó un slime que sorprendentemente cobró vida. La llamó Puniru y desde entonces son grandes amigos. Los dos han crecido mucho a lo largo de los años y Puniru es ahora una chica guapa y despreocupada que puede adoptar otras formas. Sin embargo, debido a su carácter espontáneo y sus travesuras alocadas, ¡el pobre Kotaro no tiene ni un momento de paz!', 'N/A', 'N/A', 'En emision', 'Anime', 3.2, 'https://www3.animeflv.net/uploads/animes/covers/4072.jpg', 0),
('Tsuma, Shougakusei ni Naru.', 'Keisuke Niijima vive afligido desde que su mujer, Takae, falleció diez años atrás. Pero cuando una niña le visita diciendo ser Takae reencarnada, Keisuke y su hija Mai viven un reencuentro milagroso. A medida que la niña revela detalles íntimos que solo ellos podrían conocer, la familia Niijima comienza a sanar lentamente, redescubriendo el amor y la calidez de la forma más inesperada.', 'N/A', 'N/A', 'En emision', 'Anime', 4.1, 'https://www3.animeflv.net/uploads/animes/covers/4071.jpg', 0),
('Ranma ½ (2024)', 'Ranma Saotome es un artista marcial de primera clase y un prodigio de la escuela Saotome de artes marciales “Todo vale”. Durante su entrenamiento en China, él y su padre se encuentran con un terrible destino cuando caen accidentalmente en un manantial maldito. Ahora, Ranma tiene la maldición de convertirse en una chica cuando le salpica agua fría, y sólo el agua caliente puede volver a convertirlo en un chico.

Las cosas se complican aún más cuando Ranma descubre que su padre ha dispuesto que se case con una de las tres hijas de Soun Tendo para asegurar el futuro del dojo Tendo. Aunque Soun se entera de la situación de Ranma, sigue decidido a seguir adelante con el compromiso, y elige a su hija menor Akane, que resulta ser una experta artista marcial y tiene fama de odiar a los hombres.', 'N/A', 'N/A', 'En emision', 'Anime', 4.5, 'https://www3.animeflv.net/uploads/animes/covers/4068.jpg', 0),
('Ao no Exorcist: Yuki no Hate-hen', 'Cuarta temporada de Ao no Exorcist', 'Ao no Exorcist: Shimane Illuminati-hen', 'N/A', 'En emision', 'Anime', 4.4, 'https://www3.animeflv.net/uploads/animes/covers/4067.jpg', 0),
('Chi.: Chikyuu no Undou ni Tsuite', 'El escenario es la Europa del siglo XV. Es una época en la que las ideas heréticas se queman en la hoguera. El protagonista, Raphau, un niño prodigio, debe especializarse en teología, la asignatura más importante de la época, en la universidad, donde piensa saltarse un curso. Sin embargo, un día aparece en la puerta de Raphau un hombre misterioso que estudia cierta “verdad” en medio del pensamiento herético.', 'N/A', 'N/A', 'En emision', 'Anime', 4.3, 'https://www3.animeflv.net/uploads/animes/covers/4066.jpg', 0),
('Kimi wa Meido-sama.', 'Hitoyoshi es un estudiante de preparatoria que vive solo y al que un día tocan a su puerta. Al abrirla, se encuentra con una extraña chica que se ofrece para ser su criada. Tiene un precioso pelo negro, unos modales elegantes y... un oscuro pasado como asesina. Pero, a pesar de su mortífero pasado y de su falta de habilidades domésticas, Hitoyoshi la acepta. A medida que se adapta a su nueva vida, comienza a experimentar emociones que nunca antes había sentido...', 'N/A', 'N/A', 'En emision', 'Anime', 4.5, 'https://www3.animeflv.net/uploads/animes/covers/4070.jpg', 0),
('Party kara Tsuihou sareta Sono Chiyushi, Jitsu wa Saikyou ni Tsuki', 'Han pasado dos siglos desde que un héroe derrotó al malvado Jaryu y salvó al mundo. En una de las muchas ciudades mazmorra, Raust, un sanador marginado y expulsado de su grupo por ser demasiado débil, lucha por encontrar su lugar. Estando desesperado, conoce a la artista marcial Narsena, quien le invita a formar equipo. Ambos empiezan así desde cero con fuerzas renovadas y aspirando a llegar a lo más alto.', 'N/A', 'N/A', 'En emision', 'Anime', 4.2, 'https://www3.animeflv.net/uploads/animes/covers/4069.jpg', 0),
('Goukon ni Ittara Onna ga Inakatta Hanashi', 'Tokiwa, un estudiante universitario, es invitado a una fiesta por su compañera de clase Suo, y puede traer a otros dos amigos, ya que Suo estará acompañada por dos de sus compañeras de trabajo. Asi que trae a sus amigos Asagi y Hagi para que conozcan a Suo y a las otras dos chicas. Pero cuando llegan al punto de encuentro, se encuentran confundidos y nerviosos al ser recibidos no por tres lindas mujeres, sino por tres mujeres vestidas como hombres deslumbrantemente guapos.', 'N/A', 'N/A', 'En emision', 'Anime', 3.7, 'https://www3.animeflv.net/uploads/animes/covers/4065.jpg', 0),
('Kabushikigaisha Magi-Lumière', 'En esta fascinante historia, Kana Sakuragi, la estudiante universitaria en apuros con la búsqueda de trabajo, se ve inesperadamente inmersa en el intrigante mundo de las chicas mágicas. La empresa emergente que la recluta no solo le ofrece empleo, sino que la introduce en un nuevo universo lleno de misterios y desafíos.

Kaii, esa amenaza natural que solo las chicas mágicas pueden combatir, se convierte en el foco de la labor de Kana. A medida que se sumerge en este nuevo trabajo, descubre sus propios poderes mágicos y despierta habilidades que nunca imaginó poseer. La narrativa se desarrolla entre la lucha contra los Kaii y los intrincados aspectos de la vida cotidiana de una chica mágica.', 'N/A', 'N/A', 'En emision', 'Anime', 4.3, 'https://www3.animeflv.net/uploads/animes/covers/4061.jpg', 0),
('The iDOLM@STER Shiny Colors 2nd Season', 'Segunda temporada de The iDOLM@STER Shiny Colors', 'The iDOLM@STER Shiny Colors', 'N/A', 'En emision', 'Anime', 2.5, 'https://www3.animeflv.net/uploads/animes/covers/4063.jpg', 0),
('Sword Art Online Alternative: Gun Gale Online II', 'Segunda temporada de Sword Art Online Alternative: Gun Gale Online', 'Sword Art Online Alternative: Gun Gale Online', 'N/A', 'En emision', 'Anime', 4.5, 'https://www3.animeflv.net/uploads/animes/covers/4062.jpg', 0),
('Mahoutsukai ni Narenakatta Onnanoko no Hanashi', 'En la Academia de Magia Rettoran, dos peculiares amigas comparten un sueño: convertirse en magas. Kurumi es una chica normal un poco ingenua, mientras que Yuzu es la distinguida hija de una noble familia de magos. Necesitan entrar en una clase especial de entrenamiento para magos, ¡pero suspenden el examen de acceso! Toda esperanza parece perdida hasta que llega la misteriosa profesora Minami Suzuki y su suerte cambia por completo.', 'N/A', 'N/A', 'En emision', 'Anime', 3.4, 'https://www3.animeflv.net/uploads/animes/covers/4064.jpg', 0),
('Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka V', 'Quinta temporada de Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka', 'Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV', 'N/A', 'En emision', 'Anime', 4.6, 'https://www3.animeflv.net/uploads/animes/covers/4054.jpg', 0)



INSERT INTO se_clasifica_en(id_genero, id_anime) VALUES
(1, 1),
(3, 1),
(14, 1),
(15, 1),
(1, 2),
(5, 2),
(14, 2),
(1, 3),
(2, 3),
(3, 3),
(6, 3),
(14, 3),
(33, 3),
(35, 3),
(6, 4),
(14, 4),
(29, 4),
(32, 4),
(6, 5),
(12, 5),
(33, 5),
(14, 6),
(18, 6),
(29, 6),
(32, 7),
(34, 7),
(12, 8),
(24, 8),
(1, 9),
(3, 9),
(14, 9),
(15, 9),
(29, 9),
(29, 10),
(31, 10),
(14, 11),
(18, 11),
(6, 12),
(12, 12),
(29, 12),
(6, 13),
(29, 13),
(31, 13),
(1, 14),
(2, 14),
(6, 14),
(11, 14),
(12, 14),
(29, 14),
(1, 15),
(12, 15),
(33, 15),
(34, 15),
(10, 16),
(31, 16),
(6, 17),
(1, 18),
(3, 18),
(14, 18),
(6, 19),
(29, 19),
(1, 20),
(6, 20),
(14, 20),
(33, 20),
(24, 21),
(1, 22),
(19, 22),
(22, 22),
(10, 23),
(12, 23),
(14, 23),
(1, 24),
(3, 24),
(14, 24)