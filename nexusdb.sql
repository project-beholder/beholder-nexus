-- Database for Beholder: Nexus
-- current schema by Xuedan Fillmore

DROP DATABASE IF EXISTS nexusdb;
CREATE DATABASE IF NOT EXISTS nexusdb;
USE nexusdb;

SELECT 'CREATING DATABASE STRUCTURE' AS 'INFO';

DROP TABLE IF EXISTS games,
                     games_remixes,
                     assemblies,
                     components,
                     assemblies_components,
                     instructions,
                     comments,
                     comments_replies,
                     people,
                     people_games;

CREATE TABLE games (
    games_id            INT     NOT NULL    AUTO_INCREMENT,
    game_name           VARCHAR NOT NULL,
    game_description    VARCHAR,
    game_url            VARCHAR,
    PRIMARY KEY (game_id)
);

CREATE TABLE games_remixes (
    games_remixes_id,   INT     NOT NULL,
    original_id         INT,        
    remix_id            INT,
    PRIMARY KEY (games_remixes_id),
    FOREIGN KEY (original_id) REFERENCES games(game_id),
    FOREIGN KEY (remix_id) REFERENCES games(game_id)
);

CREATE TABLE assemblies (
    assembly_id         INT     NOT NULL,
    assembly_name       VARCHAR,
    assembly_type       VARCHAR,
    game_id             INT,
    PRIMARY KEY (assembly_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id)
);

CREATE TABLE components (
    component_id        INT     NOT NULL,
    item                VARCHAR,
    is_tool             BOOLEAN,
    img_path            VARCHAR,
    link                VARCHAR,
    PRIMARY KEY (component_id)
);

CREATE TABLE assemblies_components (
    assemblies_components_id    INT     NOT NULL,
    assembly_id         INT,
    component_id        INT,
    PRIMARY KEY (assemblies_components_id),
    FOREIGN KEY (assembly_id)   REFERENCES assemblies(assembly_id),
    FOREIGN KEY (component_id)  REFERENCES components(component_id)
);

CREATE TABLE instructions (
    instruction_id      INT     NOT NULL,
    assembly_id         INT,
    order               SMALLINT,
    content             VARCHAR,
    media_path          CHAR,
    PRIMARY KEY (instruction_id),
    FOREIGN KEY (assembly_id) REFERENCES assemblies(assembly_id)
);

CREATE TABLE comments (
    comment_id          INT     NOT NULL,
    game_id             INT,
    assembly_id         INT,
    instruction_id      INT,
    commenter_id        INT,
    is_question         BOOLEAN,
    content             VARCHAR,
    written_on          DATETIME,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id),
    FOREIGN KEY (assembly_id) REFERENCES assemblies(assembly_id),
    FOREIGN KEY (instruction_id) REFERENCES instructions(instruction_id),
    FOREIGN KEY (commenter_id) REFERENCES people(person_id)
);

CREATE TABLE comments_replies (
    comments_replies_id     INT     NOT NULL,
    comment_id          INT,
    reply_id            INT,
    PRIMARY KEY (comments_replies_id),
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id),
    FOREIGN KEY (reply_id) REFERENCES comments(comment_id)
);

CREATE TABLE people (
    person_id           INT     NOT NULL,
    username            VARCHAR,
    first_name          VARCHAR,
    last_name           VARCHAR,
    title               VARCHAR,
    about               VARCHAR,
    PRIMARY KEY (person_id)
);

CREATE TABLE people_games (
    people_games_id     INT     NOT NULL,
    game_id             INT,
    person_id           INT,
    is_favorite         BOOLEAN,
    is_played           BOOLEAN,
    is_creator          BOOLEAN,
    PRIMARY KEY (people_games_id),
    FOREIGN KEY (game_id) REFERENCES games(game_id),
    FOREIGN KEY (person_id) REFERENCES people(person_id)
);