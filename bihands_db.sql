# ************************************************************
# Sequel Pro SQL dump
# Versão 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.32)
# Base de Dados: bihands_db
# Tempo de Geração: 2021-04-27 00:31:39 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump da tabela addresses
# ------------------------------------------------------------

DROP TABLE IF EXISTS `addresses`;

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `zip_code` varchar(255) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `state` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `complement` varchar(255) NOT NULL,
  `number_street` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;

INSERT INTO `addresses` (`id`, `zip_code`, `shop_id`, `state`, `city`, `street`, `complement`, `number_street`, `district`)
VALUES
	(1,'58063590',1,'PB','Joao Pessoa','Rua Joaquim de Figueiredo Braga','casa','1765','Valentina');

/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `name`, `owner_id`, `status`, `description`)
VALUES
	(1,'Construção',1,1,'Tudo em construção'),
	(2,'Variedades',1,1,'Tudo em variedades'),
	(3,'Homem',1,1,'Tudo para homens'),
	(4,'Mulher',1,1,'Tudo para mulheres'),
	(5,'Criança',1,1,'Tudo para crianças'),
	(6,'Criança',3,1,'Tudo para crianças'),
	(7,'Religiosos',3,1,'Tudo em artigos religiosos'),
	(8,'Eletrônicos',3,1,'Tudo em eletrônicos'),
	(9,'Fotografia',3,1,'Tudo em fotografia'),
	(10,'Celulares',3,1,'Tudo em celulares');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela discount_coupons
# ------------------------------------------------------------

DROP TABLE IF EXISTS `discount_coupons`;

CREATE TABLE `discount_coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `use_quantity` int(11) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `code_coupon` varchar(255) NOT NULL,
  `date_expirated` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `discount_coupons_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `discount_coupons` WRITE;
/*!40000 ALTER TABLE `discount_coupons` DISABLE KEYS */;

INSERT INTO `discount_coupons` (`id`, `shop_id`, `discount_amount`, `type`, `use_quantity`, `active`, `code_coupon`, `date_expirated`)
VALUES
	(1,1,10,'teste',365,1,'ACUTIS10','10/12/2021');

/*!40000 ALTER TABLE `discount_coupons` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela factories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `factories`;

CREATE TABLE `factories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `cpf_cnpj` varchar(255) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `sales_comission` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf_cnpj` (`cpf_cnpj`),
  UNIQUE KEY `email` (`email`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `factories_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `factories` WRITE;
/*!40000 ALTER TABLE `factories` DISABLE KEYS */;

INSERT INTO `factories` (`id`, `name`, `cpf_cnpj`, `owner_id`, `email`, `sales_comission`)
VALUES
	(2,'Fábrica do Igor','123,',3,'igorloja@loja.com',30);

/*!40000 ALTER TABLE `factories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela order_lists
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_lists`;

CREATE TABLE `order_lists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_lists_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_lists_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `order_lists` WRITE;
/*!40000 ALTER TABLE `order_lists` DISABLE KEYS */;

INSERT INTO `order_lists` (`id`, `quantity`, `product_id`, `order_id`)
VALUES
	(4,2,5,1),
	(5,2,5,1);

/*!40000 ALTER TABLE `order_lists` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela orders
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subtotal` float NOT NULL,
  `coupon_id` int(11) DEFAULT NULL,
  `discount` float DEFAULT NULL,
  `tracking_code` varchar(255) DEFAULT NULL,
  `deviveryaddress_Id` int(11) DEFAULT NULL,
  `shop_id` int(11) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `delivery_value` float NOT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `transaction_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `coupon_id` (`coupon_id`),
  KEY `deviveryaddress_Id` (`deviveryaddress_Id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`coupon_id`) REFERENCES `discount_coupons` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`deviveryaddress_Id`) REFERENCES `addresses` (`id`),
  CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;

INSERT INTO `orders` (`id`, `subtotal`, `coupon_id`, `discount`, `tracking_code`, `deviveryaddress_Id`, `shop_id`, `status`, `delivery_value`, `payment_status`, `transaction_code`)
VALUES
	(1,123.9,NULL,10,'tracking code',NULL,1,'Aguardando Pagamento',49.9,'aguardando','transaction code');

/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `weight` float NOT NULL,
  `full_price` float NOT NULL,
  `discount` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT '1',
  `available_quantity` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku` (`sku`),
  KEY `shop_id` (`shop_id`),
  KEY `subcategory_id` (`subcategory_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `name`, `photo`, `sku`, `weight`, `full_price`, `discount`, `description`, `active`, `available_quantity`, `shop_id`, `subcategory_id`, `category_id`)
VALUES
	(5,'Headset Gamer Hyperx Cloud II, Kingston, KHX-HSPC-RD, Preto e Vermelho','https://images-na.ssl-images-amazon.com/images/I/61JJl260NlL._AC_SL1412_.jpg','142',0,649.9,5,'Tem produtos em oferta nas diversas categorias no site da Amazon, mas se o que você quer é a melhor oportunidade para comprar um Headset Gamer HyperX KHX-HSPC-RD, esta é a hora certa. Com certeza, a sua experiência com os jogos não é a mesma depois de exp',1,4,1,5,8),
	(6,'Microfone HyperX','https://images-na.ssl-images-amazon.com/images/I/71RZ-McR9dL._AC_SX679_.jpg','1234',0,899,5,'Tem produtos em oferta nas diversas categorias no site da Amazon, mas se o que você quer é a melhor oportunidade para comprar um Microfone Gamer HyperX Quadcast a uma condição mais que especial, essa é a hora certa. Este microfone da HyperX tem base antiv',1,10,1,4,8),
	(7,'Teclado Mecanico Alloy FPS RGB Preto com Luz RGB, HyperX, HX-KB1SS2-US','https://images-na.ssl-images-amazon.com/images/I/61pPnZsW7iL._AC_SL1500_.jpg','1425',0,599,10,'O HyperX Alloy FPS RGB é um teclado de alta performance projetado para garantir a máxima precisão e o melhor estilo. Os LEDs expostos nos switches das teclas amplificam o brilho do backlight RGB e podem ser personalizados com o software fácil de usar Hype',1,10,1,6,8),
	(11,'SteelSeries Casque Gamer Arctis 7 Noir 2019','https://images-na.ssl-images-amazon.com/images/I/71%2BqufKOamL._AC_SL1500_.jpg','1427',0,1780,25,'ARCTIS 7 Melhores fones de ouvido para jogos sem fio: PC Gamer 2,4 GHz sem perda de áudio projetado para jogos de baixa latência. Melhor microfone de jogo: o microfone bidirecional Clearcast certificado Discord Ouve detalhes incríveis em cada jogo com pre',1,10,1,5,8),
	(13,'Notebook Acer Nitro Gamer AN515-55-59MT Intel Core I5 16GB 512GB SSD 15.6\' Windows 10','https://images-na.ssl-images-amazon.com/images/I/81JdWsw6h4L._AC_SL1500_.jpg','1428',0,6199.99,15,'ARCTIS 7 Melhores fones de ouvido para jogos sem fio: PC Gamer 2,4 GHz sem perda de áudio projetado para jogos de baixa latência. Melhor microfone de jogo: o microfone bidirecional Clearcast certificado Discord Ouve detalhes incríveis em cada jogo com pre',1,10,1,3,8),
	(14,'Monitor LG Gamer UltraWide 25\" IPS Full HD 1ms MBR 25UM58G','https://images-na.ssl-images-amazon.com/images/I/71%2BuCmkWDWL._AC_SL1500_.jpg','1429',0,949.9,0,'ARCTIS 7 Melhores fones de ouvido para jogos sem fio: PC Gamer 2,4 GHz sem perda de áudio projetado para jogos de baixa latência. Melhor microfone de jogo: o microfone bidirecional Clearcast certificado Discord Ouve detalhes incríveis em cada jogo com pre',1,10,1,7,8),
	(15,'Cadeira Gamer Premium, CGR-01 - XZONE','https://images-na.ssl-images-amazon.com/images/I/811-HoAXB0L._AC_SL1500_.jpg','1430',0,924,0,'ARCTIS 7 Melhores fones de ouvido para jogos sem fio: PC Gamer 2,4 GHz sem perda de áudio projetado para jogos de baixa latência. Melhor microfone de jogo: o microfone bidirecional Clearcast certificado Discord Ouve detalhes incríveis em cada jogo com pre',1,10,1,9,8),
	(16,'Mouse Pad Professional Gaming, Havit, HV-MP830, 30x90 cm','https://images-na.ssl-images-amazon.com/images/I/418WwgA4tjL._AC_.jpg','1431',0,47.41,5,'ARCTIS 7 Melhores fones de ouvido para jogos sem fio: PC Gamer 2,4 GHz sem perda de áudio projetado para jogos de baixa latência. Melhor microfone de jogo: o microfone bidirecional Clearcast certificado Discord Ouve detalhes incríveis em cada jogo com pre',1,10,1,8,8),
	(20,'Câmera Digital EOS Rebel T100 18-55mm f/3.5-5.6 IS III BR, Canon, Preto','https://images-na.ssl-images-amazon.com/images/I/51fv1EhknKL._AC_.jpg','1433',0,2799,0,'A eos rebel t100 é a câmera que oferece a qualidade que suas fotografias merecem. ',1,10,1,11,9),
	(22,'Xiaomi Redmi Note 9 128GB 4GB RAM - Versión Global - Midnight Grey','https://images-na.ssl-images-amazon.com/images/I/61VmUpCs7PL._AC_SL1000_.jpg','1402',0,1402.17,0,'O Redmi Note 9 é um smartphone Android de bom nível, ótimo para fotos, que pode satisfazer até o mais exigente dos usuários.',1,10,1,12,10);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela sequelizemeta
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sequelizemeta`;

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;

INSERT INTO `sequelizemeta` (`name`)
VALUES
	('20210323170905-create-user.js'),
	('20210323171725-create-factory.js'),
	('20210323171805-create-shop.js'),
	('20210323171833-create-address.js'),
	('20210325004940-create-table-category.js'),
	('20210325005040-create-table-subcategories.js'),
	('20210325021907-create-table-product.js'),
	('20210329155806-create-table-discount-coupon.js'),
	('20210329155807-create-table-order.js'),
	('20210329155808-create-table-orderlist.js');

/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela shops
# ------------------------------------------------------------

DROP TABLE IF EXISTS `shops`;

CREATE TABLE `shops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `banner` varchar(255) DEFAULT NULL,
  `shop_url` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `cpf_cnpj` varchar(255) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `factory_id` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shop_url` (`shop_url`),
  UNIQUE KEY `cpf_cnpj` (`cpf_cnpj`),
  UNIQUE KEY `email` (`email`),
  KEY `owner_id` (`owner_id`),
  KEY `factory_id` (`factory_id`),
  CONSTRAINT `shops_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shops_ibfk_2` FOREIGN KEY (`factory_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;

INSERT INTO `shops` (`id`, `shop_name`, `instagram`, `logo`, `email`, `banner`, `shop_url`, `description`, `cpf_cnpj`, `owner_id`, `factory_id`, `phone`)
VALUES
	(1,'loja do igor','@igor-loja','teste','igor-loja@acutis.com.br','teste','loja-igor',NULL,'12345722',3,NULL,'55 12 2222-2222');

/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela subcategories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `subcategories`;

CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;

INSERT INTO `subcategories` (`id`, `name`, `category_id`, `status`)
VALUES
	(1,'Religiosos',6,1),
	(2,'subcategoria teste',6,1),
	(3,'Computadores',8,1),
	(4,'Microfones',8,1),
	(5,'Fones de Ouvido/Headstes',8,1),
	(6,'Teclados',8,1),
	(7,'Monitores',8,1),
	(8,'Mouses',8,1),
	(9,'Cadeiras Gamer',8,1),
	(11,'Câmeras DSLR',9,1),
	(12,'Xiaomi',10,1);

/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump da tabela users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `cpf_cnpj` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `cpf_cnpj` (`cpf_cnpj`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `name`, `email`, `password_hash`, `cpf_cnpj`, `phone`, `type`)
VALUES
	(1,'Maximiliano Kolbe','max@acutis.com','$2a$10$zhnFxNCI1p9TdWqRt5BNbuXQ9omAPtVWCz80xfwR2xmjS2r2kDqoS','111455','123','factoryowner'),
	(3,'Igor Sales','igor@acutis.com','$2a$10$Iz6ha1HgMEsM2wvdpg2M6ORfuorLoV4VN89xseF5txdPr7vX3dqR.','1114556','123','factoryowner'),
	(4,'caio','caio@email.com','$2a$10$lTIVl/LQ9xfEFXAz7yEimOlRsOa/xAJmmHYB5Q9DW.NXw8sH48SoK','123321','123321','salesman');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
