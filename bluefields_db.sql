# ************************************************************
# Sequel Pro SQL dump
# Versão 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.32)
# Base de Dados: bluefields_db
# Tempo de Geração: 2021-06-14 18:37:22 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump da tabela form_responses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `form_responses`;

CREATE TABLE `form_responses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `desired_skill` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `form_responses` WRITE;
/*!40000 ALTER TABLE `form_responses` DISABLE KEYS */;

INSERT INTO `form_responses` (`id`, `name`, `email`, `phone`, `desired_skill`, `created_at`, `updated_at`)
VALUES
	(1,'1','1','1','1','2021-06-14 14:17:57','2021-06-14 14:17:57');

/*!40000 ALTER TABLE `form_responses` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela informations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `informations`;

CREATE TABLE `informations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `order` varchar(255) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `informations` WRITE;
/*!40000 ALTER TABLE `informations` DISABLE KEYS */;

INSERT INTO `informations` (`id`, `type`, `content`, `order`, `created_at`, `updated_at`)
VALUES
	(1,'tbb7_startup_logo_url','https://bluefields.s3.us-east-2.amazonaws.com/images/logo.png','1','2021-06-12 05:14:15','2021-06-12 05:14:15'),
	(2,'tbb7_startup_desc','Breve descrição da empresa Bluefields','1','2021-06-12 05:14:34','2021-06-12 05:14:34'),
	(3,'tbb7_startup_name','BLUEFIELDS','1','2021-06-12 05:14:34','2021-06-12 05:14:34'),
	(4,'tbb7_startup_video_url','https://youtu.be/FZtWV5mn8VY','1','2021-06-12 05:14:15','2021-06-12 05:14:15'),
	(5,'tbb7_benefits_title','Quais os benefícios para as Startups selecionadas?','1','2021-06-12 05:21:49','2021-06-12 05:21:49'),
	(6,'tbb7_benefits_desc','Breve descrição do benefício','1','2021-06-12 05:21:49','2021-06-12 05:21:49'),
	(7,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-foguete.png','1','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(8,'tbb7_benefit_desc','Metodologia de aceleração comprovada. Somos parte de uma rede global de aceleradoras, já aceleramos milhares de negócios em todo o mundo e quase 200 no Brasil.','1','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(9,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-daily.png','2','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(10,'tbb7_benefit_desc','Sprints de aceleração gamificados. Serão bootcamps temáticos mensais com planos de ação com\nmuita mão na massa para acelerar sua startup.','2','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(11,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-hand-shake.png','3','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(12,'tbb7_benefit_desc','Startup Partner. Seu time ganha um profissional do time da Bluefields dedicado em colaborar no\ncrescimento do seu negócio através de agilidade e conexões.','3','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(13,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-teaching.png','4','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(14,'tbb7_benefit_desc','Mentoria com experts. Nossa rede de +100 mentores especializados estará à disposição da sua\nstartup.','4','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(15,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-predio.png','5','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(16,'tbb7_benefit_desc','KB framework. Modelo único no mundo de propósito e impacto, com foco nos 4 Ps (purpose, people,\nprofit, planet)','5','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(17,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-con.png','6','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(18,'tbb7_benefit_desc','Escola de CEOs. Mentorias específicas de liderança e cultura para os founders da sua startup.','6','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(19,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-networking.png','7','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(20,'tbb7_benefit_desc','Conexão com grandes empresas. Contato direto com as empresas co-organizadoras do programa\ncom possibilidade real de fazer negócio, como rodar POCs (Provas de Conceito) facilitadas pela\nBluefields.','7','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(21,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-free.png','8','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(22,'tbb7_benefit_desc','Equity-free: não ficamos com nenhum percentual (%) do seu negócio e a aceleração ainda é gratuita\npara a startup.','8','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(23,'tbb7_benefit_icon_url','https://bluefields.s3.us-east-2.amazonaws.com/images/icon-connection.png','9','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(24,'tbb7_benefit_desc','Acesso a capital. Somos próximos das principais redes de investidores-anjos e fundos de Venture\nCapital no Brasil e no mundo, e adoramos recomendar as melhores startups para nossos\ninvestidores.','9','2021-06-12 05:23:24','2021-06-12 05:23:24'),
	(25,'tbb7_main_title','Biodigital Startups acelera e conecta por um Brasil mais inovador','1','2021-06-12 05:29:55','2021-06-12 05:29:55'),
	(26,'tbb7_main_desc','Vamos selecionar até 20 startups para acelerar e crescer junto com algumas das principais empresas dos setores da convergência biodigital (saúde, alimentos e agronegócio).','1','2021-06-12 05:30:54','2021-06-12 05:30:54'),
	(27,'tbb7_section_two_title','Quem está nessa?','1','2021-06-12 05:31:46','2021-06-12 05:31:46'),
	(28,'tbb7_section_two_desc','Neste programa de aceleração e inovação aberta, a Bluefields Aceleradora reúne startups e grandes\nempresas para fomentar os setores da convergência biodigital no Brasil.','1','2021-06-12 05:32:39','2021-06-12 05:32:39'),
	(29,'be_facilitator_title','SEJA UM FACILITADOR','1','2021-06-14 11:30:37','2021-06-14 11:30:37'),
	(30,'be_facilitator_description','Participe do Training of Trainers','1','2021-06-14 11:31:00','2021-06-14 11:31:00'),
	(31,'main_title_h1','Seja um facilitador ou mentor!','1','2021-06-14 11:31:29','2021-06-14 11:31:29'),
	(32,'main_title_h2','Você topa vestir a camisa Bluefields e participar do Sparks (programa de validação) e do The Big\nBaM (programa de aceleração)?','1','2021-06-14 11:31:37','2021-06-14 11:31:37'),
	(33,'be_facilitator_benefits','Participação em nossos Sprints de aceleração na faixa','1','2021-06-14 11:33:44','2021-06-14 11:33:44'),
	(34,'be_facilitator_benefits','Benefícios da nossa rede de parceiros, networking e oportunidades de negócio','2','2021-06-14 11:34:05','2021-06-14 11:34:05'),
	(35,'be_facilitator_benefits','Acesso à metodologias como Design Sprint e conteúdo startupeiro','3','2021-06-14 11:34:24','2021-06-14 11:34:24'),
	(36,'be_facilitator_benefits','Experiência como facilitador de uma startup','4','2021-06-14 11:34:29','2021-06-14 11:34:29'),
	(37,'be_facilitator_benefits','Participação no ecossistema de inovação da Bluefields','5','2021-06-14 11:34:31','2021-06-14 11:34:31'),
	(38,'be_facilitator_benefits','Visibilidade profissional','6','2021-06-14 11:34:36','2021-06-14 11:34:36'),
	(39,'be_facilitator_benefits','Receber $ por isso','7','2021-06-14 11:34:39','2021-06-14 11:34:39'),
	(40,'step_facilitator','Imersão no mundo Blue','1','2021-06-14 11:35:48','2021-06-14 11:35:48'),
	(41,'step_facilitator','Callnhecer','2','2021-06-14 11:35:48','2021-06-14 11:35:48'),
	(42,'step_facilitator','Aprender com quem já fez (estudar materiais, assistir facilitações do tema)','3','2021-06-14 11:35:48','2021-06-14 11:35:48'),
	(43,'step_facilitator','Provar que sabe (demonstrar a facilitação em 20min)','4','2021-06-14 11:35:48','2021-06-14 11:35:48'),
	(44,'step_facilitator','Ação! Hora de facilitar!','5','2021-06-14 11:35:48','2021-06-14 11:35:48'),
	(45,'step_facilitator_video_url','','1','2021-06-14 11:36:57','2021-06-14 11:36:57'),
	(46,'step_mentor_video_url','','1','2021-06-14 11:37:11','2021-06-14 11:37:11'),
	(47,'be_mentor_title','Seja um mentor!','1','2021-06-14 11:37:34','2021-06-14 11:37:34'),
	(48,'be_mentor_description','','1','2021-06-14 11:37:48','2021-06-14 11:37:48'),
	(49,'be_mentor_benefits','Participação em nossos Sprints de aceleração na faixa','1','2021-06-14 11:37:51','2021-06-14 11:37:51'),
	(50,'be_mentor_benefits','Benefícios da nossa rede de parceiros, networking e oportunidades de negócio','2','2021-06-14 11:37:53','2021-06-14 11:37:53'),
	(51,'be_mentor_benefits','Acesso à metodologias como Design Sprint e conteúdo startupeiro','3','2021-06-14 11:37:54','2021-06-14 11:37:54'),
	(52,'be_mentor_benefits','Experiência como mentor de uma startup','4','2021-06-14 11:37:56','2021-06-14 11:37:56'),
	(53,'be_mentor_benefits','Participação no ecossistema de inovação da Bluefields','5','2021-06-14 11:37:57','2021-06-14 11:37:57'),
	(54,'be_mentor_benefits','Visibilidade profissional','6','2021-06-14 11:37:59','2021-06-14 11:37:59'),
	(55,'step_mentor','Avaliação de perfil','1','2021-06-14 11:39:16','2021-06-14 11:39:16'),
	(56,'step_mentor','Callnhecer','2','2021-06-14 11:39:23','2021-06-14 11:39:23'),
	(57,'step_mentor','Ação! Hora da mentoria voluntária!','3','2021-06-14 11:39:25','2021-06-14 11:39:25'),
	(58,'softskills_title','SoftSkills','1','2021-06-14 11:40:17','2021-06-14 11:40:17'),
	(59,'softskills_description','','1','2021-06-14 11:40:23','2021-06-14 11:40:23'),
	(60,'hardskills_title','HardSkills','1','2021-06-14 11:40:32','2021-06-14 11:40:32'),
	(61,'hardskills_description','Temas que você pode atuar','1','2021-06-14 11:40:44','2021-06-14 11:40:44'),
	(62,'softskills_item','Comunicação eficaz e dinâmica','1','2021-06-14 11:40:46','2021-06-14 11:40:46'),
	(63,'softskills_item','Jogo de cintura','2','2021-06-14 11:40:47','2021-06-14 11:40:47'),
	(64,'softskills_item','Relacionamento interpessoal e Empatia','3','2021-06-14 11:40:48','2021-06-14 11:40:48'),
	(65,'softskills_item','Flexibilidade e resiliência','4','2021-06-14 11:40:59','2021-06-14 11:40:59'),
	(66,'hardskills_item','MKT&Vendas','1','2021-06-14 11:41:01','2021-06-14 11:41:01'),
	(67,'hardskills_item','Design Sprint','2','2021-06-14 11:41:02','2021-06-14 11:41:02'),
	(68,'hardskills_item','MVP + Tecnologia','3','2021-06-14 11:41:03','2021-06-14 11:41:03'),
	(69,'hardskills_item','Pitch para investidor','4','2021-06-14 11:41:05','2021-06-14 11:41:05'),
	(70,'hardskills_item','Identidade de startup','5','2021-06-14 11:41:06','2021-06-14 11:41:06'),
	(71,'hardskills_item','User Experience/Customer Experience','6','2021-06-14 11:41:07','2021-06-14 11:41:07'),
	(72,'hardskills_item','Employee Experience','7','2021-06-14 11:41:08','2021-06-14 11:41:08'),
	(73,'hardskills_item','Impacto socioambiental','8','2021-06-14 11:41:09','2021-06-14 11:41:09'),
	(74,'hardskills_item','Finanças','9','2021-06-14 11:41:10','2021-06-14 11:41:10'),
	(75,'hardskills_item','OKR','10','2021-06-14 11:41:11','2021-06-14 11:41:11'),
	(76,'hardskills_item','Metodologias ágeis','11','2021-06-14 11:41:12','2021-06-14 11:41:12'),
	(77,'hardskills_item','Kingdom Business','12','2021-06-14 11:41:13','2021-06-14 11:41:13'),
	(78,'team_person_name','Sofia Assis','1','2021-06-14 11:45:46','2021-06-14 11:45:46'),
	(79,'team_person_linkedin','https://www.linkedin.com/mwlite/in/sofia-asis-50238797','1','2021-06-14 11:45:51','2021-06-14 11:45:51'),
	(80,'team_person_function','Meios de pagamento','1','2021-06-14 11:45:57','2021-06-14 11:45:57'),
	(81,'team_person_photo_url','','1','2021-06-14 11:45:59','2021-06-14 11:45:59'),
	(82,'team_person_name','Alex','2','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(83,'team_person_linkedin','https://www.linkedin.com/in/alexfalararo/','2','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(84,'team_person_function','Pitch para investidor','2','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(85,'team_person_photo_url','','2','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(86,'team_person_name','Dennis Reis','3','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(87,'team_person_linkedin','https://www.linkedin.com/in/dennismarquesreis/','3','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(88,'team_person_function','TI','3','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(89,'team_person_photo_url','','3','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(90,'team_person_name','Débora Cordeiro','4','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(91,'team_person_linkedin','https://www.linkedin.com/in/enfermeiradeboracordeiro/','4','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(92,'team_person_function','Design Sprint','4','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(93,'team_person_photo_url','','4','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(94,'team_person_name','Fábio Carelli','5','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(95,'team_person_linkedin','https://www.linkedin.com/in/fabio-dudus-carelli/','5','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(96,'team_person_function','Kingdom Business','5','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(97,'team_person_photo_url','','5','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(98,'team_person_name','Felipe Traina','6','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(99,'team_person_linkedin','https://www.linkedin.com/in/felipe-traina/','6','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(100,'team_person_function','Mkt&Vendas e Metodologias ágeis','6','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(101,'team_person_photo_url','','6','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(102,'team_person_name','Fernando Sérgio','7','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(103,'team_person_linkedin','https://www.linkedin.com/in/fernandosergio/','7','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(104,'team_person_function','UX','7','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(105,'team_person_photo_url','','7','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(106,'team_person_name','Jeferson Silva','8','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(107,'team_person_linkedin','https://www.linkedin.com/in/jefersonrodrigodasilva/','8','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(108,'team_person_function','Marketing & Vendas','8','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(109,'team_person_photo_url','','8','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(110,'team_person_name','Jéssica Mesquita','9','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(111,'team_person_linkedin','https://www.linkedin.com/in/jessica-mesquita-4a30828b/','9','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(112,'team_person_function','Equipes','9','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(113,'team_person_photo_url','','9','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(114,'team_person_name','João Victor','10','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(115,'team_person_linkedin','https://www.linkedin.com/in/joaovictordias/','10','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(116,'team_person_function','Inteligência artificial','10','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(117,'team_person_photo_url','','10','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(118,'team_person_name','Juliana Mercês','11','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(119,'team_person_linkedin','https://www.linkedin.com/in/julianamerces/','11','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(120,'team_person_function','Equipes','11','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(121,'team_person_photo_url','','11','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(122,'team_person_name','Lee Silva','12','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(123,'team_person_linkedin','https://www.linkedin.com/in/lee-johnny-silva-64847518/','12','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(124,'team_person_function','TI e MVP','12','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(125,'team_person_photo_url','','12','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(126,'team_person_name','Lourenço de Pauli','13','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(127,'team_person_linkedin','https://www.linkedin.com/in/lourencodepauli/','13','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(128,'team_person_function','Marketing & Vendas','13','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(129,'team_person_photo_url','','13','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(130,'team_person_name','Marco Camara','14','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(131,'team_person_linkedin','https://www.linkedin.com/in/marco-camara-42608a24/','14','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(132,'team_person_function','Kingdom Business, Mkt&Vendas','14','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(133,'team_person_photo_url','','14','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(134,'team_person_name','Rafael Medeiros','15','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(135,'team_person_linkedin','https://www.linkedin.com/in/rafael-medeiros-9331a192/','15','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(136,'team_person_function','Jurídico','15','2021-06-14 11:58:10','2021-06-14 11:58:10'),
	(137,'team_person_photo_url','','15','2021-06-14 11:58:10','2021-06-14 11:58:10');

/*!40000 ALTER TABLE `informations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela SequelizeMeta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `SequelizeMeta`;

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;

INSERT INTO `SequelizeMeta` (`name`)
VALUES
	('20210323170905-create-user.js'),
	('20210601044346-create-form-responses.js'),
	('20210601044346-create-tbb7-form-response.js'),
	('20210601052644-create-informations.js');

/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela tbb7_form_responses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tbb7_form_responses`;

CREATE TABLE `tbb7_form_responses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `startup_section` varchar(255) NOT NULL,
  `startup_name` varchar(255) NOT NULL,
  `startup_phase` varchar(255) NOT NULL,
  `meet_bluefields` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tbb7_form_responses` WRITE;
/*!40000 ALTER TABLE `tbb7_form_responses` DISABLE KEYS */;

INSERT INTO `tbb7_form_responses` (`id`, `name`, `email`, `phone`, `startup_section`, `startup_name`, `startup_phase`, `meet_bluefields`, `created_at`, `updated_at`)
VALUES
	(1,'2','2','2','2','2','2','2','2021-06-14 14:30:33','2021-06-14 14:30:33'),
	(2,'caio','caio','caio','caio','caio','1','caio','2021-06-14 18:31:22','2021-06-14 18:31:22');

/*!40000 ALTER TABLE `tbb7_form_responses` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
