-- Schema for NexusDB
-- Tue Feb 15

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema nexusdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nexusdb` DEFAULT CHARACTER SET utf8 ;
USE `nexusdb` ;

-- -----------------------------------------------------
-- Table `nexusdb`.`Assembly`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Assembly` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Assembly` (
  `AssemblyID` INT NOT NULL AUTO_INCREMENT,
  `AssemblyName` VARCHAR(45) NOT NULL,
  `AssemblyType` VARCHAR(45) NULL,
  `GameID` INT NOT NULL,
  PRIMARY KEY (`AssemblyID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Game` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Game` (
  `GameID` INT NOT NULL AUTO_INCREMENT,
  `GameName` VARCHAR(45) NOT NULL,
  `Description` LONGTEXT NULL,
  `Url` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`GameID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Instruction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Instruction` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Instruction` (
  `InstructionID` INT NOT NULL AUTO_INCREMENT,
  `AssemblyID` INT NOT NULL,
  `Order` SMALLINT NOT NULL,
  `Content` TEXT NULL,
  `MediaPath` VARCHAR(45) NULL,
  PRIMARY KEY (`InstructionID`),
  INDEX `Assembly_idx` (`AssemblyID` ASC) VISIBLE,
  CONSTRAINT `AssemblyInstruction`
    FOREIGN KEY (`AssemblyID`)
    REFERENCES `nexusdb`.`Assembly` (`AssemblyID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Person`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Person` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Person` (
  `PersonID` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(20) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `FirstName` VARCHAR(45) NULL,
  `LastName` VARCHAR(50) NULL,
  `Title` VARCHAR(30) NULL,
  `About` TEXT NULL,
  PRIMARY KEY (`PersonID`),
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Comment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Comment` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Comment` (
  `CommentID` INT NOT NULL AUTO_INCREMENT,
  `TopicID` INT NOT NULL,
  `TopicType` CHAR(1) NOT NULL,
  `CommenterID` INT NOT NULL,
  `IsQuestion` TINYINT ZEROFILL NOT NULL,
  `Content` TEXT NULL,
  `WrittenOn` DATE NOT NULL,
  PRIMARY KEY (`CommentID`),
  INDEX `TopicID_idx` (`TopicID` ASC) VISIBLE,
  INDEX `Commenter_idx` (`CommenterID` ASC) VISIBLE,
  CONSTRAINT `TopicAssembly`
    FOREIGN KEY (`TopicID`)
    REFERENCES `nexusdb`.`Assembly` (`AssemblyID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `TopicGame`
    FOREIGN KEY (`TopicID`)
    REFERENCES `nexusdb`.`Game` (`GameID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `TopicInstruction`
    FOREIGN KEY (`TopicID`)
    REFERENCES `nexusdb`.`Instruction` (`InstructionID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Commenter`
    FOREIGN KEY (`CommenterID`)
    REFERENCES `nexusdb`.`Person` (`PersonID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Person_Game`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Person_Game` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Person_Game` (
  `GameID` INT NOT NULL AUTO_INCREMENT,
  `PersonID` INT NOT NULL,
  `IsFavorite` TINYINT ZEROFILL NULL,
  `IsPlayed` TINYINT ZEROFILL NULL,
  `IsCreator` TINYINT ZEROFILL NULL,
  PRIMARY KEY (`GameID`, `PersonID`),
  INDEX `Person_idx` (`PersonID` ASC) VISIBLE,
  CONSTRAINT `Person`
    FOREIGN KEY (`PersonID`)
    REFERENCES `nexusdb`.`Person` (`PersonID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Game`
    FOREIGN KEY (`GameID`)
    REFERENCES `nexusdb`.`Game` (`GameID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`Component`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`Component` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`Component` (
  `ComponentID` INT NOT NULL AUTO_INCREMENT,
  `Item` VARCHAR(45) NOT NULL,
  `IsTool` TINYINT ZEROFILL NULL,
  `ImagePath` VARCHAR(45) NULL,
  `BuyLink` VARCHAR(45) NULL,
  PRIMARY KEY (`ComponentID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`AssemblyComponent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`AssemblyComponent` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`AssemblyComponent` (
  `AssemblyComponentID` INT NOT NULL AUTO_INCREMENT,
  `AssemblyID` INT NOT NULL,
  `ComponentID` INT NOT NULL,
  PRIMARY KEY (`AssemblyComponentID`),
  INDEX `Assembly_idx` (`AssemblyID` ASC) VISIBLE,
  INDEX `Component_idx` (`ComponentID` ASC) VISIBLE,
  CONSTRAINT `Assembly`
    FOREIGN KEY (`AssemblyID`)
    REFERENCES `nexusdb`.`Assembly` (`AssemblyID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `Component`
    FOREIGN KEY (`ComponentID`)
    REFERENCES `nexusdb`.`Component` (`ComponentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `nexusdb`.`CommentReply`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `nexusdb`.`CommentReply` ;

CREATE TABLE IF NOT EXISTS `nexusdb`.`CommentReply` (
  `OriginalCommentID` INT NOT NULL,
  `ReplyCommentID` INT NOT NULL,
  PRIMARY KEY (`OriginalCommentID`, `ReplyCommentID`),
  INDEX `ReplyComment_idx` (`ReplyCommentID` ASC) VISIBLE,
  CONSTRAINT `OriginalComment`
    FOREIGN KEY (`OriginalCommentID`)
    REFERENCES `nexusdb`.`Comment` (`CommentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `ReplyComment`
    FOREIGN KEY (`ReplyCommentID`)
    REFERENCES `nexusdb`.`Comment` (`CommentID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
