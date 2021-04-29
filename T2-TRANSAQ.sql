USE `bron` ;

-- -----------------------------------------------------
-- Table `mydb`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Cliente` (
  `DNI_CLIENTE` VARCHAR(8) NOT NULL,
  `NOMBRE` VARCHAR(45) NULL,
  `APELLIDO` VARCHAR(45) NULL,
  `TELEFONO` VARCHAR(45) NULL,
  `PROVINCIA` VARCHAR(45) NULL,
  `DISTRITO` VARCHAR(45) NULL,
  `DIRECCION` VARCHAR(100) NULL,
  `ID_CLIENTE` VARCHAR(45) NULL,
  `CONTRASENA` VARCHAR(45) NULL,
   `EMAIL` VARCHAR(45) NULL,

  PRIMARY KEY (`DNI_CLIENTE`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bron`.`Productos` (
  `CODIGOPRODUCTO` VARCHAR(45) NOT NULL,
  `MODELO` VARCHAR(45) NULL,
  `TALLA` INT NULL,
  `COLOR` VARCHAR(45) NULL,
  `GENERO` VARCHAR(45) NULL,
  `CODIGO_CATEGORIA` VARCHAR(8) NULL,
  `PRECIO` DOUBLE NULL,
  `CANTIDAD` INT NULL,
  PRIMARY KEY (`CODIGOPRODUCTO`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
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

CREATE TABLE IF NOT EXISTS `bron`.`Categoria` (
  `CODIGO_CATEGORIA` VARCHAR(8) NOT NULL,
  `CATEGORIA` VARCHAR(45) NULL,
  PRIMARY KEY (`CODIGO_CATEGORIA`))
ENGINE = InnoDB;

ALTER TABLE Productos ADD CONSTRAINT FK_CODIGO_CATEGORIA FOREIGN KEY (CODIGO_CATEGORIA) REFERENCES Productos(CODIGO_CATEGORIA);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (44995112, 'Tonnie', 'Rojahn', '796-413-6183', 'Espinheira', 'Aveiro', '4 Paget Court', '22-139-0113', 'cFGsor3DE2S', 'trojahn0@google.com.au');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (54602044, 'Talbert', 'Moreinu', '448-558-2268', 'Kasungu', null, '52753 3rd Terrace', '01-682-9021', 'lBctkC5IyL', 'tmoreinu1@oaic.gov.au');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (73433521, 'Roze', 'Rase', '789-364-8387', 'Manhush', null, '3936 Coleman Trail', '07-786-2103', '7y3M2kvX', 'rrase2@qq.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (70687110, 'Kellby', 'Vina', '833-285-7544', 'Tatebayashi', null, '6 Merry Point', '88-362-9467', 'gD2kEPRa', 'kvina3@mapy.cz');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (27664007, 'Liesa', 'Hemstead', '117-768-6244', 'Sinegorskiy', null, '589 Cody Trail', '64-240-5110', 'yieCa88', 'lhemstead4@exblog.jp');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (36009227, 'Jamie', 'Hamblin', '155-963-0336', 'Halmstad', 'Halland', '42 School Alley', '43-306-8329', 'CMk3yKc5mb', 'jhamblin5@cbc.ca');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (42295151, 'Natasha', 'Bouts', '399-627-6320', 'Puerres', null, '1 Village Green Terrace', '08-477-4487', 'aSjKevoYQ', 'nbouts6@feedburner.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (20034168, 'Stacie', 'Hilliam', '314-793-9413', 'Emplak', null, '120 Forest Dale Way', '33-343-4900', 'XO3sWrLGavm', 'shilliam7@t-online.de');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (94522400, 'Curtis', 'Grimbaldeston', '802-816-6687', 'Biaoxi', null, '823 Orin Trail', '72-695-8326', 'GuDi63LZhwu', 'cgrimbaldeston8@mozilla.org');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (57309503, 'Arlana', 'Durnill', '663-292-3631', 'Yamada', null, '8 Luster Alley', '49-372-8799', 'oysPuru', 'adurnill9@shutterfly.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (43922339, 'Beckie', 'Hubberstey', '302-915-5228', 'Blimbing', null, '97 Redwing Pass', '65-320-8767', '7LUGaAO0FSyx', 'bhubbersteya@bigcartel.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (24288118, 'Alexander', 'Edmunds', '427-880-4287', 'Huandiqiao', null, '11672 Bunting Plaza', '78-499-8767', 'dHQuGX5I', 'aedmundsb@mac.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (14276202, 'Rhonda', 'Kulicke', '185-439-6172', 'Puyuan', null, '12 Gale Center', '14-900-0145', 'qIjFVdL0ZZN', 'rkulickec@state.gov');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (89240425, 'Liliane', 'Thacke', '125-484-4058', 'Covão da Carvalha', 'Leiria', '4666 Sunbrook Street', '85-547-9341', 'VG7Zq9EI', 'lthacked@1688.com');
insert into Cliente (DNI_CLIENTE, NOMBRE, APELLIDO, TELEFONO, PROVINCIA, DISTRITO, DIRECCION, ID_CLIENTE, CONTRASENA, EMAIL) values (34443550, 'Martainn', 'Brokenbrow', '147-865-0234', 'Vila de Rei', 'Castelo Branco', '12 Rutledge Alley', '97-893-3800', 'AgfRYcX3M4', 'mbrokenbrowe@163.com');



insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (40838744, 'Gilemette', 'Caherny', 'gcaherny0@blog.com', '0', '93-513-9458', 'KtrAqpy5VVg2');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (51429410, 'Correy', 'O''Mannion', 'comannion1@google.com.br', '1', '81-310-5266', 'XwMZObrFK');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (21906753, 'Horacio', 'Kirkbride', 'hkirkbride2@last.fm', '1', '38-461-0258', '5dOXm2');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (54309330, 'Susanne', 'Yepiskov', 'syepiskov3@nifty.com', '1', '48-547-8415', 'jLk3JiK4h');
insert into Usuario (DNI_USUARIO, NOMBRES, APELLIDOS, EMAIL, PRIVILEGIO, ID_USUARIO, CONTRASENA) values (51571629, 'Steffane', 'Feehely', 'sfeehely4@hhs.gov', '0', '01-945-6520', 'jCmHmPXlb');


insert into Productos (CODIGOPRODUCTO, MODELO, TALLA, COLOR, GENERO, MARCA, PRECIO, CANTIDAD) values (74801988, 'primis in faucibus', 46, 'kvalance1@jalbum.net', 'Male', 'Jeep', 0, 55);
insert into Productos (CODIGOPRODUCTO, MODELO, TALLA, COLOR, GENERO, MARCA, PRECIO, CANTIDAD) values (7266540, 'non mauris morbi', 98, 'gcomber2@msn.com', 'Genderfluid', 'Land Rover', 0, 22);
insert into Productos (CODIGOPRODUCTO, MODELO, TALLA, COLOR, GENERO, MARCA, PRECIO, CANTIDAD) values (47832017, 'quis odio consequat', 2, 'skearney3@infoseek.co.jp', 'Male', 'Volkswagen', 0, 23);
insert into Productos (CODIGOPRODUCTO, MODELO, TALLA, COLOR, GENERO, MARCA, PRECIO, CANTIDAD) values (96254949, 'dui vel sem sed sagittis', 77, 'rwillmett6@newyorker.com', 'Genderqueer', 'BMW', 0, 86);
insert into Productos (CODIGOPRODUCTO, MODELO, TALLA, COLOR, GENERO, MARCA, PRECIO, CANTIDAD) values (29654427, 'a odio', 1, 'lanthoney8@noaa.gov', 'Agender', 'Mercedes-Benz', 0, 58);
