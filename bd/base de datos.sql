-- MySQL dump 10.13  Distrib 5.7.12, for Win32 (AMD64)
--
-- Host: localhost    Database: registro_elementos
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `elemento`
--

DROP TABLE IF EXISTS `elemento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `elemento` (
  `id_elemento` int(11) NOT NULL AUTO_INCREMENT,
  `num_serial` varchar(30) NOT NULL,
  `marca` varchar(20) NOT NULL,
  `modelo` varchar(20) NOT NULL,
  `caracteristicas` varchar(30) NOT NULL,
  `tipo_de_elemento` varchar(30) NOT NULL,
  `fk_persona` int(11) DEFAULT NULL,
  `imagen` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id_elemento`),
  KEY `elemento_persona` (`fk_persona`),
  CONSTRAINT `elemento_persona` FOREIGN KEY (`fk_persona`) REFERENCES `persona` (`id_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elemento`
--

LOCK TABLES `elemento` WRITE;
/*!40000 ALTER TABLE `elemento` DISABLE KEYS */;
INSERT INTO `elemento` VALUES (2,'mxl92501xm','samsung','j8prime','color rojo ','tablet',2,NULL),(3,'mxxx1500132','hewlett y packard','hp6000','forro plastico ','portatil',5,NULL),(4,'1004856','don pancho','gradn stream','esta nuevo','gps',6,NULL),(5,'jmp500','genius','qt300','color gris','parantes',7,NULL),(6,'jt000546','axion','jnc400','color negro','portatil',8,NULL);
/*!40000 ALTER TABLE `elemento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingreso`
--

DROP TABLE IF EXISTS `ingreso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ingreso` (
  `id_ingreso` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` datetime NOT NULL,
  `fecha_salida` datetime NOT NULL,
  `estado` varchar(20) NOT NULL,
  `fk_persona` int(11) NOT NULL,
  `fk_elemento` int(11) NOT NULL,
  `novedades` varchar(10) NOT NULL,
  PRIMARY KEY (`id_ingreso`),
  KEY `ingreso_persona` (`fk_persona`),
  KEY `ingreso_elemento` (`fk_elemento`),
  CONSTRAINT `ingreso_elemento` FOREIGN KEY (`fk_elemento`) REFERENCES `elemento` (`id_elemento`),
  CONSTRAINT `ingreso_persona` FOREIGN KEY (`fk_persona`) REFERENCES `persona` (`id_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingreso`
--

LOCK TABLES `ingreso` WRITE;
/*!40000 ALTER TABLE `ingreso` DISABLE KEYS */;
INSERT INTO `ingreso` VALUES (9,'2019-06-15 00:00:00','2019-06-15 00:00:00','afuera',5,3,''),(10,'2019-05-13 00:00:00','2019-05-13 00:00:00','afuera',2,2,''),(11,'2019-07-13 00:00:00','2019-07-13 00:00:00','adentro',6,4,''),(12,'2019-09-15 00:00:00','2019-09-15 00:00:00','adentro',7,5,''),(13,'2019-10-20 00:00:00','2019-10-20 00:00:00','adentro',8,6,'');
/*!40000 ALTER TABLE `ingreso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `persona`
--

DROP TABLE IF EXISTS `persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `persona` (
  `id_persona` int(11) NOT NULL AUTO_INCREMENT,
  `identificacion` int(11) NOT NULL,
  `nombres` varchar(20) NOT NULL,
  `apellidos` varchar(20) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `fk_tipo_de_persona` int(11) NOT NULL,
  `titulado` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `persona_tipo` (`fk_tipo_de_persona`),
  CONSTRAINT `persona_tipo` FOREIGN KEY (`fk_tipo_de_persona`) REFERENCES `tipo_persona` (`id_tipo_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `persona`
--

LOCK TABLES `persona` WRITE;
/*!40000 ALTER TABLE `persona` DISABLE KEYS */;
INSERT INTO `persona` VALUES (2,2147483647,'maria del rosario','gomez sanchez','3138146789',5,NULL),(5,1000185891,'carlos antonio','perez artunduaga','3158951232',6,''),(6,1077012855,'brayan mauricio','reyes poveda','3208316024',4,'gestion administrativa'),(7,95216654,'santiago ','benavides sotelo','3124905998',7,''),(8,76566772,'clara elvira ','rojas caviedes','3114903221',8,'');
/*!40000 ALTER TABLE `persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_persona`
--

DROP TABLE IF EXISTS `tipo_persona`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_persona` (
  `id_tipo_persona` int(11) NOT NULL AUTO_INCREMENT,
  `aprendiz` int(11) NOT NULL,
  `instructor` int(11) NOT NULL,
  `invitado` int(11) NOT NULL,
  `administrativo` int(11) NOT NULL,
  PRIMARY KEY (`id_tipo_persona`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_persona`
--

LOCK TABLES `tipo_persona` WRITE;
/*!40000 ALTER TABLE `tipo_persona` DISABLE KEYS */;
INSERT INTO `tipo_persona` VALUES (4,1,0,0,0),(5,0,1,0,0),(6,0,0,0,1),(7,0,1,0,0),(8,0,1,0,0);
/*!40000 ALTER TABLE `tipo_persona` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'registro_elementos'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-23  1:23:07
