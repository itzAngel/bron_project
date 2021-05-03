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

-- -----------------------------------------------------
-- Then follow executing table by table
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `bd`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`cliente` (
  `DNI_CLIENTE` VARCHAR(8) NOT NULL,
  `NOMBRE` VARCHAR(45) NULL,
  `APELLIDO` VARCHAR(45) NULL,
  `TELEFONO` VARCHAR(45) NULL,
  `PROVINCIA` VARCHAR(45) NULL,
  `DISTRITO` VARCHAR(45) NULL,
  `DIRECCION` VARCHAR(100) NULL,
  `ID_CLIENTE` VARCHAR(45) NULL,
  `CONTRASENA` VARCHAR(45) NULL,
  PRIMARY KEY (`DNI_CLIENTE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bd`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Usuario` (
  `DNI_USUARIO` VARCHAR(8) NOT NULL,
  `NOMBRES` VARCHAR(45) NULL,
  `APELLIDOS` VARCHAR(45) NULL,
  `EMAIL` VARCHAR(45) NULL,
  `PRIVILEGIO` VARCHAR(1) NULL,
  `ID_USUARIO` VARCHAR(45) NULL,
  `CONTRASENA` VARCHAR(45) NULL,
  PRIMARY KEY (`DNI_USUARIO`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bd`.`Categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Categoria` (
  `CODIGO_CATEGORIA` VARCHAR(8) NOT NULL,
  `CATEGORIA` VARCHAR(45) NULL,
  PRIMARY KEY (`CODIGO_CATEGORIA`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bd`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Productos` (
  `CODIGOPRODUCTO` VARCHAR(45) NOT NULL,
  `MODELO` VARCHAR(45) NULL,
  `GENERO` VARCHAR(45) NULL,
  `CODIGO_CATEGORIA` VARCHAR(8) NULL,
  `PRECIO` DOUBLE NULL,
  
  PRIMARY KEY (`CODIGOPRODUCTO`),
  FOREIGN KEY (CODIGO_CATEGORIA) REFERENCES Categoria(CODIGO_CATEGORIA))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bd`.`Productos_Detalle`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Detalle_Productos` (
  `CODIGOPRODUCTO` VARCHAR(45) NOT NULL,
  `TALLA` INT NULL,
  `COLOR` VARCHAR(45) NULL,
  `DESCRIPCION` VARCHAR(45) NOT NULL,
  `CANTIDAD` INT NULL,  
  FOREIGN KEY (CODIGOPRODUCTO) REFERENCES Productos(CODIGOPRODUCTO))

-- -----------------------------------------------------
-- DATA 1
-- -----------------------------------------------------
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (44995112, 'Tonnie', 'Rojahn', '796-413-6183', 'Espinheira', 'Aveiro', '4 Paget Court', '22-139-0113', 'cFGsor3DE2S');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (54602044, 'Talbert', 'Moreinu', '448-558-2268', 'Kasungu', null, '52753 3rd Terrace', '01-682-9021', 'lBctkC5IyL');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (73433521, 'Roze', 'Rase', '789-364-8387', 'Manhush', null, '3936 Coleman Trail', '07-786-2103', '7y3M2kvX');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (70687110, 'Kellby', 'Vina', '833-285-7544', 'Tatebayashi', null, '6 Merry Point', '88-362-9467', 'gD2kEPRa');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (27664007, 'Liesa', 'Hemstead', '117-768-6244', 'Sinegorskiy', null, '589 Cody Trail', '64-240-5110', 'yieCa88');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (36009227, 'Jamie', 'Hamblin', '155-963-0336', 'Halmstad', 'Halland', '42 School Alley', '43-306-8329', 'CMk3yKc5mb');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (42295151, 'Natasha', 'Bouts', '399-627-6320', 'Puerres', null, '1 Village Green Terrace', '08-477-4487', 'aSjKevoYQ');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (20034168, 'Stacie', 'Hilliam', '314-793-9413', 'Emplak', null, '120 Forest Dale Way', '33-343-4900', 'XO3sWrLGavm');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (94522400, 'Curtis', 'Grimbaldeston', '802-816-6687', 'Biaoxi', null, '823 Orin Trail', '72-695-8326', 'GuDi63LZhwu');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (57309503, 'Arlana', 'Durnill', '663-292-3631', 'Yamada', null, '8 Luster Alley', '49-372-8799', 'oysPuru');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (43922339, 'Beckie', 'Hubberstey', '302-915-5228', 'Blimbing', null, '97 Redwing Pass', '65-320-8767', '7LUGaAO0FSyx');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (24288118, 'Alexander', 'Edmunds', '427-880-4287', 'Huandiqiao', null, '11672 Bunting Plaza', '78-499-8767', 'dHQuGX5I');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (14276202, 'Rhonda', 'Kulicke', '185-439-6172', 'Puyuan', null, '12 Gale Center', '14-900-0145', 'qIjFVdL0ZZN');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (89240425, 'Liliane', 'Thacke', '125-484-4058', 'Covão da Carvalha', 'Leiria', '4666 Sunbrook Street', '85-547-9341', 'VG7Zq9EI');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA) values (34443550, 'Martainn', 'Brokenbrow', '147-865-0234', 'Vila de Rei', 'Castelo Branco', '12 Rutledge Alley', '97-893-3800', 'AgfRYcX3M4');


-- -----------------------------------------------------
-- DATA 2
-- -----------------------------------------------------

insert into Categoria (CODIGO_CATEGORIA, CATEGORIA) values (73232778, 'Botines');
insert into Categoria (CODIGO_CATEGORIA, CATEGORIA) values (40015727, 'Zapatos');
insert into Categoria (CODIGO_CATEGORIA, CATEGORIA) values (67507082, 'Zapatillas');


-- -----------------------------------------------------
-- DATA 3
-- -----------------------------------------------------
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (40838744, 'Gilemette', 'Caherny', 'gcaherny0@blog.com', '0', '93-513-9458', 'KtrAqpy5VVg2');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (51429410, 'Correy', 'O''Mannion', 'comannion1@google.com.br', '1', '81-310-5266', 'XwMZObrFK');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (21906753, 'Horacio', 'Kirkbride', 'hkirkbride2@last.fm', '1', '38-461-0258', '5dOXm2');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (54309330, 'Susanne', 'Yepiskov', 'syepiskov3@nifty.com', '1', '48-547-8415', 'jLk3JiK4h');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (51571629, 'Steffane', 'Feehely', 'sfeehely4@hhs.gov', '0', '01-945-6520', 'jCmHmPXlb');

-- -----------------------------------------------------
-- DATA 4
-- -----------------------------------------------------
insert into Productos (CODIGOPRODUCTO, MODELO,   GENERO, CODIGO_CATEGORIA, PRECIO) values (74801988, 'primis in faucibus',  'Male', 73232778, 0);
insert into Productos (CODIGOPRODUCTO, MODELO,  GENERO, CODIGO_CATEGORIA, PRECIO) values (7266540, 'non mauris morbi',  'Genderfluid', 73232778, 0);
insert into Productos (CODIGOPRODUCTO, MODELO,   GENERO, CODIGO_CATEGORIA, PRECIO) values (47832017, 'quis odio consequat',   'Male', 40015727, 0);
insert into Productos (CODIGOPRODUCTO, MODELO,   GENERO, CODIGO_CATEGORIA, PRECIO) values (96254949, 'dui vel sem sed sagittis',   'Genderqueer', 40015727, 0);
insert into Productos (CODIGOPRODUCTO, MODELO,   GENERO, CODIGO_CATEGORIA, PRECIO) values (29654427, 'a odio',   'Agender', 67507082, 0);

insert into Detalle_Productos (CODIGOPRODUCTO,TALLA, COLOR,DESCRIPCION,CANTIDAD) values (74801988, 48, 'kvalance1@jalbum.net','Zapato suelto', 10);
insert into Detalle_Productos (CODIGOPRODUCTO,TALLA,COLOR,DESCRIPCION,CANTIDAD) values (74801988, 44, 'gcomber2@msn.com','Zapato no suelto', 30);
insert into Detalle_Productos (CODIGOPRODUCTO,TALLA,COLOR,DESCRIPCION,CANTIDAD) values (74801988, 42, 'skearney3@infoseek.co.jp','Zapato soltado', 50);
insert into Detalle_Productos (CODIGOPRODUCTO,TALLA,COLOR,DESCRIPCION,CANTIDAD) values (74801988, 40, 'rwillmett6@newyorker.com', 'Zapato', 20);


select sum(cantidad) from Detalle_Productos;
