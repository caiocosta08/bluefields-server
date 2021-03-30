-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.17-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.1.0.6116
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para bihands_db
CREATE DATABASE IF NOT EXISTS `bihands_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `bihands_db`;

-- Copiando estrutura para tabela bihands_db.addresses
DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.addresses: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` (`id`, `zip_code`, `shop_id`, `state`, `city`, `street`, `complement`, `number_street`, `district`) VALUES
	(1, '58063590', 1, 'PB', 'Joao Pessoa', 'Rua Joaquim de Figueiredo Braga', 'casa', '1765', 'Valentina');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.categories
DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.categories: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`, `owner_id`, `status`) VALUES
	(1, 'Construção', 1, 1),
	(2, 'Variedades', 1, 1),
	(3, 'Homem', 1, 1),
	(4, 'Mulher', 1, 1),
	(5, 'Criança', 1, 1),
	(6, 'Criança', 3, 1),
	(7, 'Religiosos', 3, 1);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.discount_coupons
DROP TABLE IF EXISTS `discount_coupons`;
CREATE TABLE IF NOT EXISTS `discount_coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_id` int(11) NOT NULL,
  `discount_amount` int(11) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `use_quantity` int(11) NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `code_coupon` varchar(255) NOT NULL,
  `date_expirated` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `shop_id` (`shop_id`),
  CONSTRAINT `discount_coupons_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.discount_coupons: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `discount_coupons` DISABLE KEYS */;
INSERT INTO `discount_coupons` (`id`, `shop_id`, `discount_amount`, `type`, `use_quantity`, `active`, `code_coupon`, `date_expirated`) VALUES
	(1, 1, 10, 'teste', 365, 1, 'ACUTIS10', '10/12/2021');
/*!40000 ALTER TABLE `discount_coupons` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.factories
DROP TABLE IF EXISTS `factories`;
CREATE TABLE IF NOT EXISTS `factories` (
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.factories: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `factories` DISABLE KEYS */;
INSERT INTO `factories` (`id`, `name`, `cpf_cnpj`, `owner_id`, `email`, `sales_comission`) VALUES
	(2, 'Fábrica do Igor', '123,', 3, 'igorloja@loja.com', 30);
/*!40000 ALTER TABLE `factories` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.orders: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`id`, `subtotal`, `coupon_id`, `discount`, `tracking_code`, `deviveryaddress_Id`, `shop_id`, `status`, `delivery_value`, `payment_status`, `transaction_code`) VALUES
	(1, 123.9, NULL, 10, 'tracking code', NULL, 1, 'Aguardando Pagamento', 49.9, 'aguardando', 'transaction code');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.order_lists
DROP TABLE IF EXISTS `order_lists`;
CREATE TABLE IF NOT EXISTS `order_lists` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_lists_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `order_lists_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.order_lists: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `order_lists` DISABLE KEYS */;
INSERT INTO `order_lists` (`id`, `quantity`, `product_id`, `order_id`) VALUES
	(4, 2, 5, 1),
	(5, 2, 5, 1);
/*!40000 ALTER TABLE `order_lists` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.products
DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `weight` float NOT NULL,
  `full_price` float NOT NULL,
  `discount` float NOT NULL,
  `description` varchar(255) NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `available_quantity` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `subcategory_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sku` (`sku`),
  KEY `shop_id` (`shop_id`),
  KEY `subcategory_id` (`subcategory_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`shop_id`) REFERENCES `shops` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`subcategory_id`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.products: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `photo`, `sku`, `weight`, `full_price`, `discount`, `description`, `active`, `available_quantity`, `shop_id`, `subcategory_id`) VALUES
	(5, 'produto teste ', 'photo', '142', 0, 123.5, 0, 'descrição do produto', 1, -4, 1, 1),
	(6, 'produto teste ', 'photo', '1425', 0, 123.5, 0, 'descrição do produto', 1, 10, 1, 1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.sequelizemeta
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Copiando dados para a tabela bihands_db.sequelizemeta: ~10 rows (aproximadamente)
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` (`name`) VALUES
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

-- Copiando estrutura para tabela bihands_db.shops
DROP TABLE IF EXISTS `shops`;
CREATE TABLE IF NOT EXISTS `shops` (
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.shops: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
INSERT INTO `shops` (`id`, `shop_name`, `instagram`, `logo`, `email`, `banner`, `shop_url`, `description`, `cpf_cnpj`, `owner_id`, `factory_id`, `phone`) VALUES
	(1, 'loja do igor', '@igor-loja', 'teste', 'igor-loja@acutis.com.br', 'teste', 'loja-igor', NULL, '12345722', 3, NULL, '55 12 2222-2222');
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.subcategories
DROP TABLE IF EXISTS `subcategories`;
CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.subcategories: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` (`id`, `name`, `category_id`, `status`) VALUES
	(1, 'Religiosos', 6, 1),
	(2, 'subcategoria teste', 6, 1);
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;

-- Copiando estrutura para tabela bihands_db.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela bihands_db.users: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password_hash`, `cpf_cnpj`, `phone`, `type`) VALUES
	(1, 'Maximiliano Kolbe', 'max@acutis.com', '$2a$10$zhnFxNCI1p9TdWqRt5BNbuXQ9omAPtVWCz80xfwR2xmjS2r2kDqoS', '111455', '123', 'factoryowner'),
	(3, 'Igor Sales', 'igor@acutis.com', '$2a$10$Iz6ha1HgMEsM2wvdpg2M6ORfuorLoV4VN89xseF5txdPr7vX3dqR.', '1114556', '123', 'factoryowner');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
