-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bron
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bron
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bron` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bron` ;

-- -----------------------------------------------------
-- Table `bron`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `categoria` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`producto` (
  `id_producto` INT NOT NULL AUTO_INCREMENT,
  `modelo` VARCHAR(45) NULL DEFAULT NULL,
  `genero` VARCHAR(45) NULL DEFAULT NULL,
  `precio` DOUBLE NULL DEFAULT NULL,
  `id_categoria` INT NULL DEFAULT NULL,
  `foto` LONGTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `id_categoria` (`id_categoria` ASC) VISIBLE,
  CONSTRAINT `producto_ibfk_1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `bron`.`categoria` (`id_categoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 13
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`detalle_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`detalle_producto` (
  `id_detalle_producto` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NULL DEFAULT NULL,
  `talla` INT NULL DEFAULT NULL,
  `color` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion` VARCHAR(450) NULL DEFAULT NULL,
  PRIMARY KEY (`id_detalle_producto`),
  INDEX `id_producto` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `detalle_producto_ibfk_1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `bron`.`producto` (`id_producto`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `dni_usuario` VARCHAR(8) NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `privilegio` INT NULL DEFAULT NULL,
  `contrasena` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`tienda` (
  `id_tienda` INT NOT NULL AUTO_INCREMENT,
  `nombre_tienda` VARCHAR(45) NULL DEFAULT NULL,
  `distrito` VARCHAR(45) NULL DEFAULT NULL,
  `id_usuario` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_tienda`),
  INDEX `fk_tienda_usuario1_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_tienda_usuario1`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `bron`.`usuario` (`id_usuario`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`asigna_producto_tienda`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`asigna_producto_tienda` (
  `id_asigna_producto_tienda` INT NOT NULL AUTO_INCREMENT,
  `id_detalle_producto` INT NULL DEFAULT NULL,
  `id_tienda` INT NULL DEFAULT NULL,
  `cantidad` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_asigna_producto_tienda`),
  INDEX `fk_asigna_producto_tienda_detalle_producto1_idx` (`id_detalle_producto` ASC) VISIBLE,
  INDEX `fk_asigna_producto_tienda_tienda1_idx` (`id_tienda` ASC) VISIBLE,
  CONSTRAINT `fk_asigna_producto_tienda_detalle_producto1`
    FOREIGN KEY (`id_detalle_producto`)
    REFERENCES `bron`.`detalle_producto` (`id_detalle_producto`),
  CONSTRAINT `fk_asigna_producto_tienda_tienda1`
    FOREIGN KEY (`id_tienda`)
    REFERENCES `bron`.`tienda` (`id_tienda`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `dni_cliente` VARCHAR(45) NULL DEFAULT NULL,
  `nombre` VARCHAR(45) NULL DEFAULT NULL,
  `apellido` VARCHAR(45) NULL DEFAULT NULL,
  `telefono` VARCHAR(45) NULL DEFAULT NULL,
  `provincia` VARCHAR(45) NULL DEFAULT NULL,
  `distrito` VARCHAR(45) NULL DEFAULT NULL,
  `direccion` VARCHAR(100) NULL DEFAULT NULL,
  `contrasena` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`venta` (
  `id_venta` INT NOT NULL AUTO_INCREMENT,
  `precio_total` DECIMAL(10,2) NULL DEFAULT NULL,
  `fecha_venta` DATETIME NULL DEFAULT NULL,
  `id_cliente` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_venta`),
  INDEX `fk_venta_cliente1_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_venta_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `bron`.`cliente` (`id_cliente`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`detalle_venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`detalle_venta` (
  `id_detalle_venta` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NULL DEFAULT NULL,
  `precio` DECIMAL(10,2) NULL DEFAULT NULL,
  `id_venta` INT NULL DEFAULT NULL,
  `id_asigna_producto_tienda` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_detalle_venta`),
  INDEX `fk_detalle_venta_venta1_idx` (`id_venta` ASC) VISIBLE,
  INDEX `fk_detalle_venta_asigna_producto_tienda1_idx` (`id_asigna_producto_tienda` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_venta_asigna_producto_tienda1`
    FOREIGN KEY (`id_asigna_producto_tienda`)
    REFERENCES `bron`.`asigna_producto_tienda` (`id_asigna_producto_tienda`),
  CONSTRAINT `fk_detalle_venta_venta1`
    FOREIGN KEY (`id_venta`)
    REFERENCES `bron`.`venta` (`id_venta`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `bron`.`imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`imagen` (
  `id_imagen` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NULL DEFAULT NULL,
  `base64` LONGTEXT NULL DEFAULT NULL,
  `content_type` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id_imagen`),
  INDEX `id_producto` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `imagen_ibfk_1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `bron`.`producto` (`id_producto`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
