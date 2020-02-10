/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.4.10-MariaDB : Database - programacion
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`programacion` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `programacion`;

/*Table structure for table `pokemon` */

DROP TABLE IF EXISTS `pokemon`;

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(300) DEFAULT NULL,
  `img` varchar(300) DEFAULT NULL,
  `abilities` varchar(300) DEFAULT NULL,
  `types` varchar(300) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user` (`user_id`),
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

/*Data for the table `pokemon` */

insert  into `pokemon`(`id`,`name`,`img`,`abilities`,`types`,`user_id`) values (1,'NICO EL PIJA','sdfsdfs','chupar la pija, y entregar el poto','golozo',3),(2,'EMI EL COME ANOS','ASDADA','CHUPAR PIJAS A TRABAS','INDEFINIDO',3),(3,'MARIANO','ASDAD','PROGRAMADOR DE LOS BUENOS','FULL STACK',3),(56,NULL,NULL,NULL,NULL,NULL),(57,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `sessions` */

DROP TABLE IF EXISTS `sessions`;

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `sessions` */

insert  into `sessions`(`session_id`,`expires`,`data`) values ('-ax0s11bF5TuBkpPPCx4QWdffYkTi0Uh',1581136331,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"cargado\":[\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\"]},\"passport\":{\"user\":3}}'),('3CItYlLV6UXqPs8BYSmhuQnCaJLtXU1E',1581143341,'{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{\"cargado\":[\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\",\"Guardado con exito\"]},\"passport\":{\"user\":3}}');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(60) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `users` */

insert  into `users`(`id`,`username`,`password`,`fullname`) values (3,'mariano','$2a$10$pHDTOLLzQt6sOkRwLNmmK.eZnN.5pf8z1koGQI5wNf1MnuAc.iXhK','mariano');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
