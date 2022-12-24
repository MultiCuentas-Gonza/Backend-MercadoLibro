--PAIS
INSERT INTO pais (nombre)
VALUES  ('Argentina'),
        ('Chile'),
        ('Uruguay'),
        ('Colombia'),
        ('Paraguay'),
        ('Brasil'),
        ('Bolivia'),
        ('Bahamas'),
        ('Costa Rica'),
        ('Cuba'),
        ('Republica Dominica'),
        ('Ecuador'),
        ('El Salvador'),
        ('Granada'),
        ('Mexico');

--PROVINCIA
INSERT INTO provincia (nombre, id_pais)
VALUES  ('Entre Rios', 1),
        ('Buenos Aires', 1),
        ('Puente Alto', 2),
        ('Maipú', 2),
        ('Santiago', 2),
        ('Cordoba', 1),
        ('Rosario', 1),
        ('Salta', 1),
        ('Santa Fe', 1),
        ('Cuba', 1),
        ('Montevideo', 3),
        ('Salto', 3),
        ('Tacuarembó', 3),
        ('Flores', 3),
        ('Florida', 3);

--CIUDAD
INSERT INTO ciudad (cp, nombre, id_provincia)
VALUES  (2820, 'Gualeguaychuu', 1),
        (3260, 'Concepcion del Uruguay', 1),
        (3100, 'Parana', 1),
        (3174, 'Rosario del Tala', 1),
        (2840, 'Gualeguay', 1),
        (4312, 'Mar del plata', 3),
        (1233, 'Bahia blanca', 3),
        (1234, 'Tigre', 3),
        (3105, 'Diamante', 3),
        (3280, 'Colon', 1),
        (3206, 'La Paz', 1),
        (3185, 'Federacion', 1),
        (2139, 'Villaguay', 1),
        (2421, 'Nogoya', 1),
        (2881,'San salvador', 1);

--IDIOMA
INSERT INTO idioma (nombre)
VALUES  ('Español'),
        ('Ingles'),
        ('Japones'),
        ('Chino'),
        ('Portugues'),
        ('Frances'),
        ('Arabe'),
        ('Hindi'),
        ('Ruso'),
        ('Urdu'),
        ('Indonesio'),
        ('Aleman'),
        ('Marati'),
        ('Turco'),
        ('Tamil');

--AUTOR
INSERT INTO autor (nombre)
VALUES  ('J.K Rowling'),
        ('George R.R Martin'),
        ('Dolores Redondo'),
        ('-'),
        ('Alfonso Ruiz de Aguirre'),
        ('--'),
        ('Maria Becerra'),
        ('John Gwynne'),
        ('Sam Lloyd'),
        ('Stephen King'),
        ('Alaitz Leceaga'),
        ('George R.R. Martin'),
        ('Jennifer L. Armentrout'),
        ('Brandon Sanderson'),
        ('Juan Gómez-Jurado'),
        ('Roberto Martínez Guzmán'),
        ('Cristian Perfumo'),
        ('Carlos Ruiz Zafón'),
        ('Arturo Pérez-Reverte'),
        ('Santiago Posteguillo'),
        ('Fernando Gamboa'),
        ('Marta Martín Girón'),
        ('John Ronald Reuel Tolkien'),
        ('Paul Duncan'),
        ('Charles River Editors'),
        ('MARK MANSON'),
        ('Nova'),
        ('Eloy Moreno'),
        ('Roberto Martínez Guzmán '),
        ('-Roberto Martínez Guzmán-'),
        ('---'),
        ('Lucio'),
        ('["Lucio"]'),
        ('Asdasdasdasd'),
        ('Carmen Mola');

--TEMA
INSERT INTO tema (nombre, url_imagen)
VALUES
        ('Fantasia', 'https://cdn.pixabay.com/photo/2016/04/04/20/34/treehouse-1308108_960_720.jpg'),
        ('Ciencia ficcion', 'https://cdn.pixabay.com/photo/2018/03/13/15/57/steampunk-3222894_960_720.jpg'),
        ('Suspenso', 'https://cdn.pixabay.com/photo/2019/09/22/16/50/tunnel-4496526_960_720.jpg'),
        ('Thriller', ' https://cdn.pixabay.com/photo/2014/07/24/21/35/mortality-401222_960_720.jpg'),
        ('Ficcion', 'https://cdn.pixabay.com/photo/2016/09/18/08/45/science-fiction-1677542_960_720.jpg'),
        ('Misterio', 'https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg'),
        ('Comedia', 'https://cdn.pixabay.com/photo/2017/02/24/07/45/woman-2094172_960_720.jpg');

--EDITORIAL
INSERT INTO editorial (nombre)
VALUES  ('Salamandra Infantil y Juvenil'),
        ('Salamandra'),
        ('Vintage Espanol'),
        ('Ediciones Destino'),
        ('Independently'),
        ('Independently published'),
        ('Negrasa'),
        ('San Petesburgo'),
        ('Minotauro'),
        ('DEBOLSILLO'),
        ('PLAZA & JANES'),
        ('B de Bolsillo'),
        ('Puck'),
        ('Nova'),
        ('B'),
        ('ALFAGUARA'),
        ('Booket'),
        ('Buka'),
        ('Taschen'),
        ('HARPERCOLLINS'),
        ('Nube de Tinta');

--LIBRO
INSERT INTO libro (isbn, url_imagen, titulo, fecha_edicion, fecha_ingreso,
                    precio, stock, descripcion, id_editorial, id_idioma)
VALUES  ('8418174072', 'https://m.media-amazon.com/images/I/91NW7CBaVwL.jpg', 'Harry Potter y la piedra filosofal', '12/10/2020',  '24/12/2022', 6500.00,  6,  'Sumérgete en esta magnífica edición especial de Harry Potter y la piedra filosofal, obra del prestigioso estudio MinaLima, responsable del diseño gráfico de las películas de la saga «Harry Potter» y de Animales fantásticos. <br/> En esta edición especial de Harry Potter y la piedra filosofal, el texto completo e íntegro de la obra original de J.K. Rowling va acompañado por hermosas ilustraciones a todo color en casi todas las páginas, un diseño excelente y varias sorpresas interactivas de ingeniería en papel, obra del célebre estudio MinaLima. Una nueva forma de descubrir la carta de admisión de Harry a Hogwarts, la entrada mágica al callejón Diagon, el suntuoso festín en el Gran Salón de Hogwarts...', 1, 1),
        ('8478885196','https://m.media-amazon.com/images/I/81k9yx9N5+L.jpg','Harry Potter y el prisionero de Azkaban (Harry Potter 3)', '20/02/2000', '24/12/2022', 5399.00,3, 'Por la cicatriz que lleva en la frente, sabemos que Harry Potter no es un niño como los demás, sino el héroe que venció a lord Voldemort, el más temible y maligno mago de todos los tiempos y culpable de la muerte de los padres de Harry. Desde entonces, Harry no tiene más remedio que vivir con sus pesados tíos y su insoportable primo Dudley, todos ellos muggles, o sea, personas no magas, que desprecian a su sobrino debido a sus poderes.',2, 1),
        ('1644736136','https://m.media-amazon.com/images/I/91RFD8825LL.jpg','Juego de Tronos Canción de Hielo y Fuego','21/07/2022', '24/12/2022',8150.00,2,'En el legendario mundo de los Siete Reinos, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas... Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo.De la saga que inspiró la filmación de la aclamada serie televisiva de HBO: Game of Thrones.En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector.',3,1),
        ('8423362477','https://m.media-amazon.com/images/I/71NtjKt82VL.jpg','Esperando al diluvio: 1591 (Áncora & Delfín)','01/11/2022', '24/12/2022',2599.00,6,'Entre los años 1968 y 1969, el asesino al que la prensa bautizaría como John Biblia mató a tres mujeres en Glasgow. Nunca fue identificado y el caso todavía sigue abierto hoy en día. En esta novela, a principios de los años ochenta, el investigador de policía escocés Noah Scott Sherrington logra llegar hasta John Biblia, pero un fallo en su corazón en el último momento le impide arrestarlo. A pesar de su frágil estado de salud, y contra los consejos médicos y la negativa de sus superiores para que continúe con la persecución del asesino en serie, Noah sigue una corazonada que lo llevará hasta el Bilbao de 1983. Justo unos días antes de que un verdadero diluvio arrase la ciudad.',4,1),
        ('8497930010', 'https://m.media-amazon.com/images/P/B00CP8ZNUC.01._SCLZZZZZZZ_SX500_.jpg', 'La larga marcha', '01/07/2017', '24/12/2022', 3100.00, 49, 'Una inquietante novela futurista donde la realidad supera a la fantasía más terrorífica. El escenario: una sociedad ultraconservadora que ha llevado al paroxismo sus rasgos más perversos, dominada por un estado policial. El acontecimiento: la más extraordinaria competición deportiva, una agotadora marcha a pie donde un resbalón puede ser el último. Los competidores: cien adolescentes elegidos por sorteo decididos a pasar sobre los cadáveres de sus compañeros para llegar a la meta. El premio: fama y fortuna para el ganador, es decir, para el único superviviente... Solo uno será el triunfador. Los 99 restantes morirán.', 10, 1),
        ('8466356894', 'https://m.media-amazon.com/images/I/51fW55S01fL._SX324_BO1,204,203,200_.jpg', 'Fuego y Sangre', '04/03/2021', '24/12/2022', 4300.00, 49, 'La historia de los Targaryen cobra vida en esta obra magistral en la se que inspira la serie de HBO La Casa del Dragón, la precuela de Juego de Tronos. Siglos antes de que tuvieran lugar los acontecimientos que se relatan en «Canción de hielo y fuego», la casa Targaryen, la única dinastía de señores dragón que sobrevivió a la Maldición de Valyria, se asentó en la isla de Rocadragón. Aquí tenemos el primero de los dos volúmenes en el que el autor de Juego de tronos nos cuenta, con todo lujo de detalles, la historia de tan fascinante familia: empezando por Aegon I Targaryen, creador del icónico Trono de Hierro, y seguido por el resto de las generaciones de Targaryens que lucharon con fiereza por conservar el poder, y el trono, hasta la llegada de la guerra civil que casi acaba con ellos.', 10, 1),
        ('8420456020', 'https://i.ibb.co/L9nMcSM/8420456020.jpg', 'Las madres', '27/08/2022', '24/12/2022', 6000.00, 41, '«¿A qué suena Las madres? Un poco a Stephen King, un poco a Don Winslow y un poco a David Simon».Luis Alemany, El MundoLa inspectora Elena Blanco atraviesa el depósito de la Grúa Municipal Mediodía II de Madrid hasta llegar a una vieja furgoneta que expele un olor putrefacto. Dentro está el cadáver de un hombre con un burdo costurón que asciende del pubis al abdomen. Los primeros resultados de la autopsia aclaran que a este toxicómano le arrancaron algunos órganos y en su lugar colocaron un feto. Los análisis de ADN revelan que se trata de su hijo biológico. A los pocos días, aparece en la zona portuaria de A Coruña el cuerpo de un asesor fiscal que ha sido asesinado con el mismo modus operandi. ¿Qué relación existe entre ambas víctimas? ¿Y dónde están las madres de los bebés? Se abre así la investigación del nuevo y perturbador caso de la Brigada de Análisis de Casos. Mientras la relación entre Elena y Zárate se hace cada vez más complicada, todos los indicios los acercarán a una misteriosa organización a la que nadie parece poder acercarse sin morir.', 16, 1),
        ('8417347003', 'https://m.media-amazon.com/images/I/51aOjXZ-PCL._SX325_BO1,204,203,200_.jpg', 'Juramentada', '05/04/2018', '24/12/2022', 3150.00, 42, 'La humanidad se enfrenta a una nueva Desolación con el regreso de los Portadores del Vacío, un enemigo tan grande en número como en sed de venganza. La victoria fugaz de los ejércitos alezi de Dalinar Kholin ha tenido consecuencias: el enemigo parshendi ha convocado la violenta tormenta eterna, que arrasa el mundo y hace que los hasta ahora pacíficos parshmenios descubran con horror que llevan un milenio esclavizados por los humanos. Al mismo tiempo, en una desesperada huida para alertar a su familia de la amenaza, Kaladin se pregunta si la repentina ira de los parshmenios está justificada.', 14, 1),
        ('8466672478', 'https://m.media-amazon.com/images/I/71Pj9HPkCFL.jpg', 'Esperando al diluvio: 1591', '18/10/2022', '24/12/2022', 4497.00, 32, '«Después de todo lo que ha pasado con la trilogía Reina Roja, sólo había una forma de dar las gracias a mis lectores: intentar escribir una novela todavía mejor.» Juan Gómez-Jurado. Esta es la historia de tres mujeres que lo han perdido todo. Incluso el miedo. Por eso son tan peligrosas. Esta es la historia de una venganza imposible, sin ninguna posibilidad de éxito. Esta es la historia de tres mujeres que se atreven a hacer lo que los demás sólo nos atrevemos a imaginar. Algo muy poderoso está a punto de ocurrir. Y nada volverá a ser igual. SIEMPRE GANAN LOS MISMOS. ES HORA DE CAMBIAR LAS REGLAS.', 15, 1),
        ('979-8843396152', 'https://m.media-amazon.com/images/I/6167QOx5VuL.jpg', 'La bilogía del glaciar', '05/08/2022', '12/12/2022', 4999.00, 50, 'Esta bilogía incluye las novelas policiales Los crímenes del glaciar y El coleccionista de flechas (ganadora del Premio Literario Amazon Storyteller). Acompaña a la criminalista Laura Badía a resolver crímenes en una de las regiones más remotas del mundo. No te olvides el abrigo, porque hace mucho frío.', 6, 1),
        ('8445013955', 'https://m.media-amazon.com/images/I/81DjOU3MIvL.jpg', 'El Señor de los Anillos 1', '31/08/2022', '12/12/2022', 8999.00, 47, 'En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en la Grieta del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal.', 18, 1),
        ('8466671781', 'https://m.media-amazon.com/images/I/719yqLXOmyL.jpg', 'Roma soy yo', '05/04/2022', '12/12/2022', 7299.00, 45, 'Roma, año 77 a.C. El cruel senador Dolabela va a ser juzgado por corrupción, pero ha contratado a los mejores abogados, ha comprado al jurado y, además, es conocido por usar la violencia contra todos los que se enfrentan a él. Nadie se atreve a ser el fiscal, hasta que de pronto, contra todo pronóstico, un joven patricio de tan solo veintitrés años acepta llevar la acusación, defender al pueblo de Roma y desafiar el poder de las élites. El nombre del desconocido abogado es Cayo Julio César.', 17, 1),
        ('8417854363', 'https://m.media-amazon.com/images/I/51A65jIVuvL._SX315_BO1,204,203,200_.jpg', 'Un reino de carne y fuego', '08/02/2022', '12/12/2022', 2500.00, 49, 'Todo lo que ha creído Poppy es mentira, incluido el hombre del que se estaba enamorando. Rodeada de pronto por gente que la ve como un símbolo de un reino monstruoso, apenas sabe quién es sin el velo de la Doncella. Pero lo que sí sabe es que nada es tan peligroso para ella como él. El Señor Oscuro. El príncipe de Atlantia. A Casteel Da`Neer se lo conoce por muchos nombres y muchas caras. Sus mentiras son tan seductoras como sus manos. Sus verdades, tan sensuales como su mordisco. Poppy sabe que no debe confiar en él. Y Casteel la necesita viva para lograr sus objetivos. Pero él también es la única vía para que ella consiga lo que quiere: encontrar a su hermano Ian. El malestar crece en Atlantia mientras esperan el regreso de su príncipe. Los rumores de guerra se están extendiendo, y Poppy está en el centro de todo ello. El rey quiere utilizarla para enviar un mensaje. Los Descendentes quieren verla muerta. Los wolven se están volviendo más impredecibles. Hay secretos oscuros en juego, secretos llenos de los pecados manchados de sangre de dos reinos que harían cualquier cosa por mantener la verdad oculta.', 13, 1),
        ('8466349294', 'https://m.media-amazon.com/images/I/A1vcxOPBt7L.jpg', 'El bosque de la memoria', '01/03/2020', '12/12/2022', 2500.00, 50, 'Un thriller atmosférico e inquietante sobre la parte más oscura del alma humana. En el día más importante de su aún breve vida, Elissa es secuestrada. Horas después, despierta en un lugar que no conoce, atada a un poste metálico. Mientras su raptor la apabulla con extrañas preguntas, la situación de la niña parece complicarse... hasta que Elijah, de diez años, la encuentra. Elijah sabe que debería contar lo que ha visto, pero su instinto le advierte de que, si lo hace, perderá todo lo que tiene. Al fin y al cabo, Elissa no es la primera niña a la que descubre en el Bosque de la Memoria. Elissa sabe que debe actuar. Solamente convenciendo a Elijah para que la ayude tendrá alguna oportunidad de sobrevivir. Pero intentar manipularlo es peligroso, pues es mucho más listo de lo que parece. Empieza entones un juego mortal de engaño y traición llevará al límite a todos quienes entren en él. Perder es impensable. Y para ganar hay que actuar de forma implacable.', 10, 1),
        ('8491392289', 'https://m.media-amazon.com/images/I/7116adcs+HL.jpg', 'EL SUTIL ARTE DE QUE (CASI TODO) TE IMPORTE UNA MIERDA: 2805', '04/04/2018', '12/12/2022', 1250.00, 26, 'En esta guía de autoayuda, el bestseller internacional que está definiendo a toda una generación, el bloguero superestrella Mark Manson nos demuestra que la clave para ser personas más seguras y felices es manejar de mejor forma la adversidad. ¡A la mierda con la positividad! Durante los últimos años, Mark Manson -en su popular blog- se ha afanado en corregir nuestras delirantes expectativas sobre nosotros mismos y el mundo. Ahora nos ofrece su toda su intrépida sabiduría en este libro pionero. Manson nos recuerda que los seres humanos somos falibles y limitados: no todos podemos ser extraordinarios: hay ganadores y perdedores en la sociedad, y esto no siempre es justo o es tu culpa. Manson nos aconseja que reconozcamos nuestras limitaciones y las aceptemos. Esto es, según él, el verdadero origen del empoderamiento. Una vez que abrazamos nuestros temores, faltas e incertidumbres, una vez que dejamos de huir y evadir y empezamos a confrontar las verdades dolorosas, podemos comenzar a encontrar el valor, la perseverancia, la honestidad, la responsabilidad, la curiosidad y el perdón que buscamos. Manson nos ofrece un momento de urgente sinceridad, ese cuando alguien te sujeta por los hombros y te mira a los ojos para tener una charla honesta, pero llena de historias entretenidas y de humor profano, despiadado. Este manifiesto es una refrescante bofetada en nuestra cara, para que podamos empezar a llevar vidas más satisfechas y con los pies en la tierra.', 20, 1),
        ('1644735814', 'https://m.media-amazon.com/images/I/4138Sh9vD9L._SX323_BO1,204,203,200_.jpg', 'Choque de Reyes', '21/06/2021', '12/12/2022', 4800.00, 44, '“Ahora hay más reyes en el reino que ratas en un castillo”, afirma uno de los personajes de Choque de reyes. Después de la sospechosa muerte de Robert Baratheon, el monarca de los Siete Reinos, su hijo Joffrey ha sido impuesto por la fuerza, aunque “quienes realmente gobiernan son su madre, un eunuco y un enano”, como dice la voz del pueblo. Cuatro nobles se proclaman, a la vez, reyes legítimos, y las tierras de Poniente se estremecen entre guerras y traiciones. Y todo este horror se encuentra presidido por la más ominosa de las señales: un inmenso cometa color sangre suspendido en el cielo.', 3, 1),
        ('8417854312', 'https://m.media-amazon.com/images/I/51hCOUu+PML._SX398_BO1,204,203,200_.jpg', 'De sangre y cenizas', '05/10/2021', '12/12/2022', 2500.00, 25, 'Elegida desde su nacimiento para dar comienzo a una nueva era, la vida de Poppy nunca le ha pertenecido. La vida de la Doncella es solitaria. Jamás la tocarán. Jamás la mirarán. Jamás le hablarán. Jamás sentirá placer. Mientras espera el día de su Ascensión, preferiría estar con los guardias luchando contra el mal que se llevó a su familia que preparándose para que los dioses la encuentren lo bastante digna. Pero la elección nunca ha sido suya. El futuro del reino entero recae sobre los hombros de Poppy, algo que ni siquiera está demasiado segura de querer para ella. Porque la Doncella tiene corazón. Y alma. Y deseo. Y cuando Hawke, un guardia de ojos dorados que ha jurado garantizar su Ascensión, entra en su vida, el destino y el deber se entremezclan con el deseo y la necesidad. Él incita su ira, hace que se cuestione todo aquello en lo que cree y la tienta con lo prohibido. Abandonado por los dioses y temido por los mortales, un reino caído está resurgiendo, decidido a recuperar lo que cree que es suyo mediante la violencia y la venganza. Y a medida que la sombra de los malditos se acerca, la línea entre lo prohibido y lo correcto se difumina. Poppy no solo está a punto de perder el corazón y ser considerada indigna por los dioses, sino que también está a punto de perder la vida cuando los ensangrentados hilos que mantienen unido su mundo empiezan a deshilacharse.', 13, 1),
        ('979-8761133129', 'https://m.media-amazon.com/images/I/51mCdDGCC5L.jpg', 'LA ENVIDIA DE LOS MEDIOCRES', '11/11/2021', '12/12/2022', 7499.00, 49, '«Nunca abras una caja de Pandora si no tienes armas con las que combatir los demonios que encierra dentro». Un encargo de un amigo, una muerte accidental y una pequeña villa en la montaña lucense son el punto de partida de un caso que no solo removerá los cimientos de la tranquila sociedad rural, sino que acabará por poner a prueba los límites de la conciencia humana.', 6, 1),
        ('8445012355', 'https://m.media-amazon.com/images/I/818QMDv65zL.jpg', 'La sombra de los dioses', '01/10/2022', '12/12/2022', 2300.00, 23, 'Ha pasado un siglo desde que los dioses lucharon y se extinguieron. Ahora solo quedan sus huesos, que prometen un gran poder a aquellos lo suficientemente valientes como para buscarlos.Mientras los susurros de guerra resuenan en la tierra de Vigrið, el destino sigue los pasos de tres guerreros: una cazadora en una búsqueda peligrosa, una mujer noble que busca la fama en la batalla y un esclavo que busca venganza entre los mercenarios conocidos como los Hermanos de Sangre.Los tres darán forma al destino del mundo, ya que una vez más cae bajo la sombra de los dioses.', 9, 1),
        ('979-8359563031', 'https://m.media-amazon.com/images/I/71lPkc8iaTL.jpg', 'CADA NIÑA QUE MURIÓ', '2710/2022', '12/12/2022', 5999.00, 50, 'El relato de Ciudad Negra comienza varios meses después del regreso a casa de Ulises, Cassandra, y el profesor Castillo, tras la aventura narrada en La última cripta. Citados con urgencia por este último, les explica angustiado que su hija Valeria ha desaparecido misteriosamente en el territorio más remoto y peligroso de la Tierra. Desesperado, el profesor ha resuelto partir en una precipitada expedición en solitario en su busca, y les ruega a Ulises y a Cassie que le acompañen. Incapaces de convencerle de que recapacite, ni de dejarle ir solo, ambos aceptan a regañadientes ayudar a su viejo amigo en el insensato intento de rescate, y así los tres amigos, una vez más, se embarcarán en una temeraria aventura hacia lo desconocido. Una aventura que no será en absoluto como ellos esperan. Una aventura que les llevará hasta los confines de la cordura. Allá donde la realidad se descose por las costuras de la certeza, y lo impensable pasa a ser lo inevitable. Ni el profesor, ni Cassandra, ni Ulises lo saben aún, pero allá donde se dirigen se encontrarán con una legendaria ciudad que ningún humano ha habitado en miles de años. Una ciudad imposible, que no debería existir. Una ciudad en la que, demasiado tarde, descubrirán que no están solos.', 6, 1),
        ('9788445000656', 'https://m.media-amazon.com/images/I/71qpt1yWfbL.jpg', 'El Hobbit', '18/08/2012', '12/12/2022', 8999.00, 42, 'Smaug parecía profundamente dormido cuando Bilbo espió una vez más desde la entrada. ¡Pero fingía estar dormido! ¡Estaba vigilando la entrada del túnel!... Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón...', 17, 1),
        ('8420461466', 'https://m.media-amazon.com/images/P/B0B59L91CV.01._SCLZZZZZZZ_SX500_.jpg', 'Revolución: Una novela', '04/10/2022', '12/12/2022', 4999.00, 34, 'Ésta es la historia de un hombre, tres mujeres, una revolución y un tesoro. La revolución fue la de México en tiempos de Emiliano Zapata y Francisco Villa. El tesoro fueron quince mil monedas de oro de a veinte pesos de las denominadas maximilianos, robadas en un banco de Ciudad Juárez el 8 de mayo de 1911. El hombre se llamaba Martín Garret Ortiz y era un joven ingeniero de minas español. Todo empezó para él ese mismo día, cuando desde su hotel oyó un primer disparo lejano. Salió a la calle para ver qué ocurría y a partir de ese momento su vida cambió para siempre...', 17, 1)
        
-- INSERT INTO public.usuario(
-- 	nombre, correo, contrasenia)
-- 	VALUES ('Gonzalo Errandonea', 'gonzalo118@gmail.com', '1234');
    
-- INSERT INTO public.usuario(
-- 	nombre, correo, contrasenia, admin)
-- 	VALUES ('Gonzalo Romero', 'gonzaloRomero@hotmail.com', '1234', true);

--ESCRITO_POR
INSERT INTO escrito_por(isbn, id_autor)
VALUES 
        ('8418174072', 1),
        ('8478885196', 1),
        ('1644736136', 2),
        ('8423362477', 3),
        ('8445012355', 8),
        ('8466349294', 9),
        ('8497930010', 10),
        ('8466356894', 13),
        ('8417854312', 14),
        ('8417854363', 14),
        ('1644735814', 13),
        ('8417347003', 15),
        ('8466672478', 16),
        ('979-8761133129', 17),
        ('979-8843396152', 18),
        ('8420461466', 20),
        ('8466671781', 21),
        ('979-8359563031', 23),
        ('8445013955', 24),
        ('9788445000656', 24),
        ('8491392289', 27),
        ('8420456020', 35);

--ASIGNAR_TEMA
INSERT INTO public.asignar_tema(isbn, id_tema)
VALUES
        ('8418174072', 2),
        ('8478885196', 2),
        ('1644736136', 1),
        ('1644736136', 5),
        ('8423362477', 4),
        ('8423362477', 3),
        ('8466349294', 4),
        ('8466349294', 3),
        ('8497930010', 5),
        ('8466356894', 1),
        ('8466356894', 2),
        ('8417854312', 1),
        ('8417854312', 2),
        ('8417854363', 1),
        ('8417854363', 2),
        ('1644735814', 1),
        ('8417347003', 1),
        ('8417347003', 2),
        ('8466672478', 3),
        ('979-8761133129', 4),
        ('979-8761133129', 3),
        ('979-8843396152', 3),
        ('979-8843396152', 4),
        ('8420461466', 2),
        ('8466671781', 2),
        ('979-8359563031', 2),
        ('8445013955', 1),
        ('8445013955', 2),
        ('9788445000656', 1),
        ('9788445000656', 2),
        ('8491392289', 7),
        ('8420456020', 6),
        ('8445012355', 3);

--DIRECCION ENTREGA
-- INSERT INTO direccion_entrega (direccion, "infoAdicional", dni, id_usuario, cp, nombre)
-- VALUES ('Escarguache 84', 'segundo piso', 42464430, 1, 2820, 'Gonzalo Errandonea');


--DIRECCION
INSERT INTO direccion (direccion, "infoAdicional", dni, id_usuario, cp, nombre)
VALUES ('Escarguache 84', 'segundo piso', 42464430, 1, 2820, 'Gonzalo Errandonea');
