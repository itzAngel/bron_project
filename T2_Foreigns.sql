/*
Follow the instructions to execute this query. 
Create the schema
Use the schema
Create table by table
Insert data per table
*/

-- -----------------------------------------------------
-- 1rst execute
-- -----------------------------------------------------

CREATE SCHEMA `bron` ;

-- -----------------------------------------------------
-- 2nd execute
-- -----------------------------------------------------
USE `bron` ;
SET GLOBAL sql_mode='';
-- -----------------------------------------------------
-- Then follow executing table by table
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `bron`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`cliente` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `dni_cliente` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  `provincia` VARCHAR(45) NULL,
  `distrito` VARCHAR(45) NULL,
  `direccion` VARCHAR(100) NULL,
  `contrasena` VARCHAR(45) NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `dni_usuario` VARCHAR(8) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `privilegio` int(1) NULL,
  `contrasena` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bd`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`categoria` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bd`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`producto` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NULL,
  `genero` VARCHAR(45) NULL,
  `precio` DOUBLE NULL,
  `id_categoria` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria));

-- -----------------------------------------------------
-- Table `bd`.`Productos_Detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`detalle_producto` (
  `id_detalle_producto` int NOT NULL AUTO_INCREMENT,
  `id_producto` int NOT NULL,
  `talla` INT NULL,
  `color` VARCHAR(45) NULL,
  `descripcion` VARCHAR(450) NOT NULL,
  `cantidad` INT NULL,  
  PRIMARY KEY (`id_detalle_producto`),
  FOREIGN KEY (id_producto) REFERENCES producto(id_producto));
  
-- -----------------------------------------------------
-- Table `bd`.`imagen`
-- -----------------------------------------------------
CREATE TABLE `bron`.`imagen` (
  `id_imagen` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NOT NULL,
  `base64` LONGTEXT NULL,
  `contentType` VARCHAR(255) NULL,
  PRIMARY KEY (`id_imagen`) ,
  FOREIGN KEY (id_producto) REFERENCES producto(id_producto));
