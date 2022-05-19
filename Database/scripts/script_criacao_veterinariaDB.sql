-- MySQL Workbench Synchronization
-- Generated: 2022-04-21 18:31
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Victor Hugo Marega

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `veterinariodb` DEFAULT CHARACTER SET utf8mb3 ;

CREATE TABLE IF NOT EXISTS `veterinariodb`.`animais` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `cor` VARCHAR(45) NOT NULL,
  `idade` VARCHAR(45) NOT NULL,
  `clientes_id` INT(11) NOT NULL,
  `ano_nasc` YEAR NOT NULL,
  `tipo_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `clientes_id`, `tipo_id`),
  INDEX `fk_animais_clientes1_idx` (`clientes_id` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_animais_tipo1_idx` (`tipo_id` ASC) ,
  CONSTRAINT `fk_animais_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `veterinariodb`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_animais_tipo1`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `veterinariodb`.`tipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `veterinariodb`.`usuarios` (
  `id_usuario` INT(11) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `veterinariodb`.`clientes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `url_UNIQUE` (`cpf` ASC) ,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) )
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `veterinariodb`.`raça` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `tipo_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`, `tipo_id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) ,
  INDEX `fk_raça_tipo1_idx` (`tipo_id` ASC) ,
  CONSTRAINT `fk_raça_tipo1`
    FOREIGN KEY (`tipo_id`)
    REFERENCES `veterinariodb`.`tipo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

CREATE TABLE IF NOT EXISTS `veterinariodb`.`tipo` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) ,
  UNIQUE INDEX `nome_UNIQUE` (`nome` ASC) )
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
